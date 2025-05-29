const paragraphs = [ 
    "Shall I compare thee to a summer’s day? Thou art more lovely and more temperate: Rough winds do shake the darling buds of May, and summer’s lease hath all too short a date; sometime too hot the eye of heaven shines, and often is his gold complexion dimm'd; and every fair from fair sometime declines, by chance or nature’s changing course untrimm'd; but thy eternal summer shall not fade, nor lose possession of that fair thou ow’st; nor shall death brag thou wander’st in his shade, when in eternal lines to time thou grow’st: So long as men can breathe or eyes can see, so long lives this, and this gives life to thee.",
  
    "Two households, both alike in dignity, in fair Verona, where we lay our scene, from ancient grudge break to new mutiny, where civil blood makes civil hands unclean. From forth the fatal loins of these two foes a pair of star-cross'd lovers take their life; whose misadventured piteous overthrows do with their death bury their parents' strife. The fearful passage of their death-mark'd love, and the continuance of their parents' rage, which, but their children's end, nought could remove, is now the two hours' traffic of our stage; the which if you with patient ears attend, that here shall miss, our toil shall strive to mend.",
  
    "Turning and turning in the widening gyre the falcon cannot hear the falconer; things fall apart; the centre cannot hold; mere anarchy is loosed upon the world, the blood-dimmed tide is loosed, and everywhere the ceremony of innocence is drowned; the best lack all conviction, while the worst are full of passionate intensity. Surely some revelation is at hand; surely the Second Coming is at hand. The Second Coming! Hardly are those words out when a vast image out of Spiritus Mundi troubles my sight: Somewhere in sands of the desert a shape with lion body and the head of a man, a gaze blank and pitiless as the sun, is moving its slow thighs, while all about it reel shadows of the indignant desert birds. The darkness drops again; but now I know that twenty centuries of stony sleep were vexed to nightmare by a rocking cradle, and what rough beast, its hour come round at last, slouches towards Bethlehem to be born?",
  
    "There will come soft rains and the smell of the ground, and swallows circling with their shimmering sound; and frogs in the pools singing at night, and wild plum trees in tremulous white; robins will wear their feathery fire, whistling their whims on a low fence-wire; and not one will know of the war, not one will care at last when it is done. Not one would mind, neither bird nor tree, If mankind perished utterly; and Spring herself, when she woke at dawn would scarcely know that we were gone.",
  
    "Two roads diverged in a yellow wood, and sorry I could not travel both and be one traveler, long I stood and looked down one as far as I could to where it bent in the undergrowth; Then took the other, as just as fair, and having perhaps the better claim, because it was grassy and wanted wear; though as for that the passing there had worn them really about the same, and both that morning equally lay in leaves no step had trodden black. Oh, I kept the first for another day! Yet knowing how way leads on to way, I doubted if I should ever come back. I shall be telling this with a sigh somewhere ages and ages hence: Two roads diverged in a wood, and I— I took the one less traveled by, and that has made all the difference.",
  
    "Do not go gentle into that good night, Old age should burn and rave at close of day; Rage, rage against the dying light. Though wise men had forked no lightning they do not go gentle into that good night. Good men, the last wave by, crying how bright their frail deeds might havedanced in a green bay, Rage rage against the dying of the light. Wild men who caught and sang the sun in flight, and learn, too late, they grieved it on its way, do not go gentle into that good night. Grave men, near death, who see with blinding sight blind eyes could blaze like menteors and be gay, Rage, rage against the dying of the light. And you, my father, there on the sad height, curse , bless, me now with your fierce tears, I pray. Do not go gentle into that good night. Rage, rage against the dying of the light.",
  
    "We wear the mask that grins and lies,It hides our cheeks and shades our eyes,— This debt we pay to human guile; With torn and bleeding hearts we smile,and mouth with myriad subtleties. Why should the world be over-wise,in counting all our tears and sighs? Nay, let them only see us, while we wear the mask. We smile, but, O great Christ, our cries to thee from tortured souls arise.We sing, but oh the clay is vile beneath our feet, and long the mile; but let the world dream otherwise, we wear the mask!",
  
    "It was many and many a year ago, in a kingdom by the sea,that a maiden there lived whom you may know by the name of Annabel Lee; And this maiden she lived with no other thought than to love and be loved by me. I was a child and she was a child, in this kingdom by the sea, but we loved with a love that was more than love— I and my Annabel Lee— with a love that the wingèd seraphs of Heaven coveted her and me. And this was the reason that, long ago,In this kingdom by the sea, a wind blew out of a cloud, chilling my beautiful Annabel Lee; so that her highborn kinsmen came and bore her away from me, to shut her up in a sepulchre in this kingdom by the sea. The angels, not half so happy in Heaven, went envying her and me— Yes!—that was the reason (as all men know, in this kingdom by the sea) That the wind came out of the cloud by night, chilling and killing my Annabel Lee. But our love it was stronger by far than the love of those who were older than we— of many far wiser than we— and neither the angels in Heaven above nor the demons down under the sea can ever dissever my soul from the soul of the beautiful Annabel Lee; For the moon never beams, without bringing me dreams of the beautiful Annabel Lee; And the stars never rise, but I feel the bright eyes of the beautiful Annabel Lee; and so, all the night-tide, I lie down by the side of my darling—my darling—my life and my bride, in her sepulchre there by the sea— in her tomb by the sounding sea.",
  
    "“Hope” is the thing with feathers -that perches in the soul - and sings the tune without the words - and never stops - at all - and sweetest - in the Gale - is heard -and sore must be the storm - that could abash the little Bird that kept so many warm - I’ve heard it in the chillest land - and on the strangest Sea - yet - never - in Extremity, it asked a crumb - of me.",
  
    "Not like the brazen giant of Greek fame, with conquering limbs astride from land to land; Here at our sea-washed, sunset gates shall stand a mighty woman with a torch, whose flame is the imprisoned lightning, and her name mother of Exiles. From her beacon-hand glows world-wide welcome; her mild eyes command the air-bridged harbor that twin cities frame.“Keep, ancient lands, your storied pomp!” cries she with silent lips. “Give me your tired, your poor, your huddled masses yearning to breathe free, the wretched refuse of your teeming shore. Send these, the homeless, tempest-tost to me, I lift my lamp beside the golden door!”",
    "O my Luve is like a red, red rose that’s newly sprung in June; O my Luve is like the melody that’s sweetly played in tune. So fair art thou, my bonnie lass, so deep in luve am I; And I will luve thee still, my dear, till a’ the seas gang dry. Till a’ the seas gang dry, my dear, and the rocks melt wi’ the sun; I will love thee still, my dear, while the sands o’ life shall run. And fare thee weel, my only luve! And fare thee weel awhile! And I will come again, my luve, though it were ten thousand mile.",
  
    "I hear America singing, the varied carols I hear, those of mechanics, each one singing his as it should be blithe and strong, the carpenter singing his as he measures his plank or beam, the mason singing his as he makes ready for work, or leaves off work, the boatman singing what belongs to him in his boat, the deckhand singing on the steamboat deck, the shoemaker singing as he sits on his bench, the hatter singing as he stands, the wood-cutter’s song, the ploughboy’s on his way in the morning, or at noon intermission or at sundown, the delicious singing of the mother, or of the young wife at work, or of the girl sewing or washing, each singing what belongs to him or her and to none else, the day what belongs to the day—at night the party of young fellows, robust, friendly, singing with open mouths their strong melodious songs.",
  
    "I, too, sing America. I am the darker brother. They send me to eat in the kitchen when company comes, But I laugh, and eat well, and grow strong. Tomorrow, I’ll be at the table when company comes. Nobody’ll dare say to me, “Eat in the kitchen,” then. Besides, they’ll see how beautiful I am and be ashamed— I, too, am America.",
  
    "I met a traveller from an antique land, who said—“Two vast and trunkless legs of stone stand in the desert. . . . Near them, on the sand, half sunk a shattered visage lies, whose frown, and wrinkled lip, and sneer of cold command, tell that its sculptor well those passions read which yet survive, stamped on these lifeless things, the hand that mocked them, and the heart that fed; and on the pedestal, these words appear: My name is Ozymandias, King of Kings; Look on my Works, ye Mighty, and despair! Nothing beside remains. Round the decay of that colossal Wreck, boundless and bare the lone and level sands stretch far away.”",
  
    "I ask them to take a poem and hold it up to the light like a color slide or press an ear against its hive. I say drop a mouse into a poem and watch him probe his way out, or walk inside the poem's room and feel the walls for a light switch. I want them to waterski across the surface of a poem waving at the author's name on the shore. But all they want to do is tie the poem to a chair with rope and torture a confession out of it. They begin beating it with a hose to find out what it really means." ,
];

