const moment = require("moment")

// takes date / time information in string format
// Returned date / time information is in string format
// NOTE: time are in 24 hours format.

//date-time to formatted dateTime ; s => s
let odateTime = (dateTime) => moment(dateTime).format('YYYY-MM-DDTHH:mm:ss').toString()

//date-time to consistent date-time; s => s
let consistentDateTime = (dateTime) => dateTime.slice(0, 19)

//unformatted date-time to consistent date-time; s => s
let standardDateTime = (dateTime) => {
  return (odateTime(consistentDateTime(dateTime)))
}

//unformatted date-time to consistent date; s => s
let standardDate = (dateTime) => {
  let sdt = standardDateTime(dateTime);
  return moment(sdt).format('YYYY-MM-DD').toString();
}

//unformatted date-time to consistent time; s => s
let standardTime = (dateTime) => {
  let sdt = standardDateTime(dateTime);
  return moment(sdt).format('HH:mm:ss').toString();
}

//unformatted date-time to consistent hour; s => s
let standardHour = (dateTime) => {
  let sdt = standardDateTime(dateTime);
  return moment(sdt).format('HH').toString();
}

//unformatted date-time to consistent minute; s => s
let standardMinute = (dateTime) => {
  let sdt = standardDateTime(dateTime);
  return moment(sdt).format('mm').toString();
}

//@@moment formatters

//hour to moment comparable hour; s => m
let momentHour = (hour) => moment(hour, 'HH:mm:ss')

//date to moment date; s => m
let momentDate = (date) => moment(date, 'YYYY-MM-DD')

//moment to consistent DateTime; m => s
let stringDateTime = (mDateTime) => {
  let sDT = mDateTime.format().toString();
  return consistentDateTime(sDT)
}

module.exports = {
  standardDateTime,
  standardDate,
  standardTime,
  standardHour,
  standardMinute,
  momentHour,
  momentDate,
  stringDateTime
}


//get date-time in yyyy-mm-ddThh:mm:ss format
//remove the utc information
//now the  date time is consistent
//extract date information only; in moment format
//extract time information only; in moment format
