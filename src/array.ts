export {};

// array型
let numbers: number[] = [1, 2, 3];

// オリジナルの型の作り方(Array<型>)
let numbers2: Array<number> = [1, 2, 3];
let strings2: Array<string> = ['Tokyo', 'Osaka', 'Kyoto'];

let strings: string[] = ['TypeScript', 'JavaScript', 'CoffeeScript'];

// 二次元配列の場合
let nijigenHairetsu: number[][] = [
  [50, 100],
  [150, 300]
];

// バラバラな値の配列の場合
let hairetsu: (string | number | boolean)[] = [1, false, 'Japan'];
