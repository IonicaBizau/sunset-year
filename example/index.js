"use strict";

const sunset = require("../lib")
    , LeTable = require("le-table")
    ;

sunset((err, sunsets) => {
    let table = new LeTable();
    table.addRow(["Date", "Sunset Time"]);
    sunsets.forEach(x => {
        table.addRow([x.date.format("LL"), x.time.format("HH:mm")])
    });
    console.log(table.toString());
});
// +------------------+------------------+
// |Date              |Sunset Time       |
// +------------------+------------------+
// |February 2, 2015  |17:26             |
// +------------------+------------------+
// |February 9, 2015  |17:37             |
// +------------------+------------------+
// |February 16, 2015 |17:47             |
// +------------------+------------------+
// ...
// +------------------+------------------+
// |January 25, 2016  |17:14             |
// +------------------+------------------+
// |February 1, 2016  |17:24             |
// +------------------+------------------+
