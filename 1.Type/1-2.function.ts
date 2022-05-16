{
  function sum(a: number, b: number): number {
    return a + b;
  }

  function returnPromise(index: number): Promise<number> {
    // ...
    // ...
    // ...

    return new Promise((res, rej) => {
      res(100);
    });
  }

  // optional
  function printMe(name: string, age?: number) {
    console.log('name : ', name);
    if (age) {
      console.log('age : ', age);
    }
  }

  printMe('dev_kong');

  // default
  function sayHi(message: string = 'hi') {
    console.log(message);
  }

  sayHi();

  // rest
  function sumEvery(...numbers: number[]): number {
    return numbers.reduce((acc, cur) => acc + cur, 0);
  }
  console.log(sumEvery(1, 2, 3, 5));
}
