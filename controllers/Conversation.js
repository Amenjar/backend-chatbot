const express = require('express');
const { isAuth } = require('../middlewares/isAuth');
const { ajoutConversation, getConversation, deleteConversation, editConversation } = require('../services/Conversation');

const ConversationRoute = express.Router();

ConversationRoute.post('/addConversation',isAuth,ajoutConversation);

ConversationRoute.put('/ModConversation/:id',isAuth,editConversation);
ConversationRoute.delete('/addConversation/:id',isAuth,deleteConversation);
ConversationRoute.get('/ListConversations',isAuth,getConversation);

 

module.exports =ConversationRoute;  