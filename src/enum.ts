export {};

// enum型 数値や文字列を列挙するときに使用
enum Months {
  January = 1,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December
}

console.log(Months.January);
console.log(Months.February);
console.log(Months.December);

enum Colors {
  RED = '#ff0000',
  WHITE = '#fff',
  GREEN = '#008000',
  BLUE = '#0000ff',
  // YELLOW = '#ffff00',
  BLACK = '#000'
}

let green = Colors.GREEN;
console.log({green});

//----- 途中で要素を追加したい時
enum Colors {
  YELLOW = '#ffff00',
  GRAY = '#808080'
}

Colors.YELLOW;
