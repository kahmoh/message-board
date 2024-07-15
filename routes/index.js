var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { messages: messages });
});

router.post('/new', function (req, res) {
  const data = req.body
  messages.push({text: data.messageContent, user: data.author, added: new Date()})
  res.redirect('/')
})

module.exports = router;
