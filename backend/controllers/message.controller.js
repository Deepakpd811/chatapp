import Conversation from "../model/conversation.js";
import Message from "../model/message.model.js";

export const getMessage = async (req, res) => {
  try {
    const { id: userToChat } = req.params;
    const senderId = req.user._id;
    console.log(senderId + " " + userToChat);

    const conversation = await Conversation.findOne({
      participant: { $all: [senderId, userToChat] },
    }).populate("messages");

    if (!conversation) {
      res.status(200).json([]);
    }

    // console.log(conversation.messages)

    res.status(201).json(conversation.messages);

  } catch (error) {
    console.log("error in getMessage " + error);
    res.status(500).json({ error: "Internal server Error" });
  }
};

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    // console.log(receiverId)
    // console.log(senderId)

    console.log(message);

    let conversation = await Conversation.findOne({
      participant: { $all: [senderId, receiverId] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participant: [senderId, receiverId],
      });
    }
    const newMessage = new Message({
      senderId,
      receiverId,
      messages: message,
    });

    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }

    await conversation.save();
    await newMessage.save();

    res.status(201).json(newMessage);
  } catch (error) {
    console.log("error in sendMessage " + error);
    res.status(500).json({ error: "Internal server Error" });
  }
};
