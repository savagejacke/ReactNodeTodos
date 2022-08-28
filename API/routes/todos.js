const express = require("express");
const router = express.Router();
const Todo = require("../models/todo");

// Get all todos
router.get("/", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.send(todos);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

// Get one todo
router.get("/:id", getTodo, (req, res) => {
  res.json(res.todo);
});

// Creating a todo
router.post("/", async (req, res) => {
  const todo = new Todo({
    message: req.body.message,
  });

  try {
    const newTodo = await todo.save();
    res.status(201).json(newTodo);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
});

// Updating a todo
router.patch("/:id", getTodo, async (req, res) => {
  if (req.body.message != null) {
    res.todo.message = req.body.message;
  }
  try {
    const updatedTodo = await res.todo.save();
    res.json(updatedTodo);
  } catch (e) {
    res.status(400).message({ message: e.message });
  }
});

// Deleting a todo
router.delete("/:id", getTodo, async (req, res) => {
  try {
    await res.todo.remove();
    res.json({ message: "Deleted todo" });
  } catch (e) {
    console.log(res.todo);
    res.status(500).json({ message: e.message });
  }
});

async function getTodo(req, res, next) {
  let todo;
  try {
    todo = await Todo.findById(req.params.id);
    if (todo == null)
      return res.status(404).json({ message: "Could not find todo" });
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }

  res.todo = todo;
  console.log(res.todo);
  next();
}

module.exports = router;
