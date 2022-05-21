export {};

// tuple型(入ってくる要素の型が分かっている場合の配列に使用)
let profile: [string, number] = ['take', 32];

// アノテーションと異なるためエラー
// profile = [32, 'take'];
