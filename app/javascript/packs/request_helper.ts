export const makeRequest = (url, method, data) => {
  return fetch(url, {
    method,
    body: JSON.stringify(data),
    headers: { "Content-type": "application/json" },
  });
};

// makeRequest('http://localhost:3000/todos', "POST", {todo: {name: 'dupa', done: false}}).then(res => res.json()).then(data => console.log(data))
