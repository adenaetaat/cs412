function* fibonacciSeries() {
    let a = 0, b = 1;
    while (true) {
      yield a;
      [a, b] = [b, a + b];
    }
  }
  
  function* evenFibonacci() {
    const fibonacci = fibonacciSeries();
    while (true) {
      const num = fibonacci.next().value;
      if (num % 2 === 0) {
        yield num;
      }
    }
  }
  
  const evenFibGen = evenFibonacci();
  for (let i = 0; i < 6; i++) {
    console.log(evenFibGen.next().value);
  }

