export {};

// オプショナルな引数について「?」を引数に付与することで存在しなくてもいい引数を設定できる
let bmi: (height: number, weight: number, printable?: boolean) => number = (
  height,
  weight,
  printable?
) => {
  const bmi: number = weight / (height * height);

  if(printable) {
    console.log({ bmi });
  }
  return bmi;
};
bmi(1.82, 76);

// // 引数として存在してもしてなくてもいい引数の書き方(第３引数)
// bmi(身長, 体重, console.logで出力するかどうか?)
// bmi(1.82, 76, true);
// bmi(1.82, 76, false);
// bmi(1.82, 76);
