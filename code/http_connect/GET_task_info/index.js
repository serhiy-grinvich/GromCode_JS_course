const baseUrl = 'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/tasks';

function getTasksList() {
  return fetch(baseUrl).then(response => response.json());

  // put your code here
}

function getTaskById(taskId) {
  return fetch(`${baseUrl}/${taskId}`).then(response => response.json());

  // return getTasksList().then(tasks => tasks.find(task => task.id === taskId));
}

// examples
getTasksList().then(tasksList => {
  console.log(tasksList); // ==> [ {'id':'1', 'isDone':false ... }, {'id':'2', 'isDone':false ... }, ...]
});

getTaskById('3').then(taskData => {
  console.log(taskData); // ==> { 'id': '2', 'text': 'District Communications Specialist', 'isDone': false, 'createdDate': 1651499052, 'finishedDate': 1651499052 }
});

// algo
