// Code your solution in this file!
const returnFirstTwoDrivers=function returnFirstTwoDrivers(){
let driver= ['Antonia', 'Nuru', 'Amari', 'Mo'];
return driver.slice(0, 2);
}
const returnLastTwoDrivers=function returnLastTwoDrivers(){
    let driver= ['Antonia', 'Nuru', 'Amari', 'Mo'];
    return driver.slice(2);
    }
let selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(integer) {
  
    return function(fare) {
      return fare * integer;
    }
  }
  const fareDoubler = createFareMultiplier(2);
  
  const fareTripler = createFareMultiplier(3);

  function selectDifferentDrivers(driversArray, returnFunction) {
    if (returnFunction === returnFirstTwoDrivers) {
      return returnFirstTwoDrivers(driversArray);
    } else if (returnFunction === returnLastTwoDrivers) {
      return returnLastTwoDrivers(driversArray);
    }
  }

  
  
  
  