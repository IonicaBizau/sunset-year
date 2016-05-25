
# sunset-year

 [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![AMA](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Version](https://img.shields.io/npm/v/sunset-year.svg)](https://www.npmjs.com/package/sunset-year) [![Downloads](https://img.shields.io/npm/dt/sunset-year.svg)](https://www.npmjs.com/package/sunset-year) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Sunset times during the year, every week.

## :cloud: Installation

```sh
$ npm i --save sunset-year
```


## :clipboard: Example



```js
const sunset = require("sunset-year")
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
```

## :memo: Documentation


### `sunsets(callback)`
Gets a list of objects containing the sunset times each week, during the year.

#### Params
- **Function** `callback`: The callback function.



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2016#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
