import Todos from "../model/todoModel.js";

const createTodo = async (req, res) => {
  // let title = req.body.title
  // let description = req.body.description
  try {
    let { title, description, userId } = req.body;

    let newTodo = await Todos.create({
      userId,
      title,
      description,
    });

    res.json(newTodo);
  } catch (error) {
    console.log(error);
  }
};

const getTodos = async (req, res) => {
  try {
    const { userId } = req.query;
    const todos = await Todos.find({ userId: userId });
    res.json(todos);
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteTodo = async (req, res) => {
  try {
    const deleted = await Todos.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ message: "Todo not found" });
    }

    res.json({ message: "Todo deleted successfully" });
  } catch (error) {
    res.status(500).json(error);
  }
};

const getTodoById = async (req, res) => {
  try {
    const { id } = req.query;

    const todo = await Todos.findById(id);

    if (!todo) {
      return res.status(404).json({ message: "todo not found" });
    }

    res.json(todo);
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateTodo = async (req, res) => {
  try {
    const { title, description, isCompleted, id } = req.body;

    const updatedTodo = await Todos.findByIdAndUpdate(
      id,
      { title, description, isCompleted },
      { new: true }
    );

    if (!updatedTodo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    res.json(updatedTodo);
  } catch (error) {
    res.status(500).json(error);
  }
};

export { createTodo, getTodos, deleteTodo, updateTodo, getTodoById };
