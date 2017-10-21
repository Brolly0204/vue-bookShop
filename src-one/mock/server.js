const express = require('express');
const app = express();
const router = express.Router();
const fs = require('fs');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.all('*', function(req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE,  OPTIONS');
//   res.header('Access-Control-Allow-Headers', 'X-Requested-With');
//   res.header('Access-Control-Allow-Headers', 'Content-Type');
//   next();
// });

// slider 接口
const sliders = require('./sliders');
router.get('/getSliders', (req, res) => {
  res.json(sliders);
});
// book 接口
let books = require('./books.json');
router.get('/getBooks/:id?', (req, res) => {
  let {id} = req.params;
  if (id) {
    id = parseFloat(id);
    const book = books.find(book => book.id === id);
    return res.json(book);
  }
  res.json({books});
});

// 添加book
router.post('/addBook', (req, res) => {
  let book = req.body;
  book.id = books[books.length - 1].id + 1;
  books.push(book);
  fs.writeFile('./books.json', JSON.stringify(books), (err) => {
    if (!err) {
      res.json({msg: '删除成功', errno: 0});
    } else {
      res.json({msg: '删除失败', errno: 1});
    }
  });
});

// 删除book
router.delete('/book/:id', (req, res) => {
  let id = parseFloat(req.params.id);
  books = books.filter(book => book.id !== id);
  fs.writeFile('./books.json', JSON.stringify(books), err => {
    if (!err) {
      res.json({msg: 'success', errno: 0});
    } else {
      res.json({msg: 'error', errno: 1});
    }
  });
});

// 修改book
router.put('/updateBook', (req, res) => {
  let id = req.body.id;
  books = books.map(book => {
    if (book.id === id) {
      return req.body;
    }
    return book;
  });
  fs.writeFile('./books.json', JSON.stringify(books), err => {
    if (!err) {
      res.json({msg: 'success', errno: 0, book: req.body});
    } else {
      res.json({msg: 'error', errno: 1, book: {}});
    }
  });
});

app.listen(7000);

app.use('/api', router);
