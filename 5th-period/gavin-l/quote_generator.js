const quotes = [ //array of funny quotes
    "Sometimes, I forget how to spell a word so I change the whole sentence to avoid using it.",
    "Don't let one bad apple make you think everybody's gonna be bananas." ,
    "'Fries or salad?' Sums up every adult decision you have to make.",
    "It is what it is... unfortunately it's not Friday.",
    "The fact that my entire body cracks like a glow stick whenever I move and yet refuses to actually glow is very dissapointing.",
    "My midlife crisis is two sentences: Where am I going to park? Where did I park?",
    "If you love someone let them go. If they come back with coffee it was meant to be.",
    "People often say that motivation doesn't last. Well, neither does bathing. That's why we recommend it daily.",
    "I won't be impressed with technology until I can download food.",
    "I need a six month vacation twice a year.",
    "Never go to bed mad. Stay up and fight."
 
]

const quotes2 = [ //array of motivational quotes
    "Success is not final; failure is not fatal; it is the courage to continue that counts.",
    "Either you can run the day or the day runs you.",
    "Strong people don't put others down, they lift them up." ,
    "A little progress each day adds up to big results.",
    "Success is walking from failure to failure with no loss of enthusiasm.",
    "Have patience. All things are difficult before they become easy",
    "The best view comes after the hardest climb.",
    "Don't miss out on something that could be great just because it could also be difficult.",
    "Your success is as good as your mindset.",
    "Never stop learning, because life never stops teaching.",
    "Making mistakes is better than faking perfections."
]

const quotes3 = [ //array of school-related quotes
    "Education is the passport to the future, for tomorrow belongs to those who prepare for it today.",
    "Teachers can open the door, but you must enter it yourself.",
    "The beautiful thing about learning is that no one can take it away from you." ,
    "Education is the most powerful weapon you can use to change the world.",
    "The mind is not a vessel to be filled but a fire to be ignited.",
    "Procrastination makes easy things hard and hard things harder.",
    "The way to get started is to quit talking and begin doing.",
    "Genius is 10% inspiration, 90% perspiration.",
    "The more that you read, the more things you will know; the more that you learn, the more places you’ll go.",
    "He who asks a question is a fool for five minutes; he who does not ask a question remains a fool forever.",
    "You have to be odd to be No.1."
]

//define a set to track used indexes to avoid repeating quotes
const usedIndexes = new Set()
const quoteElement = document.getElementById("quote") //

function generateQuote() { //function to generate a random funny quote
    if (usedIndexes.size >= quotes.length) { 
        usedIndexes.clear() //reset the used indexes if all quotes have been used
    }

    while (true) {
        const randomIdx = Math.floor(Math.random() * quotes.length); //generate a random index for the quotes array

        if (usedIndexes.has(randomIdx)) continue //skip to next iteration if index's already been used

        const quote = quotes[randomIdx]
        quoteElement.innerHTML = quote; //get quote and display it
      
        usedIndexes.add(randomIdx)
        break //add index to the used set to avoid reusing it
    }
}

function generateQuote2() { //added function by us for motivational quotes (not in video,but same concept)
    if (usedIndexes.size >= quotes.length) {
        usedIndexes.clear() //reset used indexes if all motivational quotes have been used
    }

    while (true) {
        const randomIdx = Math.floor(Math.random() * quotes.length) //generate random index for quotes2 array

        if (usedIndexes.has(randomIdx)) continue //skip to next iteration if index has already been used

        const quote = quotes2[randomIdx]
        quoteElement.innerHTML = quote; //get quote and display
      
        usedIndexes.add(randomIdx) 
        break //add index to used set to avoid reusing
    }
}

function generateQuote3() { //added function by us for school-related quotes (not in video, but same concept)
    if (usedIndexes.size >= quotes.length) {
        usedIndexes.clear() //reset used indexes if all school quotes have been used
    }

    while (true) {
        const randomIdx = Math.floor(Math.random() * quotes.length) //generate random index for quotes3 array

        if (usedIndexes.has(randomIdx)) continue //skip to next iteration if index has already been used

        const quote = quotes3[randomIdx]
        quoteElement.innerHTML = quote; //get quote and display
      
        usedIndexes.add(randomIdx)
        break //add index to used set to avoid reusing
    }
}

function generateQuote4() { //function added by us (not in the video) to generate a random code from one of the three categories
const randomQuote = Math.floor(Math.random() * 3) + 1 //randomly choose which type of quote to generate: funny, motivational, or school-related
if (randomQuote == 1) { //based on random number, call appropriate function
  generateQuote(); //generate funny quote
}
else if (randomQuote == 2) {
  generateQuote2(); //generate motivational quote
}
else {
  generateQuote3(); //generate school-related quote
}
}
