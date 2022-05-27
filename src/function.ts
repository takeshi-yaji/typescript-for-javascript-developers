export {};

// 関数に対するアノテーション
function bmi(height: number, weight: number): number {
  return weight / (height * height);
}

console.log(bmi(1.82, 77));
