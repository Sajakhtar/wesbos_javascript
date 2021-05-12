// console.log('it works');

// select elements: textarea, result p tag, all inputs
const textarea = document.querySelector('[name="text"]');
const result = document.querySelector('.result');
const filterInputs = Array.from(document.querySelectorAll('[name="filter"]'));
// console.log(textarea, result, filterInputs);

/* eslint-disable */
const funkyLetters = {
    '-': '₋', '!': 'ᵎ', '?': 'ˀ', '(': '⁽', ')': '₎', '+': '⁺', '=': '₌', '0': '⁰', '1': '₁', '2': '²', '4': '₄', '5': '₅', '6': '₆', '7': '⁷', '8': '⁸', '9': '⁹', a: 'ᵃ', A: 'ᴬ', B: 'ᴮ', b: 'ᵦ', C: '𝒸', d: 'ᵈ', D: 'ᴰ', e: 'ₑ', E: 'ᴱ', f: '𝒻', F: 'ᶠ', g: 'ᵍ', G: 'ᴳ', h: 'ʰ', H: 'ₕ', I: 'ᵢ', i: 'ᵢ', j: 'ʲ', J: 'ᴶ', K: 'ₖ', k: 'ₖ', l: 'ˡ', L: 'ᴸ', m: 'ᵐ', M: 'ₘ', n: 'ₙ', N: 'ᴺ', o: 'ᵒ', O: 'ᴼ', p: 'ᵖ', P: 'ᴾ', Q: 'ᵠ', q: 'ᑫ', r: 'ʳ', R: 'ᵣ', S: 'ˢ', s: 'ˢ', t: 'ᵗ', T: 'ₜ', u: 'ᵘ', U: 'ᵤ', v: 'ᵛ', V: 'ᵥ', w: '𝓌', W: 'ʷ', x: 'ˣ', X: 'ˣ', y: 'y', Y: 'Y', z: '𝓏', Z: 'ᶻ' };
  /* eslint-enable */

// filters object with methods for each input type: sarcastic, funky, unable
const filters = {
        sarcastic(letter, index) {
                // console.log(letter, index);

                // even index letter to lowercase, odd index letters to uppercase
                // modulo = 0 is for even number, mod > 0 is for odd number
                if (index % 2) {
                        // truthy
                        return letter.toUpperCase();
                }
                return letter.toLowerCase();
        },
        funky(letter) {
                // check if there is a funky letter for this case
                let funkyLetter = funkyLetters[letter];
                if (funkyLetter) {
                        return funkyLetter;
                }
                // if not, check if there is a lowercase version
                funkyLetter = funkyLetters[letter.toLowerCase()];
                if (funkyLetter) {
                        return funkyLetter;
                }
                // else return regular letter
                return letter;
        },
        unable(letter) {
                // 1 in 3 chance that space turns into '...'
                const random = Math.floor(Math.random() * 3);
                if (letter === ' ' && random === 2) {
                        return '...';
                }

                // else return regular letter
                return letter;
        },
};

// handler to handle input text
function transformText(text) {
        // console.log(text);

        // const filter = document.querySelector('[name="filter"]:checked').value;

        const filter = filterInputs.find((input) => input.checked).value;
        // console.log(filter);

        // take the text and loop through each letter
        const mod = Array.from(text).map(filters[filter]);
        // console.log(mod);

        result.textContent = mod.join('');
}

// input event listener on textarea
textarea.addEventListener('input', (e) => transformText(e.target.value));

// pass in the current input text into the transformText function each time the radio buttons are changed between sarcastic, funky, unable
filterInputs.forEach((input) =>
        input.addEventListener('input', () => {
                transformText(textarea.value);
        })
);
