const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ConversationSchema = new Schema(
    {
      members: {
        type: Array,
      },
      addId: {
        type: String,
        required: true,
      }
    },
    { timestamps: true }
  );

const conversation =  mongoose.model("Conversation", ConversationSchema);

module.exports = conversation;