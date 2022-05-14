{
  const num: number = 6;

  const str: string = 'hello';

  const boal: boolean = true;

  // 한번 타입이 선언 되면 변경이 불가능하므로 이렇게 쓰는 경우는 없음
  // let name: undefined;

  // | 사용해서 타입 여러개 지정 가능
  let name: undefined | string;
  name = undefined;
  name = 'dev_kong';

  // null 도 마찬가지임
  let age: null | number;
  age = null;
  age = 123;

  function print(): void {
    console.log('void');
    return;
  }

  function infinite(): never {
    while (true) {}
  }

  let obj: object;
  obj = { hello: 'world' };
  obj = [1, 2, 3];
  obj = (): void => {
    console.log('hello world');
  };
}
