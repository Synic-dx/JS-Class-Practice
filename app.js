//Classes and constructors

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
        this.area = height * width;
    }
}

class Square extends Rectangle {
    constructor(sideLength) {
        super(sideLength, sideLength);
    }
}

const mySquare = new Square(10);
const myRectangle = new Rectangle(5,10);

console.log([mySquare.area, myRectangle.area])

//Listing properties using for in loop

function listProperties(shapeName) {
    for (let property in shapeName) {
            console.log(`${property}: ${shapeName[property]}`)
}
}

listProperties(mySquare);

//For in loop lists properties of the prototype as well, unline for of

//Iteration practice

const candidates = [
    {name: "Rahul", party: "INC"},
    {name: "Modi", party: "BJP"}, 
    { name: "Mamata", party: "AITMC"}
]

function listCandidates() {
    for (let i = 0; i < candidates.length; i++) {
        console.log(`${candidates[i].name}: ${candidates[i].party}`);
    }
}

listCandidates();

