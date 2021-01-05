function duplicateLetters(args) {
  const freq = {};
  for (let i = 0; i < args.length; i++) {
    const character = args.charAt(i);
    if (freq[character]) {
      freq[character]++;
    } else {
      freq[character] = 1;
    }
  }
  const maxVal = [];
  for (const k in freq) {
    maxVal.push(freq[k]);
  }
  const isNumber = Math.max(...maxVal);
  return (isNumber === 1) ? false : isNumber; 
}
export {
  duplicateLetters,
};
