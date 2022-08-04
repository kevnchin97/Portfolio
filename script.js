// Creating the typewriter effect. 
const words = ["Car Enthuasist", "Photographer", "Registered Nurse", "Front-End Developer"];

// char = placeholder for words. "i" will help us cycle through the loop. 
function typewriter(char, i, recycle) {
    // will want it to run through each character until the whole word is spelt out. 
    if (i < (char.length)) {
        const tw = document.querySelector("#typewriter");
        // substring allows us to return parts of the string. in this case, we start at 0 as it is the first character of the word. as it cycles through we are adding increments of 1 to i. 
        tw.innerHTML = char.substring(0, i + 1);
        // introduce setTimeOut so that we can call the function again after a few seconds. 
        setTimeout(() => {
            typewriter(char, i + 1, recycle)
        }, 100);
        // callback 
    } else {
        setTimeout(recycle, 700)
    }
}
// animation. j is referring to the words array index. 
function typeAnimation(j) {
    // runs if the word has been completed and will add +1 to the index and trigger the animation loop again.
    if (j < words[j].length) {
        typewriter(words[j], 0, () => {
            typeAnimation((j + 1));
        })
    }
}
document.addEventListener('DOMContentLoaded', () => {
    typeAnimation(0);
});

