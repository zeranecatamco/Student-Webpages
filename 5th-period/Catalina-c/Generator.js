const quotes = [
    "May the flowers remind us why the rain was so necessary",
    "No amount of guilt can solve the past, and no amount of anxiety can change the future" ,
    "The future belongs to those who believe in the beauty of their dreams." ,
    "It does not matter how slowly you go as long as you do not stop.",
    "The purpose of our lives is to be happy.",
    "This too shall pass.",
    "You only live once, but if you do it right, once is enough.",
    "Many of life's failures are people who did not realize how close they were to success when they gave up.",
    "We cannot solve problems with the kind of thinking we employed when we came up with them." ,
  "It is never too late to be what you might have been."
]
const poems2 = [
  "If you always try your best, Then you'll never have to wonder about what you could have done if you'd summoned all your thunder.",
  "If your best was not as good as you hoped it would be, you still could say, -I gave today all that I had in me-.",
  "Hold fast to dreams, for if dreams die, life is a broken-winged bird that cannot fly. Hold fast to dreams, for when dreams go, life is a barren field frozen with snow.",
  "maybe, life leaves us with cracks,  so we can let in more light and see a way out of the dark - Louise Kaufman"
 ]
// these arrays include all the quotes and poems that our functions can call.

const usedIndexes = new Set()
// this function basically stops us from getting repeated quotes or poems until we have used them all since each value can onle occur once in a set.
const quoteElement = document.getElementById("quote")
// this searches the document for an element that matches our id, in this case a quote.

function generateQuote() {
    if (usedIndexes.size >= quotes.length) {
        usedIndexes.clear()
    }
  // this is saying that if we've used more indexes/quotes than not, we will clear the set, letting us reuse the indexes again. This lets us get repeats of the quotes we already used. 

    while (true) {
        const randomIdx = Math.floor(Math.random() * quotes.length)
        // this combination of functions essentially lets us generate a random index. in the context of this project, it calls a completely random quote.

        if (usedIndexes.has(randomIdx)) continue
      // this is saying that if our random quote that was called has already been called, we skip the rest of the code below, and try again with a different quote.

        const quote = quotes[randomIdx]
        quoteElement.innerHTML = quote;
        usedIndexes.add(randomIdx)
        break
      // this quote runs when the code above hasn't been fed a repeat. basically, innerHTML is used to dynamically update the content of a webpage. this allows us to show different quotes every time the button is clicked. it also adds the quote to usedIndexes, meaning it won't be used again, then the loop terminates.
    }
}

//OUR ADDITION TO THE CODE- below is a poem generator. this was not included in the tutorial video, meaning we wrote the code and debugged it ourselves. each part works very similarly to the quote generator, except it calls values from our poems array instead of the quotes array. 
const usedIndxs = new Set()
const poemElement = document.getElementById("poem")

function generatePoem2() {
    if (usedIndxs.size >= poems2.length) {
        usedIndxs.clear()
    }
while (true) {
        const randomIdx = Math.floor(Math.random() * poems2.length)

        if (usedIndxs.has(randomIdx)) continue

        const poem = poems2[randomIdx]
        quoteElement.innerHTML = poem;
        usedIndxs.add(randomIdx)
        break
    }
}
