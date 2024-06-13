const montage = {
    gameFace: 'U+1F600',
    readyForThis: 'true',
    victorySound: 'alarm',

}

console.log(montage)
console.log(montage.victorySound)

montage.hometown = {
    name: 'Badsey',
    population: 100,
    country: {
      name: 'UK',
      population: '60 million',
    }
}


console.log(montage.hometown.name, montage.hometown.population, montage.hometown.country.name, montage.hometown.country.name)

const favMovChar = [
    {
        name: 'Simba',
        movie: 'Lion King',
    }, {
        name: 'Ariel',
        movie: 'My Little Mermaid',
    }, {
        name: 'Nemo',
        movie: 'Finding Nemo',
    }
];


console.log(favMovChar)
console.log()
console.log(`I am ${favMovChar[0].name} from ${favMovChar[0].movie}`)
console.log(`I am ${favMovChar[1].name} from ${favMovChar[1].movie}`)
console.log(`I am ${favMovChar[2].name} from ${favMovChar[2].movie}`)

const monkey = {
    name: 'jeff',
    species: 'bonobo',
    foodsEaten: [],
    eatenSomething(food){
        this.foodsEaten.push(food)
    },
    introduce(){
        return ` My name is ${this.name}, I am a ${this.species} and I ate ${this.foodsEaten}`
    }
}
console.log(monkey.introduce())

const laboratory = {
    monster: {},
    experiment(partName, partValue){
       this.monster[partName] = partValue
        
    }
}
console.log(laboratory.experiment('tentacles', 'very slimy parts'))