const typingText = document.querySelector(".typing-text p")
const inpField = document.querySelector(".wrapper .input-field")
const tryAgainBtn = document.querySelector(".content button")
const timeTag = document.querySelector(".time span b")
const mistakeTag = document.querySelector(".mistake span")
const wpmTag = document.querySelector(".wpm span")
const accuracyTag = document.querySelector(".accuracy span");

 // initial set up
let timer;
let timePassed = 0;
let charIndex = 0;
let mistakes = 0;
let isTyping = false;

// chose randome para from array
function loadParagraph() {
    const ranIndex = Math.floor(Math.random() * paragraphs.length);
    typingText.innerHTML = "";
    paragraphs[ranIndex].split("").forEach(char => {
        let span = `<span>${char}</span>`; 
        typingText.innerHTML += span; // values in array turn into their wons array (the paras w/ letter as their values)
    });
    typingText.querySelectorAll("span")[0].classList.add("active");
    document.addEventListener("keydown", () => inpField.focus());
    typingText.addEventListener("click", () => inpField.focus()); // allows computer keyboard & keypad to function/affect game 
}

// when starting typing
function initTyping() {
    let characters = typingText.querySelectorAll("span");
    let typedChar = inpField.value.split("")[charIndex];

    if (charIndex < characters.length) { //char index less thean length (there are letter to type)
        if (!isTyping) {
            timer = setInterval(initTimer, 1000); 
            isTyping = true; // start timer & typing becomes true
        }

        if (typedChar == null) { // backspace >> char index decrements 
            if (charIndex > 0) {
                charIndex--;
                if (characters[charIndex].classList.contains("incorrect")) {
                    mistakes--; // if char index was associated w/ incorrect value, mistake also decrements when backspace
                }
                characters[charIndex].classList.remove("correct", "incorrect"); // association of correct/incorrect is removed
            }
        } else {
            if (characters[charIndex].innerText === typedChar) {
                characters[charIndex].classList.add("correct"); // if correct chara is typed, that char index is classified as correct
            } else {
                mistakes++;
                characters[charIndex].classList.add("incorrect"); // if wrong, classified as incorrect
            }
            charIndex++; // once finished typing that chara, the char index moves on
        }

        characters.forEach(span => span.classList.remove("active"));
        if (charIndex < characters.length) { // if char index less than the length , active (the typing)
            characters[charIndex].classList.add("active");
        }

        updateStats(); 
    } else {
        clearInterval(timer); // Stop the timer when the typing is complete
        inpField.value = ""; // Optionally clear the input field
        updateStats(); // Update stats once more when the game ends
    }
   if (charIndex === characters.length) { // if the char index is equal to last char index (on last letter)
        clearInterval(timer); 
        inpField.value = ""; 
        updateStats(); 
        showResults(); // Show the results popup
}
}



