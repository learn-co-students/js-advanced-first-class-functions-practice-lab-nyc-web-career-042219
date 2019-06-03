function logDriverNames(drivers){
	return drivers.forEach(function(element){
		console.log(element.name)
	})
}

function logDriversByHometown(drivers, location){
	return drivers.filter(driver => driver.hometown === location).forEach(function(driver){
		console.log(driver.name);
	})
}

function driversByRevenue(drivers){
	let new_drivers = [...drivers]
	return new_drivers.sort(function(driver1, driver2){
		return driver1.revenue - driver2.revenue;
	});
}

function driversByName(drivers){
	let new_drivers = [...drivers];
	return new_drivers.sort(function(driver1, driver2){
		return driver1.name.localeCompare(driver2.name);
	});
}

function totalRevenue(drivers){
return drivers.reduce(function(total, currentDriver){
		return total + currentDriver.revenue;
	}, 0);
}

function averageRevenue(drivers){
	const totalRev = totalRevenue(drivers);
	return totalRev/drivers.length;
}