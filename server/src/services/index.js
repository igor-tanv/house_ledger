/*
 * Library for storing and editing data
 *
 */

// Dependencies
let fs = require('fs').promises;
let path = require('path');

// Container for module (to be exported)
let LedgerService = {};

// Base directory of db folder
let ledgerEntryDir = path.join(__dirname, '../db/ledger-entries');

// Return a list of all ledger entries
LedgerService.read = async () => {
  let ledgerList = []
  const files = await fs.readdir(ledgerEntryDir)
  for (let i = 0; i < files.length; ++i) {
    const file = files[i]
    const rawdata = await fs.readFile(ledgerEntryDir + '/' + file)
    ledgerList.push(JSON.parse(rawdata))
  }
  return ledgerList
}

// Write data to a file
LedgerService.create = async (newEntry) => {
  await fs.writeFile(ledgerEntryDir + '/' + newEntry.timestamp + '.json', JSON.stringify(newEntry))
  return newEntry
}

// Export the module
module.exports = LedgerService
