var customer={
    custId:511,
    custName:'Manideep',
    custAccNum: 114455664778,

    getSavingsDeposit(){
        var balance=300000
        console.log(`Your Balance in Savings Account is ${balance}`)
    },

    getRecurringDeposit(){
       var amount=50000
        var interest=0.5*amount
        console.log(`Hello ${this.custName} , Your Interest for the Recurring deposit is ${interest}`)
    },
    getAccountDetails(){
        console.log(customer.custId,customer.custName)   
    }  
}

customer.getSavingsDeposit()
customer.getRecurringDeposit()
customer.getAccountDetails()
