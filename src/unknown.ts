export {};

// unknown型
const kansu = (): number => 43;

let numberAny: any = kansu();
let numberUnknown: unknown = kansu();

let sumAny = numberAny + 10;
if(typeof numberUnknown === 'number') {
  let sunUnknown = numberUnknown + 10;
}
