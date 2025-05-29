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

const usedIndexes = new Set()
const quoteElement = document.getElementById("quote")

function generateQuote() {
    if (usedIndexes.size >= quotes.length) {
        usedIndexes.clear()
    }

    while (true) {
        const randomIdx = Math.floor(Math.random() * quotes.length)

        if (usedIndexes.has(randomIdx)) continue

        const quote = quotes[randomIdx]
        quoteElement.innerHTML = quote;
        usedIndexes.add(randomIdx)
        break
    }
}

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
   
