export {};

// interface型 クラスやオブジェクト型にも型にオリジナルの型をつけることができる

// インターフェイスの書き方 「=」が不要
interface ObjectInterface {
  name: string;
  age: number;
}

// エイリアスの書き方
type ObjectType = {
  name: string;
  age: number;
};

let object: ObjectInterface = {
  name: 'takesan',
  age: 32
}
