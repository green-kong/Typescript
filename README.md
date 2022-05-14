# Type-Script

<details>
<summary># 0. 설치 및 실행</summary>
<div markdown="1">

### 0-1. 설치

```zsh
# 타입스크립트 컴파일러 설치
npm install -g typesciript
```

\*.ts 파일을 만들어서

### 0-1. 실행

```js
class Person {
  age: number;
  construrtor() {
    this.age = 1;
  }
}
```

node \*.ts 를 실행시키면, Syntax error 가 발생한다.
ts 문법을 js로 변환해주는 과정을 거쳐야 함

```zsh
# ts => js 컴파일링
tsc *.ts
```

디렉토리에 \*.js 가 생겨난 걸 확인 할 수 있다.
그리고 새롭게 생겨난 js 파일을 실행시켜야 한다.

```zsh
node *.js
```

매우 번거로움..
컴파일 과정없이 바로 node에서 typesciript 를 js로 변경 시켜서 실행시키는 툴이 있음

```zsh
npm i -g ts-node
```

컴파일 과정 없이 바로 `node` 명령어로 ts 파일 실행 가능함.

라이브서버로 확인을 할때에는`Script` 태그에 ts파일이 아니라 js 파일로 확인을 해야 하는데,

매번 컴파일을 해줘야하는 게 매우 번거로움

```zsh
tsc -w *.ts
```

명령어로 ts 파일이 수정될 때 마다 자동으로 컴파일을 해서 해당 js 파일을 업데이트 해줌

</div>
</details>

<details>
<summary># 1. Type</summary>
<div markdown="1">

### 1. Basic

typesciript 에서 타입을 변수를 선언할 때는 `:`를 이용해서 타입을 지정해줘야한다.

```js
// number
let num: number = 1234;

// string
let str: string = 'hello world';

// boolean
let fact: boolean = true;
fact = false;
```

`undefined` 와 `null` 같은 경우는 단일 타입으로 변수를 설정할 경우  
`undefined` 또는 `null` 밖에 안들어가져서 쓸모 없는 변수가 되어버림

그래서 `|` 를 이용해 여러개의 타입이 들어갈 수 있는 변수로 지정 한다.

```js
// undefined
let name: undefined | string = undefined;
name = 'dev_kong';

// null
let age: null | number = null;
age = 21;
```

`void` 타입과 `never` 타입은 주로 함수의 타입을 지정(사실 변수에는 사용이 아예 안한다고봐도 무방)사용한다.
`void`는 `undefined`를 리턴하는 함수에 `never`는 리턴조차 하지 않는 함수(throw new Error(afd))에 사용된다

```js
// void
function voidFunction(): void {
  console.log('it is void function');
  return;
}

// void
function errorFunction(e: string): never {
  throw new Error(e);
}

function infinite(): never {
  while (true) {
    console.log('keep running~');
  }
}
```

object 타입은 js의 모든 objective 를 담을 수 있는 타입이다.
당연하게도 안쓰는게 좋다.

```js
let obj: object = { hello: 'world' };

obj = ['hello', 'world'];

obj = (): void => {
  console.log('object!');
  return;
};
```

### 2. function

타입스크립트에서는 함수를 사용할 때에 리턴하는 값의 타입 뿐만 아니라,
인자로 들어오는 값에대한 타입 역시 지정 해줘야한다.

```js
function sum(a: number, b: number): number {
  return a + b;
}
```

프로미스 객체를 리턴하는 경우에는 프로미스 객체를 리턴한다고 명시 해줘야 함

```js
function returnPromise(index: number): Promise<number> {
  // ...
  // ...
  // ...

  return new Promise((res, res) => {
    res(100);
  });
}
```

</div>
</details>

<details>
<summary># 2. Type</summary>
<div markdown="1">

</div>
</details>
