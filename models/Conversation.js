const mongoose = require("mongoose");

const ConversationSchema = mongoose.Schema({
  messages : {type:[{ message: String, reponse: String }]},
  motCles : {type:[String]},
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "UserSchema",
  },
});
module.exports = mongoose.model("Conversation", ConversationSchema);