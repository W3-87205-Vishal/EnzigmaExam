const Task = require('../models/Taskmodel');

exports.getTasks = (req, res) => Task.getAll((err, rows) => {
  if (err) res.status(500).json(err);
  else res.json(rows);
});

exports.createTask = (req, res) => {
  const newTask = req.body;
  Task.create(newTask, (err, result) => {
    if (err) res.status(500).json(err);
    else res.status(201).json({ id: result.insertId, ...newTask });
  });
};

exports.updateTask = (req, res) => {
  const id = req.params.id;
  const updatedTask = req.body;
  Task.update(id, updatedTask, err => {
    if (err) res.status(500).json(err);
    else res.json({ id, ...updatedTask });
  });
};

exports.deleteTask = (req, res) => {
  const id = req.params.id;
  Task.delete(id, err => {
    if (err) res.status(500).json(err);
    else res.json({ message: 'Task deleted' });
  });
};
