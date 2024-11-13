const express = require('express');
const app = express();

app.get('/',(req,res)=>{
  res.send('Hello, Node!');
});


//미들웨어 사용 선언
//app.use(router);

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/contacts", require("./routes/contactRoutes"))

app.listen(3000,()=>{
  console.log('서버 실행 중');
});