// Code your solution in this file!
const logDriverNames = function(arrayOfDriverObjects) {
    arrayOfDriverObjects.forEach(driver => {
        console.log(driver.name)
    });
}

const logDriversByHometown = function(arrayOfDriverObjects, location) {
    arrayOfDriverObjects.forEach(driver => {
        if (driver.hometown === location) {
            console.log(driver.name);
        }
    });
}

const compareRevenue = function(a, b) {
    return a.revenue - b.revenue;
}

const driversByRevenue = function(arrayOfDriverObjects) {
    const newArrayOfDriverObjects = [...arrayOfDriverObjects];
    return newArrayOfDriverObjects.sort(compareRevenue);
}

const compareName = function(a, b) {
    const first = a.name;
    const second = b.name;
    return first.localeCompare(second);
}

const driversByName = function(arrayOfDriverObjects) {
    const newArrayOfDriverObjects = [...arrayOfDriverObjects];
    return newArrayOfDriverObjects.sort(compareName);
}

const totalRevenue = function(arrayOfDriverObjects) {
    const reducer = (accu, currVal) => accu += currVal.revenue;
    return arrayOfDriverObjects.reduce(reducer, 0);
}

const averageRevenue = function(arrayOfDriverObjects) {
    return totalRevenue(arrayOfDriverObjects) / (arrayOfDriverObjects.length)
}

