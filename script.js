const passwordBox = document.getElementById('password');
const length = 12;

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "@#$%()+=-{}";
const allChars = uppercase + lowercase + numbers + symbols;

function createPassword() {
    let password = "";

    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    for (let i = 4; i < length; i++) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    password = shuffleString(password);

    passwordBox.value = password;
}

function shuffleString(str) {
    return str
      .split('')
      .sort(() => Math.random() - 0.5)
      .join('');
}

function copyPassword() {
    passwordBox.select();
    document.execCommand("copy");
}