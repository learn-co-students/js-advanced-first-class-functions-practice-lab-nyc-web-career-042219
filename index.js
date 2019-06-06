// Code your solution in this file!
function logDriverNames(drivers){
  drivers.forEach(function(driver) {
  console.log(driver.name);
  });

};


function logDriversByHometown(drivers, town){
  drivers.forEach(function(driver) {
    if (driver.hometown === town){
      console.log(driver.name);
    }
  });

};

function driversByRevenue(drivers){
  let newDrivers = drivers.slice()
  newDrivers.sort(function(a, b){return a.revenue - b.revenue});
  return newDrivers
};

function driversByName(drivers){
  let newDrivers = drivers.slice();
  newDrivers.sort(function(a,b){return (a.name).localeCompare(b.name)});
  return newDrivers;
};

function totalRevenue(drivers){
  let thing = (a,b) => a+b.revenue;
  return drivers.reduce(thing,0)
};

function averageRevenue(drivers){
  return totalRevenue(drivers)/drivers.length
};
