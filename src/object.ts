export {};

// object型 連想配列の時に使用する
// 書き方1 「: object」
let profile1: object = { name: 'take'};
profile1 = { birthYear: 1989 };

// 書き方2 「: {}」 こっちが推奨　/ 理由は下記
// : { name: string }とする事でプロパティ(name:)という型も定義できる
let profile2: {
  name: string;
} = { name: 'take' };
// profile2 = { birthYear: 1989 }; エラー
// profile2 = { name: 'taka' }; OK
