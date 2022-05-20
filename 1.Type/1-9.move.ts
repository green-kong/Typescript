{
  type Direction = 'up' | 'down' | 'left' | 'right';

  type Position = {
    x: number;
    y: number;
  };

  const position: Position = {
    x: 0,
    y: 0,
  };

  const move = (direction: Direction) => {
    switch (direction) {
      case 'up':
        position.y += 1;
        break;
      case 'down':
        position.y -= 1;
        break;
      case 'right':
        position.x += 1;
        break;
      case 'left':
        position.x -= 1;
        break;
    }
  };

  console.log(position);
  move('down');
  console.log(position);
  move('up');
  console.log(position);
  move('right');
  console.log(position);
  move('left');
  console.log(position);

  const test = (idx: number): number => {
    return idx;
  };
}
