export {};

// never型 returnされない場合に指定(例外処理の時に使用する)

// 例外処理
function error(message: string): never {
  throw new Error(message);
}

// エラーハンドリング
try {
  let result = error('test');
  console.log(result);

} catch(error) {
  console.log({error});
}

let foo: void = undefined;
let bar: never = error('only me!');
