{
  const vegtables: string[] = ['cucumber', 'eggplant'];
  const veges: Array<string> = ['tomato', 'potato'];

  function printArray(veges: readonly string[]) {
    veges.forEach((v) => {
      console.log(v);
    });
  }

  printArray(vegtables);

  // tuple => interface, type alias, class
  let me: [string, number];
  me = ['dev_kong', 30];
  me[0]; // dev_kong
  me[1]; //30
}
