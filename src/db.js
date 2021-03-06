const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const lodashId = require('lodash-id');

const adapter = new FileSync('db.json');
const db = low(adapter);
db._.mixin(lodashId);

db.defaults({ peers: [] }).write();
db.defaults({ uids: [] }).write();

const peers = db.get('peers');
const uids = db.get('uids');

module.exports = { db, peers, uids };
