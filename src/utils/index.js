const formatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

export const formatDate = (date) => formatter.format(new Date(date));

export function createTodos() {
  let todos = [];
  for (let index = 0; index < 10; index++) {
    todos = [
      ...todos,
      {
        title: "Buy groceries",
        dueDate: "Due: March 15, 2023",
        priority: "High",
        status: "Pending",
        notes: "Milk, eggs, bread, cheese",
      },
    ];
  }
  return todos;
}
