var oldCitroen = {
    year: new Date(),
    broken: true,
    color: 'red',
    summary: function () {
        return "Color is " + this.color;
    }
};
var drink = {
    year: new Date(),
    carbonated: true,
    color: 'brown',
    summary: function () {
        return "My drinks color is " + this.color;
    }
};
var printSummary = function (item) {
    //   console.log(vehicle.year, vehicle.broken, vehicle.color);
    console.log(item.summary);
};
printSummary(oldCitroen);
printSummary(drink);
