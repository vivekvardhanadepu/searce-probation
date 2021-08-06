print = console.log;

print("1");
print("2");
setTimeout(() => {
  print("callback fired");
}, 2000);

print("3");
print("4");

var url = "https://jsonplaceholder.typicode.com";
const getTodos = (resource) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
      //console.log(request, request.readyState);
      if (request.readyState === 4 && request.status === 200) {
        //console.log(request.responseText);
        const data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState === 4) {
        //print('could not fetch the data');
        // callback("could not fetch the data", undefined);
        reject("error!!");
      }
    });
    // request.open("GET", url + "/todos/2");
    request.open("GET", resource);
    request.send();
  });
};

console.log(1);
console.log(2);

// getTodos("todos.json", (err, data) => {
//   print("callback fired");
//   if (err) print(err);
//   else print(data);
//   //print(err, data);
// });

getTodos("todos.json")
  .then((data) => {
    console.log("promise resolved:", data);
    return getTodos(url + "/todos/1");
  })
  .then((data) => {
    console.log("promise 2 resolved:", data);
    return getTodos(url + "/todos/2");
  })
  .then((data) => {
    console.log("promise 3 resolved:", data);
  })
  .catch((err) => {
    console.log("promise rejected:", err);
  });

console.log(3);
console.log(4);

// promise example

const getSomething = () => {
  return new Promise((resolve, reject) => {
    resolve("some data");
    reject("oops! error");
  });
};

// getSomething().then(
//   (data) => {
//     console.log(data);
//   },
//   (error) => {
//     console.log(error);
//   }
// );

getSomething()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

// fetch api

fetch("todos.json")
  .then((response) => {
    console.log("resolved:", response);
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log("rejected:", err);
  });

// async and await
console.log("async started");
const getData = async () => {
  const response = await fetch("todoss.json");
  if (response.status !== 200) {
    throw new Error("error in fetching data");
  }
  // console.log(response);
  const data = await response.json();
  return data;
};

console.log(1);
console.log(2);
getData()
  .then((data) => {
    console.log("resolved:", data);
  })
  .catch((err) => {
    console.log("rejected:", err.message);
  });

console.log(3);
console.log(4);
