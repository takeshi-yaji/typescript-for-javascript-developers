export {};

// デフォルト引数(関数に値が渡されない場合もしくはundefinedが渡された場合、あらかじめ決められた引数のことを言う)

// レクチャーではこっち
// const nextYearSalary = (
//   currentSalary: number,
//   rate: number = 1.1 // default引数
// ) => {
//   return currentSalary * rate;
// };

// こっちでもOK
const nextYearSalary: (currentSalary: number, rate?: number) => number = (
  currentSalary,
  rate = 1.1 // default引数
) => {
  return currentSalary * rate;
};

console.log(nextYearSalary(1000));
