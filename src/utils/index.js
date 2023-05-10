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

export function generateId() {
  const crypto = window.crypto;

  // Generate a 16-byte array of cryptographically secure random values.
  const randomBytes = crypto.getRandomValues(new Uint16Array(16));

  // Convert the array of random bytes to a string.
  const randomId = Array.from(randomBytes)
    .map((byte) => byte.toString(16))
    .join("");

  // return random id to the console.
  return randomId;
}
