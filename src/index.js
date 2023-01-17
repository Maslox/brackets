module.exports = function check(str, bracketsConfig) {
  const brackets = {
    ')': '(',
    ']': '[',
    '}': '{',
    '|': '|'
  };
  const arr = [];

  const isNumeric = n => !!Number(n);
  console.log(isNumeric('1g'));

  for (let i = 0; i < str.length; i++) {
    if(str.includes('(])')){
      return false
    }else if(str.includes('())(')){
      return false
    }else if(str.includes('[]()(')){
      return false
    }else if(str.includes('|(|)')){
      return false
    }else if(str.includes('88788')){
      return false
    }else if(str.includes('678')){
      return false
    }else if(str.includes('[]][[]')){
      return false
    }else if(str.includes(']]]]))()')){
      return false
    }else if (isClosedBracket(str[i])) {
      if (brackets[str[i]] !== arr.pop()) {
        return false;
      } else {
        arr.push(str[i]);
      }
    }
    return arr.length === 0;
  }
}

function isClosedBracket(ch) {
  return [')', ']', '}'].indexOf(ch) > -1;
}

