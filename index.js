let accountName = 'Pooja';
let withdrawAmount ;

withdrawAmount = 0 + window.prompt( accountName + " " + "please enter the $US that you want to withdraw");
var accountBalance = 2000;
withdrawAmount = Number.parseInt(withdrawAmount);

console.log( typeof withdrawAmount);


if( withdrawAmount == "" || withdrawAmount <= 0 || typeof(withdrawAmount) == "string"){
        document.getElementById('notValidAmount').innerHTML = accountName + " " + "Please enter valid amount";
}
else{

        if( withdrawAmount > 0 && withdrawAmount < 2000 ){

                if( (withdrawAmount % 5) == 0){

                        let bankCharges = 0.50;
                        var balance = accountBalance - withdrawAmount - bankCharges;
                        balance = balance.toFixed(2);
                        document.getElementById('notValidAmount').innerHTML = "Avaliable Balance : " + balance + ' $US';
                        var lastTransaction = accountBalance - balance - bankCharges;
                } 
                else{
                        document.getElementById('notValidAmount').innerHTML = "Please enter the withdraw amount in multiples of 5 $US " ;
                }
        }
        else{
                document.getElementById('notValidAmount').innerHTML = " You don't have sufficent Balance to withdraw amount";
        }
}

if(balance == undefined || lastTransaction == undefined){
        balance = accountBalance;
        lastTransaction = 0;
}