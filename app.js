const express = require('express');

const app = express();
app.use(express.json());
const members = require('./members');
const ali = require('./alipay');



app.post('/createBusinessPartner', (req, res)=>{
    console.log(req.body);
    return res.send(ali);
});


app.get('/members', (req, res)=>{
    const {team} = req.query;
    if(team){
        const teamMembers = members.filter((m)=> m.team === team);
        res.send(teamMembers);
    }else{
        res.send(members);
    }
});

app.get('/members/:id', (req, res)=>{
    console.log(req.headers);
    console.log(req.params);
    const {id} = req.params;
    const member = members.find((m) => m.id === Number(id));
    if(member){
        return res.send(member);
    }else{
        return res.status(404).send({message : "No such member"});
    }
});

app.post('/members', (req, res)=>{
    console.log(req.body);
    return res.send(req.body);
});

app.put('/members/:id', (req, res)=>{
  const {id} = req.params;
  const toBeMember = req.body;
  const targetMember = members.find((m)=> m.id === Number(id));
  if(targetMember){
      Object.keys(toBeMember).forEach((prop)=>{
            console.log(prop);
            targetMember[prop] = toBeMember[prop];
      });
      res.send(targetMember);
  }else{
      res.status(404).send({message: "No Member"});
  }
});

app.get('/hello', (req, res)=>{
    res.send('<h1>HiHIHIH~~</h1>');
});

app.listen(3000, ()=>{
    console.log('Server is listening');
});