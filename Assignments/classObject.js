var mobile1 = /** @class */ (function () {
    function mobile1(name, cost, desc) {
        this.brand = name;
        this.price = cost;
        this.description = desc;
    }
    mobile1.prototype.getMobileInfo = function () {
        return "Mobile Brand is " + this.brand + " \n Mobile Price is " + this.price + "\n Mobile Description is " + this.description;
    };
    return mobile1;
}());
var mob1 = new mobile1('Samsung', 25000, 'New Model got released in 2020');
var mob2 = new mobile1('Iphone', 95000, 'New Model got released in 2005');

console.log(mob1)
