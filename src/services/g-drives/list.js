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

const drive = google.drive({
    version: 'v3',
    auth: oAuthClient.oAuth2Client
});

async function runSample(query) {
    const params = { pageSize: 3 };
    params.q = query;
    const res = await drive.files.list(params);
    console.log(res.data);
    return res.data;
}

if (module === require.main) {
    const scopes = ['https://www.googleapis.com/auth/drive.metadata.readonly'];
    oAuthClient.authenticate(scopes)
        .then(c => runSample())
        .catch(console.error);
}

module.exports = {
    runSample,
    client: oAuthClient.oAuth2Client
};