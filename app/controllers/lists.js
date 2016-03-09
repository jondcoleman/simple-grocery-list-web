const path = process.cwd()
const LIST = require(`${path}/app/models/list.js`)

module.exports = () => {
  return {
    addList: (listName) => {
      const newList = new LIST({
        name: listName,
        items: []
      })
      newList.save((err) => {
        if (err) {
          throw err
        }
      })
    },
    addListItem: (listID, listItem, callback) => {
      const newItems = []
      newItems.push(listItem)
      LIST.findByIdAndUpdate(listID,
        { $push: { "items": listItem } },
        { new: true },
        (err, doc) => {
          if (err) { throw err }
          callback(doc)
        })
    }
  }
}
