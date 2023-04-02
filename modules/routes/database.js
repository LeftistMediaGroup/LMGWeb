// Allow require
import { createRequire } from "module";
const require = createRequire(import.meta.url);

import express from 'express';
const router = express.Router();

var PouchDB = require('pouchdb');

router.use('/account', require('express-pouchdb')(PouchDB.defaults({
    prefix: './modules/database/',
})));

export default router;