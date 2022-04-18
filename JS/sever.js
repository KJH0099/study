// node_modules에 있는 express 관련 파일을 가져옴
const express = require('express');

//express 함수 변환값 변수에 저장
const app = express()

//8000 포트로 서버 오픈
app.listen(8000,function(){
    console.log('server start on 3000')
});