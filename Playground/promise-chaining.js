import mongoConnetion from "../DB/mongoose.js";
import User from "../Model/User.js";

//Real example of promise chaining 
User.findByIdAndUpdate("6619c7125384e78312099cd6", { name: 1}).then((user) => {
  console.log(user);
  return User.countDocuments({ age: 1 })
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
});
