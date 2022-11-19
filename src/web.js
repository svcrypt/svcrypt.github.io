function reverseString(str) {
    var splitString = str.split(""); 
    var reverseArray = splitString.reverse(); 
    var joinArray = reverseArray.join("");
    return joinArray;
}

function next(a) {
    return String.fromCharCode(a.charCodeAt(0) + 4)
}

function bext(a) {
    return String.fromCharCode(a.charCodeAt(0) - 4)
}


function encrypt() {
    var plaintext = document.getElementById('plaintext').value;
    let ciphertext = '';
    plaintext = reverseString(plaintext);
    for (let i=0; i < plaintext.length; i++) {
        ciphertext += next(plaintext[i])
    }
    document.getElementById('ciphertext').innerHTML = '<p>' + ciphertext + '</p>';
}

function decrypt() {
    var ct = document.getElementById('ct').value;
    let pt = '';
    ct = reverseString(ct);
    for (let i=0; i < ct.length; i++) {
        pt += bext(ct[i])
    }
    document.getElementById('pt').innerHTML = '<p>' + pt + '</p>';
}

