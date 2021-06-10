class mobile1{
    brand:string
    price:number
    description:string
    constructor(name:string,cost:number,desc:string){
        this.brand=name
        this.price=cost
        this.description=desc
    }
    getMobileInfo(){
        return `Mobile Brand is ${this.brand} \n Mobile Price is ${this.price}\n Mobile Description is ${this.description}`
    }

}

let mob1= new mobile1('Samsung',25000,'New Model got released in 2020')
let mob2=new mobile1('Iphone',95000,'New Model got released in 2005')

console.log(mob1)



