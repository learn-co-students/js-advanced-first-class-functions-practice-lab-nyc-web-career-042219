// Code your solution in this file!



const logDriverNames = function (arr) {
  arr.forEach(function (a) {
    console.log(a.name)
  })
}




const logDriversByHometown = function(arr, hometown){
  arr.forEach(function (a) {
  if (a.hometown === hometown){
  console.log(a.name);
    }
  });
}

const driversByRevenue = function (drivers) {
  return drivers.slice().sort(function (driverOne, driverTwo) {
    return driverOne.revenue - driverTwo.revenue;
  });
};


const driversByName = function (drivers) {
  return drivers.slice().sort(function (driverOne, driverTwo) {
    return driverOne.name.localeCompare(driverTwo.name);
    })
}


const totalRevenue = function(drivers){
  let t = 0
  drivers.forEach(function(a){
   t +=  a.revenue 
  })
  return t
}

const averageRevenue = function(drivers){
    return totalRevenue(drivers) /drivers.length
  
}
