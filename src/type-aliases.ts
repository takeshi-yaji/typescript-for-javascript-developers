export {};

// 型エイリアス

//----- 書き方 先頭は必ず大文字
type Mojiretsu = string;

// 普通の書き方
const fooString: string = 'Hello';

//----- 型エイリアスの書き方
const fooMojiretsu: Mojiretsu = 'Hello';

const example1 = {
  name: 'take',
  age: 32
};

//----- 連想配列にも可能
type Profile = {
  name: string;
  age: number;
}

const example2: Profile = {
  name: 'take',
  age: 32,
};

//----- 作った型を流用できる
type Profile2 = typeof example1;
