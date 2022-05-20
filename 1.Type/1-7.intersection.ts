{
  type Student = {
    name: string;
    age: number;
  };

  type Developer = {
    code: number;
    role: string;
  };

  type Person = Student & Developer;

  let intern: Person = {
    name: 'kong',
    age: 30,
    code: 55,
    role: 'back-end',
  };

  function internWork(person: Person) {
    console.log(person);
  }

  internWork(intern);
}
