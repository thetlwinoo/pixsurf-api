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
    return await this.download({
      filename: params.query.filename
    }).catch(err => {
      return {
        error: err
      }
    });
  }

  async get(id, params) {
    return await this.getFile({
      _id: id
    }).catch(err => {
      return {
        error: err
      }
    });
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
    return await this.removeFile({
        _id: id
      })
      .then(v => v)
      .catch(err => {
        throw new Error(err);
      })
  }

  async upload(file, filename) {
    console.log(file)
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

  async download(option) {
    return new Promise((resolve, reject) => {
      const conn = mongoose.createConnection(this.options.mongoUrl);

      let gfs;
      conn.once('open', () => {
        gfs = Grid(conn.db);
        gfs.files.find(option).toArray((err, files) => {

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

  async removeFile(option) {
    console.log(option)
    return new Promise((resolve, reject) => {
      const conn = mongoose.createConnection(this.options.mongoUrl);

      let gfs;
      conn.once('open', () => {
        gfs = Grid(conn.db);
        gfs.exist(option, (err, found) => {
          if (err) {
            reject(err);
            return false;
          }
          gfs.remove(option, (err) => {
            if (err) {
              reject(err);
              return false;
            }
            resolve({
              message: 'success',
              error: false,
              id: option._id
            });
          });
        })
      });
    });
  }

  async getFile(option) {
    return new Promise((resolve, reject) => {
      const conn = mongoose.createConnection(this.options.mongoUrl);

      let gfs;
      conn.once('open', () => {
        gfs = Grid(conn.db);

        let data = [];

        gfs.files.find().toArray(function (err, files) {
          const file = files.filter(file => file._id == option._id)[0];
          let readstream = gfs.createReadStream(option);

          readstream.on('data', (chunk) => {
            data.push(chunk);
          });

          readstream.on('end', () => {
            data = Buffer.concat(data);
            let img = 'data:' + file.contentType + ';base64,' + Buffer(data).toString('base64');
            resolve(img);
          });

          readstream.on('error', (err) => {
            reject(err);
            return false;
          });
        });
        // console.log('File', file)        
      });
    });
  }

}

module.exports = function (options) {
  return new Service(options);
};

module.exports.Service = Service;
