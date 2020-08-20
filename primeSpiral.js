let isPrime = (num) => {
    //Checks if it is a prime
        if(num === 1 || num === 0){
            return false;
        } else if (num === 2){
            return true;
        } else {
            for (let x = 2; x < Math.floor(num/2)+1; x++){
                if (num % x === 0){
                    return false;
                }
            }
            return true;
        }
}

const width = 600;
const height = 600;

let posY = 0; // These values are 'record' distance from center
let negY = 0;
let posX = 0;
let negX = 0;

let x = 0; //Start from origin
let y = 0;

let genSpiral = () => {

    let coords = [];

    for (let i = 0; i < 150; i++){

        while (x <= posX + 2) {
            let coord = {
                x: x,
                y: y,
                val: coords.length,
                get isPrime() {
                    return isPrime(this.val);
                }
            }
            coords.push(coord);
            x+=2;
        }
        x-=2;
        posX = x;
    
        while (y <= posY + 2) {
            let coord = {
                x: x,
                y: y,
                val: coords.length,
                get isPrime() {
                    return isPrime(this.val);
                }
            }
            coords.push(coord);
            y+=2;
        }
        y-=2;
        posY = y;
    
        while (x >= negX - 2) {
            let coord = {
                x: x,
                y: y,
                val: coords.length,
                get isPrime() {
                    return isPrime(this.val);
                }
            }
            coords.push(coord);
            x-=2;
        }
        x+=2;
        negX = x;
    
        while (y >= negY - 2) {
            let coord = {
                x: x,
                y: y,
                val: coords.length,
                get isPrime() {
                    return isPrime(this.val);
                }
            }
            coords.push(coord);
            y-=2;
        }
        y+=2;
        negY = y;
    }
    return coords;
};


function setup() {

    createCanvas(width, height);

    let coords = genSpiral();

    for (let coord of coords){
        
        coord.x += width/2;
        coord.y += height/2;

        if (coord.isPrime){
            circle(coord.x, coord.y, 1);
        }
    }
}