function initTimer() { // start timer
    timePassed++; // each sec time increments
    timeTag.innerText = timePassed; // displayed in time portion
    updateStats();
}

function updateStats() { // function that keeps the accuracy, wpm, time, and mistakes
    let correctChars = charIndex - mistakes; // calc correct char
    let wpm = Math.round((correctChars / 5) / (timePassed / 60)); 
    wpm = wpm < 0 || !wpm || wpm === Infinity ? 0 : wpm; // calc wpm w/ each word avg 5 letters

    let cpm = correctChars; // calc the correct chars
    let accuracy = charIndex > 0 ? ((correctChars / charIndex) * 100).toFixed(1) : 100; // calc accuracy

    wpmTag.innerText = wpm;
    mistakeTag.innerText = mistakes;
    accuracyTag.innerText = accuracy; // each portion displays in its correct tag
}

function showResults() {
    let correctChars = charIndex - mistakes;
    let wpm = Math.round((correctChars / 5) / (timePassed / 60));
    wpm = wpm < 0 || !wpm || wpm === Infinity ? 0 : wpm;

    let accuracy = charIndex > 0 ? ((correctChars / charIndex) * 100).toFixed(1) : 100;

    alert(
        `Finished!\n\n` +
        `Time: ${timePassed} seconds\n` +
        `Mistakes: ${mistakes}\n` +
        `WPM: ${wpm}\n` +
        `Accuracy: ${accuracy}%` // displays the results in a popup same inso as updateStats
    );
}

function resetGame() { // reset game once button is pressed
    loadParagraph(); 
    clearInterval(timer);
    timePassed = 0;
    charIndex = 0;
    mistakes = 0;
    isTyping = false;
    inpField.value = "";
    timeTag.innerText = timePassed;
    wpmTag.innerText = 0;
    mistakeTag.innerText = 0;
    accuracyTag.innerText = 100;
}

loadParagraph(); 
inpField.addEventListener("input", initTyping); 
tryAgainBtn.addEventListener("click", resetGame); // recognizes when button is pressed & when letters are typed
