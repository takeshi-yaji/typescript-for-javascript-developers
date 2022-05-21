// axiosの導入
import axios from 'axios';
export {};

// ----- axiosの使用
// url指定
let url: string = 'https://udemy-utils.herokuapp.com/api/v1/articles?token=token123';

// getメソッド
axios.get(url).then(function(response) {
  // interface オリジナルのアノテーションを作成できる
  // レスポンスデータの中身(オブジェクト(連想配列))を型付けしたい場合に使用
  interface Article { // アノテーション名は最初は必ず大文字
    id: number;
    title: string;
    description: string;
  }

  let data: Article[] = response.data;

  // アノテーションが正確かtest
  // data = [
  //   {
  //     id: 1,
  //     // title: 'title',
  //     description: 'description',
  //   },
  // ];

  console.log(data);
});

// any型
// 型が指定できない複雑な場合に使用()
