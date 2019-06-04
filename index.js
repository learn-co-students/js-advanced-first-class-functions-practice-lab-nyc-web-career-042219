// Code your solution in this file!


const logDriverNames = function logDriverNames(drivers) {
  drivers.forEach(function(driver){
    console.log(driver.name);
  });
}

const logDriversByHometown = function logDriversByHometown(drivers, location) {
  drivers.forEach(function(driver){
    driver.hometown === location ? console.log(driver.name) : false;
  });
}

const driversByRevenue = function driversByRevenue(drivers){
  let new_drivers = [...drivers]
  new_drivers.sort(function(a, b){
    return a.revenue - b.revenue;
  });
  return new_drivers;
}
const driversByName = function driversByName(drivers){
  let new_drivers = [...drivers]
  new_drivers.sort(function(a, b){
    return a.name.localeCompare(b.name);
  });
  return new_drivers;
}

const totalRevenue = function totalRevenue(drivers) {
  let initialValue = 0;
  var drivers_revenue = drivers.reduce(function (accumulator, driver) {
      return accumulator + driver.revenue;
  },initialValue);
  return drivers_revenue
}

const averageRevenue = function averageRevenue(drivers) {
  let initialValue = 0;
  var drivers_revenue = drivers.reduce(function (accumulator, driver) {
      return accumulator + driver.revenue;
  },initialValue);
  return (drivers_revenue / drivers.length)
}
