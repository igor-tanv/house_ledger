/*
 * Library for storing and editing data
 *
 */

// Dependencies
let fs = require('fs');
let path = require('path');

// Container for module (to be exported)
let LedgerService = {};

// Base directory of db folder
let baseDir = path.join(__dirname, '../db/ledger-entries');

// Write data to a file
LedgerService.create = function (newEntry) {
  fs.writeFile(baseDir + '/' + newEntry.timestamp + '.json', JSON.stringify(newEntry), function (err) {
    if (err) throw err
  });
  return newEntry
}

// Export the module
module.exports = LedgerService
