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

function endDate(month, days, year){

  //checks for next year
  if(month == 13){
    month = 1
    year += 1
  }

  //checks for leap year
  let leapYear = false;

  if(year%4 ==0 && year%100 == 0 && year%400 == 0){
     leapYear = true
  } else if (year%4 == 0 && year%100 != 0){
     leapYear = true
  }


  //checks for feb
  if(month == 2){
    if(leapYear == true){
      if(days > 29){
        days -= 29 
        month += 1
        return endDate(month, days, year)
      } else {
       return {"month": month, "day": days, "year": year}
      }
    } else {
     if(days > 28){
       days -= 28
       month += 1
       return endDate(month, days, year)
     } else {
       return {"month": month, "day": days, "year": year}
     }
    }
 }

  //checks for months with 30 days
    if([4, 6, 9, 11].indexOf(month) > -1){
      if(days > 30){
        days -= 30
        month += 1
        return endDate(month, days, year)
      }else {
        return {"month": month, "day": days, "year": year}
      }
    }

  //checks for months with 31 days
  if([1,3,5,7,8,10,12].indexOf(month) > -1){
    if(days > 31){
      days -= 31
      month += 1
      return endDate(month, days, year)
    } else {
      return {"month": month, "day": days, "year": year}
    }
  }
}

function calculate(object1, days){
  //finds the day of the week the holiday is on
  let day = findDay(object1)
  //checks if vacation begins on Monday
  let begin = 0 
  if(day == 1){
    begin = object1.day - 2
  } else {
    begin = object1.day
  }

  //calculates # of weekends
  let weekends = 0
  if(days > 4){
    weekends = Math.floor(days/5)
  } else {
    if(day == 2){
      if(days > 2){
        weekends = 1
      }
    } else if(day == 3){
      if(days > 1){
        weekends = 1
      }
    } else if (day == 4){
      if (day > 0){
        weekends = 1
      }
    }
  }

  //calculates total days from the beginning of the month
  let totalDays = object1.day + days + (weekends * 2)
  //calculates the last day of vacation
  let end = endDate(object1.month, totalDays, object1.year)


  //checks if last day lands on a friday
  if(findDay(end) == 5){
    end = endDate(end.month, end.day + 2, end.year)
  }

  return `${object1.month}/${begin}/${object1.year} - ${end.month}/${end.day}/${end.year}`
  
}

calculate(holidays.yr2020[2], 11)

