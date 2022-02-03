const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  const sent = expr.split('**********');

  let str = '';
  
  for (let i = 0; i < sent.length; i ++) {
    for (let j = 0; j < sent[i].length; j += 10) {
      let key = sent[i].slice(j, j + 10).replace(/[11]{2}/g, '-').replace(/[00]{2}/g,'').replace(/10/gi, '.');
      str += MORSE_TABLE[key];
    }
    str += ' ';
  }
    return str.slice(0, -1);
}

module.exports = {
    decode
}
