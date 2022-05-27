export {};

// レストパラメータ (引数の数がわからない場合、全ての引数を受け取る方法)

// const reducer = (accumulator, currentValue) => accumulator + currentValue;
// 上記の書き方と同義 (足し算をする関数)
const reducer: (accumulator: number, currentValue: number) => number = (accumulator, currentValue) => {
  console.log({accumulator, currentValue});
  return accumulator + currentValue;
};

// レクチャーではこっち
// const sum: (...values: number[]) => number = (...values: number[]): number => {
//   console.log(values);
//   return 100;
// };


// これでもOK
const sum: (...values: number[]) => number = (...values) => {
  // reduce(関数名)で配列の中身の総和が求めることができる
  return values.reduce(reducer);
};

console.log(sum(1, 2, 3, 4, 5));
