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
  if (!taskTitle?.value) {
    alert('Please Add Task Title');
  } else {
    const newTask: Task = {
      id: uuidV4(),
      title: taskTitle.value,
      completed: false,
      createdAt: new Date(),
    };
    addItemToTask(newTask);
  }
  return;
});

// Add Task
const addItemToTask = function (task: Task): void {
  const item = document.createElement('li');
  const label = document.createElement('label');
  const checkbox = document.createElement('input');
  checkbox.addEventListener('change', function () {
    task.completed = checkbox.checked;
    if (task.completed) {
      label.style.textDecoration = 'line-through';
    }
  });
  label.append(checkbox, task.title);
  item.append(label);
  list?.append(item);
};
