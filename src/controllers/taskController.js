import * as taskService from '../services/taskService.js';

export async function getTasks(req, res, next) {
  try {
    const { completed } = req.query;

    let filterCompleted = undefined;
    if (completed !== undefined) {
      // Validate that query parameter is strictly 'true' or 'false' matching API spec
      if (completed !== 'true' && completed !== 'false') {
        return res.status(400).json({ errors: ['completed must be "true" or "false"'] });
      }
      filterCompleted = completed === 'true';
    }

    const tasks = await taskService.getAllTasks({ completed: filterCompleted });
    res.json(tasks);
  } catch (error) {
    next(error);
  }
}

export async function createTask(req, res, next) {
  const { title, completed } = req.body;
  const task = await taskService.createTask({ title, completed });
  res.status(201).json(task);
}