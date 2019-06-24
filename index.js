// Code your solution in this file!

const logDriverNames = drivers => drivers.forEach(driver => console.log(driver.name));

const logDriversByHometown = (drivers, location) => drivers.filter(({hometown}) => hometown ==location).forEach(({name}) => console.log(name));

const driversByRevenue = drivers => drivers.slice().sort(({revenue: a},{revenue: b}) => a - b);

const driversByName = drivers => drivers.slice().sort(({name: a},{name: b}) => a.localeCompare(b));

const totalRevenue = drivers => drivers.reduce((total, {revenue}) => total + revenue, 0);

const averageRevenue = drivers => totalRevenue(drivers) / drivers.length;
