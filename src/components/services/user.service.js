const BASE_URL = 'mongodb://admin:admin@ds149934.mlab.com:49934/ppplmsapp';

const fetchGitUsers = userName =>
  fetch(`${BASE_URL}${userName}`)
    .then(status)
    .then(payload => payload.json())
    .then(userName => userName)
    .catch(error => {
      return Promise.reject(error);
    });

function status(res) {
  if (!res.ok) {
    throw new Error(res.status.text);
  }
  return res;
}

export default fetchGitUsers;

// const USERS = [
//   { id: 11, name: "Superman" },
//   { id: 12, name: "Batman" },
//   { id: 13, name: "Spider-Man" },
//   { id: 14, name: "Thor" },
//   { id: 15, name: "Hal Jordan" },
//   { id: 16, name: "Wonder Woman" },
//   { id: 17, name: "Captain America" },
//   { id: 18, name: "Martian Manhunter" },
//   { id: 19, name: "Super Girl" },
//   { id: 20, name: "Cat Woman" }
// ];

// const getUsers = new Promise((resolve, reject) => {
//   resolve(USERS);
// });

// // const getUsersSlowly = new Promise((resolve, reject) => {
// //   setTimeout(() => resolve(USERS), 2000);
// // });

// const getUsersById = userId =>
//   new Promise((resolve, reject) => {
//     resolve(USERS.find(user => user.id === userId));
//   });

// export { getUsers, getUsersById };
