const gematriaValues = {
    "he": {
      "א": 1, "ב": 2, "ג": 3, "ד": 4, "ה": 5, "ו": 6, "ז": 7, "ח": 8, "ט": 9,
      "י": 10, "כ": 20, "ך": 20, "ל": 30, "מ": 40, "ם": 40, "נ": 50, "ן": 50, "ס": 60, "ע": 70, "פ": 80, "ף": 80,
      "צ": 90, "ץ": 90, "ק": 100, "ר": 200, "ש": 300, "ת": 400, ' ': 0
    },
    "en": {
      "A": 1, "B": 2, "C": 3, "D": 4, "E": 5, "F": 6, "G": 7, "H": 8, "I": 9,
      "J": 600, "K": 10, "L": 20, "M": 30, "N": 40, "O": 50, "P": 60, "Q": 70,
      "R": 80, "S": 90, "T": 100, "U": 200, "V": 700, "W": 900, "X": 300,
      "Y": 400, "Z": 500, ' ': 0
    }
};

function hasInvalidCharacters(input, language) {
    const langGematriaValues = gematriaValues[language];
    if (!langGematriaValues) {
        throw new Error(`Gematria values for '${language}' are not defined.`);
    }
    
    if(language=="en") {
        input = input.toUpperCase();
    }

    for (const char of input) {
        charValue = langGematriaValues[char];
        if (charValue === undefined) {
            return true;
        }
    }
    return false;
}

function isEmpty(input) {
    s = input.split(' ').join('');
    return (s.length == 0);
}

function trans() {
    const transres = document.getElementById("translationResult");
    const selectedLanguage = document.getElementById("language").value;
    const input = document.getElementById("inputText");
    var inputText = input.value;
    if(selectedLanguage=="") {
        transres.textContent = "Please select a language!";
        return;
    }
    if(isEmpty(inputText)) {
        transres.textContent = 0;
        return;
    }
    if(hasInvalidCharacters(inputText, selectedLanguage)) {
        transres.textContent = "Invalid character detected!";
        return;
    }
    const langGematriaValues = gematriaValues[selectedLanguage];
    if(selectedLanguage=="en") {
        inputText = inputText.toUpperCase();
    }
    var ans = 0;
    for (const char of inputText) {
        charValue = Number(langGematriaValues[char]);
        ans = ans + charValue;
    }
    transres.textContent = ans;
}

document.getElementById("inputText").addEventListener("input", trans);
document.getElementById("language").addEventListener("input", trans);