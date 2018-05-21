/* eslint-disable no-unused-vars */
const mongoose = require('mongoose');
const fs = require('fs');
const Grid = require('gridfs-stream');
Grid.mongo = mongoose.mongo;
const crypto = require('crypto');
const path = require('path');

class Service {
  constructor(options) {
    this.options = options || {};
  }

  async find(params) {
    return await this.download(params.query.filename).catch(err => {
      return {
        error: err
      }
    });
  }

  async get(id, params) {
    return {
      id,
      text: `A new message with ID: ${id}!`
    };
  }

  async create(data, params) {
    if (Array.isArray(data)) {
      return Promise.all(data.map(current => this.create(current, params)));
    }

    const file = data.file;

    if (!file) {
      return new Error('No File Found!');
    }

    const filename = await this.fileName(file);

    return await this.upload(file, filename)
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
    return {
      id
    };
  }

  async upload(file, filename) {
    return new Promise((resolve, reject) => {
      // const gfs = Grid(mongoUrl);      
      const conn = mongoose.createConnection(this.options.mongoUrl);

      let gfs;

      conn.once('open', () => {
        gfs = Grid(conn.db);

        let writeStream = gfs.createWriteStream({
          filename: filename,
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

  async fileName(file) {
    return new Promise((resolve, reject) => {
      return crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = buf.toString('hex') + path.extname(file.originalname);
        resolve(filename);
      })
    })
  }

  async download(filename) {
    return new Promise((resolve, reject) => {
      const conn = mongoose.createConnection(this.options.mongoUrl);

      let gfs;
      conn.once('open', () => {
        gfs = Grid(conn.db);
        gfs.files.find({
          filename: filename
        }).toArray((err, files) => {

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
            console.log(img)
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
