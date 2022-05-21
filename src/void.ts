export {};

// void型 データが存在しないときに指定する(undefinedの時)
function returnNothing(): void {
  console.log("I don't return anything!");
}

// undefinedが返ってくる
console.log(returnNothing());
