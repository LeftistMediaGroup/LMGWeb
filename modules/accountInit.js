// Allow require
import { createRequire } from "module";
const require = createRequire(import.meta.url);

var PouchDB = require("pouchdb");

var account_db = new PouchDB(
  "https://Back.LeftistMediaGroup.org/database/account"
);

account_db.info().then(function () {
    account_db.get('Accounts').catch(function (err) {
        if (err.name === 'not_found') {
            return data = {
                "_id": "Accounts",
                "users": {}
            }
        } else {
            throw err;
        }
    }).then(function (accounts) {
        console.log(`New Accounts file: ${JSON.stringify(accounts, null, 2)}`);

        return accounts;
    }).then(function (accounts) {
        account_db.put(accounts);

        console.log("Account file created");
    }).catch(function (err) {
        console.log(err);
    });
});

