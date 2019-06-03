// Code your solution in this file!
function logDriverNames(drivers){
    drivers.forEach(function(driver){
        console.log(driver.name);
    });
}

function logDriversByHometown(drivers, location){
        
       return  logDriverNames(drivers.filter(driver => driver.hometown === location));
        
}

function driversByRevenue(drivers){
        let sortedDrivers = [...drivers]
        return sortedDrivers.sort(function(a,b){
            return a.revenue-b.revenue;
        })
}

function driversByName(drivers){
        let sortedDrivers = [...drivers]
        return sortedDrivers.sort(function(a,b){
            return a.name.localeCompare(b.name);
        })
}

function totalRevenue(drivers){
    return drivers.reduce(function (agg, el, i, arr){
        return agg + el.revenue
    }, 0)
}

function averageRevenue(drivers){
    return totalRevenue(drivers)/drivers.length;
}