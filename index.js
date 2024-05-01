const bodyParser = require("body-parser");
const express = require("express");
const app = express();

const PORT = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
let bloglist = [];
console.log(bloglist);
app.get("/blogs", function (req, res) {
  return res.status(202).json({
    data: bloglist,
    status: true,
  });
});
app.get("/blogs/:id", (req, res) => {
  // con sole.log(req.params);
  const ress = bloglist.filter((blog) => (blog.id == req.params.id));
  return res.status(200).json({
    data: ress,
    status: true,
  });
});
app.post("/blogs", function (req, res) {
  // req.body cannot be access but we can access req.query params
  // console.log(req.body);
  bloglist.push({
    title: req.body.title,
    content: req.body.content,
    id: Math.floor(Math.random() * 1000),
  });
  return res.status(201).json({ success: true });
});

app.listen(PORT, function process() {
  console.log("Server started");
});
