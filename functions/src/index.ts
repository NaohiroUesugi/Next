import * as functions from 'firebase-functions';

const onRequest = functions.https.onRequest;

// These relative paths will exist after compiling everything
// const index = require('./_next/serverless/pages/index');
const about = require('./_next/serverless/pages/about');

// These named exports will map to Firebase Function names
// exports.index = onRequest((req, res) => index.render(req, res));
exports.about = onRequest((req, res) => about.render(req, res));
