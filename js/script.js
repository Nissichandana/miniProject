class Ship{
    constructor( name,hull,firepower,accuracy){
        this.name = name;
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy
    
    }
    attack(enemy){
        if (Math.random()< this.accuracy){
            console.log("hit");
            enemy.hull-=this.firepower
            document.getElementById('textoutput').innerHTML += 'AlienShip got Hit. ' + 'Name: ' + enemy.name + ' Hull : ' + enemy.hull + '<br>'
        }else{
            console.log("you missed");
            this.hull -= enemy.firepower
            document.getElementById('textoutput').innerHTML += 'USS ' + 'Hull : ' + 'Name: ' + Ship.name + ' Hull : ' + this.hull + '<br>'

        
        }
}
}

console.log('Game Started')
const myShip = new Ship ("USS Assembly", 20, 5, 0.7);
console.log(myShip);


const Alienship = ['A1','A2','A3','A4','A5','A6']
console.log(Alienship);

// document.write('Game Started....')
// document.write('EarthShip is loaded...')
let i = 0;

const attacking = document.getElementById('attack')
attacking.addEventListener('click', mainProcess)

const continuing = document.getElementById('continue')
continuing.addEventListener('click', conTinue)

const retreating = document.getElementById('retreat')
retreating.addEventListener('click', reTreat)
console.log('Earth ship retreated. Game is over')

 function mainProcess()
{
    const textout = document.getElementById('textoutput')

    let enemyShips = new Ship (Alienship[i], getRandomIntInclusive(3,6),getRandomIntInclusive(2,4),decimalRandom(0.6,0.8))

    textout.innerHTML += 'USS Assembly' + Ship.name + ' attacked Alien ship' + '<br>'
    console.log("Before Attack")
    console.log(myShip)
    console.log(enemyShips)

    myShip.attack(enemyShips)
    console.log("After Attack")
    console.log(myShip)
    console.log(enemyShips)

    if (enemyShips.hull > 0){
        console.log("Alien ship ", enemyShips.name, " is srvived")
        textout.innerHTML += 'Alien ship ' + enemyShips.name + ' survived the attack. Attacked USS Assembly' + '<br>'
    }
    else if (enemyShips.hull <= 0){
        console.log("Alien ship ", enemyShips.name, " is destroyed")
        textout.innerHTML += 'Alien ship ' + enemyShips.name + ' destroyed.' + '<br>'
        i += 1
        if (i > 5)
        {
            textout.innerHTML += 'Aliens destroyed. Game is over' + '<br>'
            document.getElementById('attack').disabled = true;
            document.getElementById('continue').disabled = true;
            document.getElementById('retreat').disabled = true;
        }
    }

    else if(myShip.hull <= 0){
        myship_is_alive = false
        console.log("Earth ship destroyed. Game is over")
        textout.innerHTML += 'Earth ship destroyed. Game is over.' + '<br>'
        document.getElementById('attack').disabled = true;
        document.getElementById('continue').disabled = true;
        document.getElementById('retreat').disabled = true;
    }


}
function reTreat(){
    myShip.hull = 0
    console.log("Earth ship retreated. Game is over")
    myship_retreat = true
    const textout = document.getElementById('textoutput') 
    textout.innerHTML += 'Earth Ship Retreated. Game is over' + '<br>'
    document.getElementById('attack').disabled = true;
    document.getElementById('continue').disabled = true;
    document.getElementById('retreat').disabled = true;

}

function conTinue(){
    console.log("Earth ship Continue attacking")
    mainProcess()
}

// MathRandom() functions

function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }

  console.log(getRandomIntInclusive(3,6));

  // mathRandom() for decimals

  function decimalRandom(min, max){
    return Math.random()*(max-min) + min
    }
    console.log(decimalRandom(0.6,0.8));


