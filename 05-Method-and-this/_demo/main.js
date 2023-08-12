const log = console.log()

// function meeting(){
//     console.log("in meeting")
// }

// function devwebsite(){
//     console.log('working on a website')
// }

// function sleep(){
//     console.log('sleeping')
// }


// const user ={
//     name: "mek",
//     age: 26,
//     dev: devwebsite,
//     meet: meeting,
//     sleeping: sleep, 

// }

// user.dev()


// const programmer ={
//     name: 'john',
//     age:30,
//     dev: function (){
//         console.log(`I'm working right now`)
//     },
//     meet: () => console.log('i am meeting'),
//     sleep(){
//         console.log('I am sleeping')
//     }
// }

// programmer.dev()



// const meMyselfAndI = {
//     name: "mek",
//     age: 26,
//     single: "Y-E-S",
//     eat: function (){
//         console.log(`*slap the roof* this boy can eat up to 3 square meal`)
//     },
//     play: () => console.log(`i can play this game all day long`),
//     meme(){console.log('Boss i have cancer')},
//     run: function speed(){console.log('I am fast as fuck boi')}
// }

// meMyselfAndI.meme()
// meMyselfAndI.eat()
// meMyselfAndI.play()
// meMyselfAndI.run()


// this = ตัวมันเอง
//access the property of an within the object itself
// concept = who the fuck call me ?

const MOBA = {
    name: "dota",
    isDog: "yes",
    feeling: Game,
    greet: greeting,
}

const FPS = {
    name: "Valorant",
    isDog: "no",
    feeling:Game,
    greet: greeting,
}

const bestfriend ={
    
}

function Game() {
    console.log(`I love ${this.name} but is ${this.name} a dog, answer is ${this.isDog}`)

}

function greeting(){
    console.log(`Hello ${this.name}`)
}




// const user ={
//     name: "codecamp",
//     age: 15,
//     sayhi: function (){
//         log(`Hello`)
//     },

//     growold: function (){
//         age++;
//     }
// }


// const user1 ={
//     name: "codecamp",
//     age: 15,
//     sayhi: function (){
//         console.log(`Hello${this.name}`)
//     },

//     growold: function (){
//         this.age++;
//     },

//     say: () => console.log(this.name)
// }

// execution context == caller

