var speedLimit = parseInt( prompt("What's the speed limit?") );
var userSpeed = parseInt( prompt("What's your speed?") );

if(userSpeed > speedLimit + 10) {
  console.log("Slow down dude!");
} else if(userSpeed < speedLimit - 10) {
  console.log("Speed up duuuuuude!");
} else {
  console.log("Keep on keepin on");
}
