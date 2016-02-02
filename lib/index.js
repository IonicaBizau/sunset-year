"use strict";

const Daty = require("daty")
    , suncalc = require("suncalc")
    , ipinfo = require("ipinfo")
    ;

/**
 * sunsets
 * Gets a list of objects containing the sunset times each week, during the year.
 *
 * @name sunsets
 * @function
 * @param {Function} callback The callback function.
 */
module.exports = function sunsets (callback) {
    let sunsets = []
      , now = new Daty()
      , past = now.clone().subtract(1, "year")
      ;

    ipinfo((err, loc) => {
        if (err) { return callback(err); }

        let coordinates = loc.loc.split(",").map(parseFloat);
        while (past.isBefore(now)) {
            sunsets.push({
                time: new Daty(suncalc.getTimes(past, coordinates[0], coordinates[1]).sunset)
              , date: past.clone()
            });
            past.add(1, "week");
        }
        callback(null, sunsets);
    });
};
