export {};

// intersection型 既存の型を再利用して新たな型を定義する
type Pitcher1 = {
  throwingSpeed: number;
};

type Batter1 = {
  battingAverage: number;
};

const DaimajinnSasaki: Pitcher1 = {
  throwingSpeed: 154,
};

const OtciaiHromitsu: Batter1 = {
  battingAverage: 0.367,
}

// 冗長な書き方
// type TwoWayPlayer = {
//   throwingSpeed: number;
//   battingAverage: number
// }
// ↓　書き換え ↓
type TwoWayPlayer = Pitcher1 & Batter1;
const OtaniShohei: TwoWayPlayer = {
  throwingSpeed: 165,
  battingAverage: 0.286
};
