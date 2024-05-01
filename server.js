const express = require('express');
const app = express();

const ConnectDb = require('./config/ConnectDb');
app.use(express.json());
const AuthRoute = require('./controllers/User');
const ConversationRoute = require('./controllers/Conversation');


ConnectDb();



app.use("/api/auth", AuthRoute);
app.use("/api/conversation",ConversationRoute);


const port = 5000;

app.listen(port,()=>{console.log(`app listening on ${port}`)})


