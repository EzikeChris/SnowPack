import { v4 as uuidV4 } from 'uuid';

// Capture Task Elements By ID //
const list = document.querySelector<HTMLUListElement>('#list');
const taskForm = document.querySelector<HTMLFormElement>('#task-form');
const taskTitle = document.querySelector<HTMLFormElement>('#task-title');

// Adherance
interface Task {
  id: string;
  title: string;
  completed: boolean;
  createdAt: Date;
}

/// Capture Task Data ///
taskForm?.addEventListener('submit', function (e) {
  e.preventDefault();
  if (taskTitle?.value == String || taskTitle?.value == null) return;
  const newTask: Task = {
    id: uuidV4(),
    title: taskTitle.value,
    completed: false,
    createdAt: new Date(),
  };
});
