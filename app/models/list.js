const mongoose = require('mongoose')

const listSchema = mongoose.Schema({
  name: String,
  items: [{ itemName: String, qty: Number, completed: Boolean, dateAdded: Date }]
  // owners: [mongoose.Schema.Types.ObjectId],
  // participants: [mongoose.Schema.Types.ObjectId]
})

module.exports = mongoose.model('List', listSchema)
