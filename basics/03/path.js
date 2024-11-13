// path 모듈 연습하기 ( 결과 비교 파일 : 03\results\path.js)
const path = require('path');

// join
const fullPath = path.join('some', 'work', 'ex.txt');
//console.log(fullPath);

// 경로만 추출
const dir = path.dirname(fullPath);
//console.log(dir);

// 파일 이름만 추출 - basename
const fn1 = path.basename(__filename);
console.log(`전체 경로(__filename):${__filename} `);
console.log(fn1);

const fn2 = path.basename(__filename, '.js');
console.log(fn2);