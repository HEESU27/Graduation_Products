const express = require('express');
const db = require('./db');

const app = express();


// 미들웨어, 라우트 설정
app.use(express.json());

app.get('/', (req, res) => res.send('Hello World'));

app.get('/db', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM test');
        res.json(rows);
    } catch (error) {
        console.error('쿼리 실행 실패:', error);
        res.status(500).json({ error: '서버 오류' });
    }
});

module.exports = app;