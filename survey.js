const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



rl.question(`What's your name? Nicknames are also acceptable :) `, (name) => {
  rl.question(`Alright ${name}, what's an activity you like doing? `, (hobby) => {
    rl.question(`What kind of music do you listen to while doing ${hobby}? `, (music) => {
      rl.question(`What's your favourite meal, ${name}? Breakfast? Lunch? Brunch? `, (meal) => {
        rl.question(`What's your favourite food to eat for ${meal}? `, (food) => {
          rl.question(`What's your favourite sport, ${name}? `, (sport) => {
            rl.question(`Nice! Last one: What is your superpower? What's the thing about you that makes you special? `, (quirk) => {
              console.log(`${name} loves listening to ${music} while ${hobby}, devouring ${food} for ${meal}, prefers ${sport} over any other sport, and is amazing at ${quirk}!`)
              rl.close();
            })
          })
        })
      })
    })
  })
});