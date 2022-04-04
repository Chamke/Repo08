function randomInteger(){
    var randomNumber = Math.floor(Math.random()*30);
    return randomNumber;
}

console.log(randomInteger());

module.exports = randomInteger;