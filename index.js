// Code your solution in this file!

function logDriverNames(drivers) {
  drivers.forEach(function(driver) {
    console.log(driver.name)
  });
};

function logDriversByHometown(drivers, location) {
  drivers.forEach(function(driver) {
    if (driver.hometown === location) {
      console.log(driver.name)
    };
  });
};

function driversByRevenue(drivers) {
  let newDrivers = Object.create(drivers);
  newDrivers.sort(function (a, b) {
    return a.revenue - b.revenue;
  });
  return newDrivers;
};

function driversByName(drivers) {
  let newDrivers = Object.create(drivers);
  newDrivers.sort(function (a, b) {
    return a.name.localeCompare(b.name);
  });
  return newDrivers;
};

function totalRevenue(drivers) {
  return drivers.reduce(function(acc, driver) {
    return acc += driver.revenue;
  }, 0);
};

function averageRevenue(drivers) {
  return totalRevenue(drivers)/drivers.length;
};
