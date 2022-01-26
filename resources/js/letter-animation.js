//this loops through the alphabet and insert a letter into the dom if it didn't find the matching string it has been given to the function.
const id = ['F1','R1','O1','N1','T1','E2','N2','D2','D3','E3','V3','E32','L3','O3','P3','E33','R3'];

const domElement = [];

const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

id.forEach(val => {domElement.push(document.getElementById(val))})

const LetterFinderLoop = (domElement, domLetter) => {
    for (var i = 0; i < alphabet.length; i++){
        let k = i;
        if (alphabet[k] !== domLetter) {
            setTimeout(function(){
                domElement.innerHTML = alphabet[k + 1];
                //console.log(alphabet[k]);
            }, 200 * (k + 1));
        } else {
            break;
        }
    }
}

const delayTime = 60;

setTimeout(() => {LetterFinderLoop(domElement[0], 'F');}, delayTime * 1);
setTimeout(() => {LetterFinderLoop(domElement[1], 'R');}, delayTime * 2);
setTimeout(() => {LetterFinderLoop(domElement[2], 'O');}, delayTime * 3);
setTimeout(() => {LetterFinderLoop(domElement[3], 'N');}, delayTime * 4);
setTimeout(() => {LetterFinderLoop(domElement[4], 'T');}, delayTime * 5);

setTimeout(() => {LetterFinderLoop(domElement[5], 'E');}, delayTime * 1);
setTimeout(() => {LetterFinderLoop(domElement[6], 'N');}, delayTime * 2);
setTimeout(() => {LetterFinderLoop(domElement[7], 'D');}, delayTime * 3);

setTimeout(() => {LetterFinderLoop(domElement[8], 'D');}, delayTime * 1);
setTimeout(() => {LetterFinderLoop(domElement[9], 'E');}, delayTime * 2);
setTimeout(() => {LetterFinderLoop(domElement[10], 'V');}, delayTime * 3);
setTimeout(() => {LetterFinderLoop(domElement[11], 'E');}, delayTime * 4);
setTimeout(() => {LetterFinderLoop(domElement[12], 'L');}, delayTime * 5);
setTimeout(() => {LetterFinderLoop(domElement[13], 'O');}, delayTime * 6);
setTimeout(() => {LetterFinderLoop(domElement[14], 'P');}, delayTime * 7);
setTimeout(() => {LetterFinderLoop(domElement[15], 'E');}, delayTime * 8);
setTimeout(() => {LetterFinderLoop(domElement[16], 'R');}, delayTime * 9);