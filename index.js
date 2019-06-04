const logDriverNames = function(drivers){
    drivers.forEach(function(driver){
        console.log(driver.name);
    });
};

const logDriversByHometown = function(drivers, location){
    let results = drivers.filter(driver => driver.hometown === location);
    results.forEach(function(result){
        console.log(result.name);
    });
};

const revComparator = function(a, b){
    return a.revenue - b.revenue;
};

const driversByRevenue = function(drivers){
    const sortedDrivers = [...drivers];
    return sortedDrivers.sort(revComparator);
};

const nameComparator = function(a, b){
    let nameA = a.name;
    let nameB = b.name;
    return nameA.localeCompare(nameB);
};

const driversByName = function(drivers){
    let sortedDrivers = [...drivers];
    return sortedDrivers.sort(nameComparator);
};

const totalRevenue = function(drivers){
    const revReducer = (accumulator, currentValue) => accumulator + currentValue.revenue;
    return drivers.reduce(revReducer, 0);
};

const averageRevenue = function(drivers){
    return totalRevenue(drivers)/drivers.length;
};