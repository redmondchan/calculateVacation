console.log("Hello")

let holidays = [
    {
      "name": "Martin Luther King, Jr. Day",
      "year": 2020,
      "day": 20,
      "month": 1 
    },
    {
      "name": "Independence Day",
      "year": 2020,
      "day": 4,
      "month": 7 
    }
  ]

function findDay(object){
  let day = new Date (`${object.month}/${object.day}/${object.year} 12:00:00`)

  return day.getDay()
}

function mondayHolidays(object, days){
  let weekends = days/5
  let begin = (object.day - 2)
  let end = (object.day) + (weekends * 2) + days

  return `${begin} - ${end}`
}

mondayHolidays(holidays[0], 5)

// function calculateVacation(object, days){
//   let weekends = days/5
//   let begin = 0
//   let end = 0
//   if(weekends > 0){
//     if(object){

//     }
//   }
//   return total
// }

// calculateVacation(holidays[0], 5)
// findDay(holidays[0])