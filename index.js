const express = require("express");
const app = express();
const port = 3000;

const books = [
  {
    id: 1,
    title: "Book 1",
  },
  {
    id: 2,
    title: "Book 2",
  },
  {
    id: 3,
    title: "Book 3",
  },
];
app.get("/", (req, res) => {
  res.json(books);
});
app.get("/:id", (req, res) => {
  const book = books.find((b) => b.id === parseInt(req.params.id));
  if (!book) return res.status(404).send("Book not found");
  res.json(book);
});
app.post("/", (req, res) => {
  const id = randomInt(1, 9999);
  const newBook = {
    id,
    title: `Book ${id}`,
  };
  books.push(newBook);
  res.status(201).json(newBook);
});
app.patch("/:id", (req, res) => {
  const book = books.find((b) => b.id === parseInt(req.params.id));
  if (!book) return res.status(404).send("Book not found");
  book.title = `Updated Book ${book.id}`;
  res.json(book);
});
app.delete("/:id", (req, res) => {
  const bookIndex = books.findIndex((b) => b.id === parseInt(req.params.id));   
    if (bookIndex === -1) return res.status(404).send("Book not found");
    const deletedBook = books.splice(bookIndex, 1);
    res.json(deletedBook[0]);
});

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
