const ConversationSchema = require("../models/Conversation");

exports.ajoutConversation = async (req, res) => {

  try {
    const conversation = new ConversationSchema({ ...req.body, userId: req.user._id });
    await conversation.save();
    res.status(200).send({ msg: "conversation ajouté", conversation });
  } catch (error) {
    res.status(500).send({ msg: "could not add conversation", error });
  }a
};

exports.getConversation = async (req, res) => {
  try {
    const listOfConversation = await ConversationSchema.find();
    res.status(200).send({ msg: "list of conversation", listOfConversation });
  } catch (error) {
    res.status(500).send({ msg: "could not get list of conversation", error });
  }
};

exports.editConversation = async (req, res) => {
  const { id } = req.params;
  try {
    const conversationUpdated = await ConversationSchema.findByIdAndUpdate(id, {
      $set: { ...req.body },
    });
    res.status(200).send({ msg: "Conversation Updated", conversationUpdated });
  } catch (error) {
    res.status(500).send({ msg: "could not update Conversation", error });
  }
};
exports.deleteConversation = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteConversation = await ConversationSchema.findByIdAndDelete(id);
    res.status(200).send({ msg: "Conversation deleted", deleteConversation });
  } catch (error) {
    res.status(500).send({ msg: "could not delete Conversation", error });
  }
};
