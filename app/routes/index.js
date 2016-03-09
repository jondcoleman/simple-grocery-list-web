const path = process.cwd()
const listsController = require(`${path}/app/controllers/lists.js`)()

module.exports = (app) => {
  app.route('/')
    .get((req, res) => {
      res.sendFile(`${path}/index.html`)
      // res.json({msg:'hello world'})
    })

  app.route('/test')
    .get((req, res) => {
      listsController.addList('Grocery List')
      res.send('request sent')
    })
  app.route('/addItem')
    .get((req, res) => {
      listsController.addListItem('56dfe2d43953de844a57f65f', {
        itemName: 'beef',
        qty: 2,
        completed: false,
        dateAdded: Date.now()
      },
      (doc) => {
        res.json(doc)
      }
    )
    })
}
