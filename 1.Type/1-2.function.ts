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
