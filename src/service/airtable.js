var Airtable = require('airtable');
Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: 'keyYBgDwHL1wU0BZh'
});
var base = Airtable.base('appQBrZJS5RUN4WPl');
var sponser = [];

// Fill schedule[] with data from 小黑客松-流程
base('贊助商').select({
    // Selecting the first 10 records in Main View:
    maxRecords: 20,
    view: "Grid view"
}).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.

    records.forEach(function(record) {
        // console.log('Retrieved', record.get('Name'));
        sponser.push(record);
    });

    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
    fetchNextPage();

}, function done(err) {
    if (err) { console.error(err); return; }
});

// use all Airtable data in other file with `import alldata from '/path/to/airtable.js'`
export default { sponser };

// import only QA table with `import { qas } from '/path/to/airtable.js'`
export { sponser };
