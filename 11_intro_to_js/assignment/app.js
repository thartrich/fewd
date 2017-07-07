var price = parseInt( prompt("Enter the price") );
var buy = parseInt( prompt("How many items do you wish to buy?") );
var items = parseInt( prompt("How many items do you have?") );
var money = parseInt( prompt("How much money do you have?") );


if (money >= 100 && items >= 2) {
  console.log("Purchase complete");

} else if(money <= 100 && items >= 2) {

    console.log("Not enough money");

} else {

    console.log("Not enough inventory");
  }
