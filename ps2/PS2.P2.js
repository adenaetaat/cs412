function* wordEmitter(sentence) {
    const words = sentence.split(' ');
    for (const word of words) {
      yield word;
    }
  }
  
  const sentence = 'All I know is something like a bird within her sang';
  const wordGen = wordEmitter(sentence);
  
  for (const word of wordGen) {
    console.log(word);
  }
  