const express = require('express');
const app = express();

let port = 3000;


// 경로 '/' 로 들어오는 요청들은 public 폴더로 정적 라우팅합니다.
app.use('/', express.static( './build'));

const server = app.listen(port, () => {
    console.log('Express listening on port', port);
});