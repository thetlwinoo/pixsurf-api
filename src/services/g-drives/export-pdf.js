// Copyright 2016, Google, Inc.
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

const { google } = require('googleapis');
const oAuthClient = require('./oauth-client');
const fs = require('fs');
const os = require('os');

const drive = google.drive({
    version: 'v3',
    auth: oAuthClient.oAuth2Client
});

async function runSample() {
    // [START main_body]
    return new Promise(async (resolve, reject) => {
        const fileId = '1ZdR3L3qP4Bkq8noWLJHSr_iBau0DNT4Kli4SxNc2YEo';
        const dest = fs.createWriteStream(`${os.tmpdir()}/resume.pdf`);

        const res = await drive.files.export(
            { fileId, mimeType: 'application/pdf' },
            { responseType: 'stream' }
        );
        res.data
            .on('end', () => {
                console.log('Done downloading document.');
                resolve();
            })
            .on('error', err => {
                console.error('Error downloading document.');
                reject(err);
            })
            .pipe(dest);
    });
    // [END main_body]
}

// if invoked directly (not tests), authenticate and run the samples
if (module === require.main) {
    const scopes = ['https://www.googleapis.com/auth/drive.metadata.readonly'];
    oAuthClient.authenticate(scopes)
        .then(c => runSample())
        .catch(console.error);
}

// export functions for testing purposes
module.exports = {
    runSample,
    client: oAuthClient.oAuth2Client
};