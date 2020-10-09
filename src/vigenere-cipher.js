const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(direct = true) {
    this.isDirect = direct;
  }
  encrypt(message, key) {
    if (arguments.length <= 1) throw new Error("Incorrect arguments");
    message = message.toUpperCase();
    key = key.toUpperCase();
    let array = [];
    let length = message.length;
    let index = 0;
    for(let i = 0; i < length; i++) {
      let code = message[i].charCodeAt(0);
      if(code >= 65 && code <= 90) {
        let temp = String.fromCharCode((code + key.charCodeAt(index)) % 26 + "A".charCodeAt(0));
        array.push(temp);
        if(index != key.length - 1) index++;
        else index = 0;
      }
      else array.push(message[i]);         
    }
    if(this.isDirect == false) array.reverse();
    return array.join("");   
  }    
  decrypt(encryptedMessage, key) {
    if(arguments.length <= 1) throw new Error("Incorrect arguments");
    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();
    let array = [];
    let length = encryptedMessage.length;
    let index = 0;
    for(let i = 0; i < length; i++) {
      let code = encryptedMessage[i].charCodeAt(0);
      if(code >= 65 && code <= 90) {
        let temp = String.fromCharCode((code + 26 - key.charCodeAt(index)) % 26 + "A".charCodeAt(0));
        array.push(temp);
        if(index != key.length - 1) index++; 
        else index = 0;
      }
      else array.push(encryptedMessage[i]);         
    }
    if(this.isDirect == false) array.reverse();
    return array.join("");
  }
}

module.exports = VigenereCipheringMachine;
