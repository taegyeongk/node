// import : 모듈형태와 비슷하나 사용시 import 로 받아야함.
// require : 단순 파일을 분리하기 위해서 사용할 경우에는 require로 받아야한다.


//노드나 자바스크립트에서는 같은 폴더에 있는 대상을 불러올 경우 앞에 ./ 를 사용해아한다.
// 상위 폴더에 있는 대상을 부를 경우 ../ 으로 .을 한번 더 사용
// ./ 가 없을 경우에는 외부라이브러리에 설치된 모듈파일 그 자체를 가져올 수 있기때문에 반드시 표시해줘야함.
//요즘에는 불러올 특정 대상만 따로 가져오는 경우가 많음
const { add, minus } = require('./calculator');

console.log(add(10,25));
console.log(minus(25,3));

