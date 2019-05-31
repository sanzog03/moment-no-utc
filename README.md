# @sanzog03/moment-no-utc

[![npm scoped](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

# Descriptions:
Below are the available functions, that takes in x and spits out y (i.e. x -> y)

  - stringDateTime(moment -> string) : takes in moment date-time, gives out string date-time
  - standardDateTime(string -> string) : takes in string date-time, gives out "UTC-free" string date-time
  - standardDate(string -> string) : takes in string date-time, gives out "UTC-free" string date
  - standardTime(string -> string) : takes in string date-time, gives out "UTC-free" string time
  - standardHour(string -> string) : takes in string date-time, gives out "UTC-free" string hour
  - standardMinute(string -> string) : takes in string date-time, gives out "UTC-free" string minutes
  - momentHour(string -> moment) : takes in above converted string output , gives out "UTC-free" moment hour
  - momentDate(string -> moment) : takes in above converted string output , gives out "UTC-free" moment date-time

utc free moment date-time can be used to preform regular momentjs operations.

# Steps:

To install this package:
```
npm install @sanzog03/moment-no-utc
```

Inside your js project file:
```
const noUTC = require("@sanzog03/moment-no-utc")
```

Functions usage:
```
let stringDateTime = noUTC.stringDateTime(moment());
let onlyDate = noUTC.stringDate(stringDateTime)
let momentDate = noUTC.momentDate(onlyDate)
```

now, use this moment date to do utc free moment date comparisions / expressions
