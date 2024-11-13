// contactRoutes.js

const express = require('express');
const router = express.Router();

router.route('/')
  .get((req,res)=>{
    res.send("Contacts Page")
  })
  .post((req,res)=>{
    console.log(req.body);
    const {name, email, phone} = req.body;
    if(!name || !email || !phone){
      return res.send("필수 값이 입력되지 않았습니다.");
    }

    res.send("Creat Contacts")
  });
  

router.route('/:id')
  .get((req,res)=>{
    res.send(`View Contact for ID : ${req.params.id}`);
  })
  .put((req,res)=>{
    res.send(`Update Contact for ID : ${req.params.id}`);
  })
  .delete((req,res)=>{
    res.send(`Delete Contact for ID : ${req.params.id}`);
  });

  module.exports= router;
  
/*
//연락처 전체 조회
app.get('/contacts',(req,res)=>{
  res.send("Contacts Page")
});

//새 연락처 추가하기
app.post('/contacts',(req,res)=>{
  res.send("Creat Contacts")
});

//연락처 단건 조회
app.get('/contacts/:id',(req,res)=>{
  res.send(`View Contact for ID : ${req.params.id}`);
})

//특정 연락처 수정
app.put('/contacts/:id', (req,res)=>{
  res.send(`Update Contact for ID : ${req.params.id}`);
});

//특정 연락처 삭제
app.delete('/contacts/:id',(req,res)=>{
  res.send(`Delete Contact for ID : ${req.params.id}`);
});
*/