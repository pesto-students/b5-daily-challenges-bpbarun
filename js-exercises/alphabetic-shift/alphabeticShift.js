const alphabeticShift = input => {
  const result = [];
  for(let i = 0; i<input.length; i++){
    const number = input.charCodeAt(i);
    const char = String.fromCharCode(number + + 1);
    result.push(char);
  }
  return result.join('');
};
export { alphabeticShift };
