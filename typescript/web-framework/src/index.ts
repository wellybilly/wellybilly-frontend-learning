import { User } from "./models/User";
import { UserEdit } from "./views/UserEdit";

const user = User.buildUser({ name: "laowang", age: 20 });
const root = document.getElementById("root");

if (root) {
  const userEdit = new UserEdit(root, user);
  userEdit.render();
} else {
  throw new Error("Root element not found");
}

// const user = User.buildUser({ id: 1 });

// user.on("change", () => {
//   console.log("user" + user.get("name"));
// });

// user.fetch();

// setTimeout(() => {
//   console.log(user);
// }, 4000);

// #3
// user.events.on('change', () => {
//   console.log('change!');
// });
// user.events.trigger('change');

// #1
// const user = new User({ name: 'myname', age: 20 });

// user.set({ name: 'newname', age: 9999 });
// user.set({ age: 99 });

// user.on('change', () => {
//   console.log('change #1');
// });

// user.on('save', () => {
//   console.log('Save was triggered');
// });

// console.log(user.get('name'));
// console.log(user);

// user.trigger('change');
// user.trigger('save');

// #2
// import axios from 'axios';
// axios.post('http://localhost:3000/users', {
//   name: 'myname',
//   age: 20,
// });

// user.fetch();

// user.set({ name: 'bill1', age: 4 });
// console.log('before save' + user.get('name'));

// user.save();
