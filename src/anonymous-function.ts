export {};

// レクチャーではこっち
// let bmi: (height: number, weight: number) => number = function (
//   height: number,
//   weight: number
// ): number {
//   return weight / (height * height);
// };

// これでも良いのでは？多分これでOK!!
let bmi: (height: number, weight: number) => number = function (height, weight){
  return weight / (height * height);
};

console.log(bmi(1.82, 77));
