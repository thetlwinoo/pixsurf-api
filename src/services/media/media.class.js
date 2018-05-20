/* eslint-disable no-unused-vars */
const mongoose = require('mongoose');
const fs = require('fs');
const Grid = require('gridfs-stream');
Grid.mongo = mongoose.mongo;

class Service {
  constructor(options) {
    this.options = options || {};
  }

  async find(params) {
    return await this.download(params.query.filename).catch(err => {
      return { error: err }
    });
  }

  async get(id, params) {
    return {
      id, text: `A new message with ID: ${id}!`
    };
  }

  async create(data, params) {
    if (Array.isArray(data)) {
      return Promise.all(data.map(current => this.create(current, params)));
    }
    const file = data.file;

    console.log('FFile', file)
    return await this.upload(file)
      .then(v => {
        data = v;
        return data;
      })
      .catch(err => {
        throw new Error(err);
      })
  }

  async update(id, data, params) {
    return data;
  }

  async patch(id, data, params) {
    return data;
  }

  async remove(id, params) {
    return { id };
  }

  async upload(file) {
    return new Promise((resolve, reject) => {
      // const gfs = Grid(mongoUrl);      
      const conn = mongoose.createConnection(this.options.mongoUrl);

      let gfs;

      conn.once('open', () => {
        gfs = Grid(conn.db);

        let writeStream = gfs.createWriteStream({
          filename: 'img_' + file.originalname,
          mode: 'w',
          content_type: file.mimetype
        });

        writeStream.on('close', (file) => {
          resolve(file)
        });

        writeStream.write(file.buffer);
        writeStream.end();
      })
    });
  }

  async download(filename) {
    return new Promise((resolve, reject) => {
      const conn = mongoose.createConnection(this.options.mongoUrl);

      let gfs;
      conn.once('open', () => {
        gfs = Grid(conn.db);
        gfs.files.find({ filename: filename }).toArray((err, files) => {

          if (files.length === 0) {
            reject('File Not Found!');
            return false;
          }

          let data = [];
          let readstream = gfs.createReadStream({
            filename: files[0].filename
          });

          readstream.on('data', (chunk) => {
            data.push(chunk);
          });

          readstream.on('end', () => {
            data = Buffer.concat(data);
            let img = 'data:' + files[0].contentType + ';base64,' + Buffer(data).toString('base64');
            resolve(img);
          });

          readstream.on('error', (err) => {
            reject(err);
            return false;
          });

        });
      });
    });
  }

}

module.exports = function (options) {
  return new Service(options);
};

module.exports.Service = Service;
