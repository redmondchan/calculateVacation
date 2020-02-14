console.log("Hello")

let holidays = {
  "yr2019": [
    {
      "name": "Christmas",
      "year": 2019,
      "day": 25,
      "month": 12
    }
  ],
  "yr2020": [
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
    },
    {
      "name": "Washington's Birthday",
      "year": 2020,
      "day": 17,
      "month": 2
    },
    {
      "name": "Christmas",
      "year": 2020,
      "day": 25,
      "month": 12
    }
  ]
}

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

function christmasVacation(object1, days){
  let weekends = days/5
  let begin = 0
  let day = findDay(object1)
  let result = ""

  if(findDay == 1){
    begin = object1.day - 2
  } else {
    begin = object1.day
  }
  let end = (object1.day) + (weekends * 2) + days
  if(end > 31){
    let endYear = object1.year + 1
    end -= 31 
    end += 1

    let endMonth = object1.month
    if(endMonth == 12){
      endMonth = 1
    } else {
      endMonth += 1
    }

    if([4,6,9,11].indexOf(endMonth) > -1){
      if(end > 30){
        while(end > 30){
          endMonth += 1
          end -= 30
        }
      }
    }

    if([1,3,5,7,8,10,12].indexOf(endMonth) > -1){
      if(end > 31){
        while(end > 31){
          if(endMonth == 12){
            endMonth = 1
            endYear += 1
          } else {
            endMonth += 1
          }
          end -= 31
        }
      }
    }

  

    //checks if vacation ends on weekend, if it does add the weekend to total duration
    let endDay = findDay({"month": 1, "day": end, "year": endYear})

    if(endDay == 6 || endDay == 0){
      end += 2
    }

    return `12/${begin}/${object1.year} - ${endMonth}/${end}/${endYear}`
  }
  //december always has 31 days
  return `12/${begin}/${object1.year} - 2/${end}/${object1.year}`
}

christmasVacation(holidays.yr2020[3], 30)
// let x = findDay(holidays.yr2019[0])
// console.log(x)

// mondayHolidays(holidays[2], 5)

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