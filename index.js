const addDays = require('date-fns/addDays')
function after(days) {
  const next = addDays(new Date(2020, 7, 22), days)
  console.log(`${next.getDate()}-${next.getMonth() + 1}-${next.getFullYear()}`)
}
module.exports = after
