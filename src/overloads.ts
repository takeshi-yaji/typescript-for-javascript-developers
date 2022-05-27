export {};

// オーバーロード(シグネチャーを使用) 同じ関数名でも引数や戻り値が違う関数の作り方
function double(value: number): number;
function double(value: string): string;

function double(value: any): any {
  console.log(typeof value);

  if(typeof value === 'number') {
    return value * 2;
  } else {
    return value + value;
  }
}

console.log(double(100));
console.log(double('Go '));
// console.log(double(true));
