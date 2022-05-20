{
  type Calc = 'add' | 'substract' | 'multiply' | 'devied' | 'reminder';

  const calculator = (
    action: Calc,
    a: number,
    b: number
  ): number | undefined => {
    if (action === 'add') {
      return a + b;
    }

    if (action === 'substract') {
      return a - b;
    }

    if (action === 'multiply') {
      return a * b;
    }

    if (action === 'devied') {
      return Math.floor(a / b);
    }

    if (action === 'reminder') {
      return a % b;
    }
  };

  console.log(calculator('add', 1, 3));
  console.log(calculator('substract', 3, 1));
  console.log(calculator('multiply', 4, 2));
  console.log(calculator('devied', 4, 2));
  console.log(calculator('reminder', 5, 2));
}
