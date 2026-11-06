import * as taskRepo from '../repositories/taskRepo.js';

export async function getAllTasks(filter = {}) {
  return taskRepo.findAll(filter);
}

export async function createTask(data) {
  return taskRepo.create({
    title: data.title,
    completed: data.completed ?? false,
  });
}