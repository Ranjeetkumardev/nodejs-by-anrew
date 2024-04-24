import express from "express";
import bycript from "bcryptjs";
import jwt from "jsonwebtoken";
import multer from "multer";
import mongoConnetion from "./DB/mongoose.js";
import userRouter from "./routes/userRourer.js";
import auth from "./middleware/auth.js";

const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;
mongoConnetion
  .then(() => {
    app.listen(port, () => {
      console.log(`connected to the mongoDB database and listening at:${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

// const upload = multer({
//   dest: "images",
//   limits: { fileSize: 1000000 },
//   fileFilter(req, file, cb) {
//     // if (!file.originalname.endsWith(".pdf")) {
//     if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
//       return cb(new Error("Please upload a word documents"));
//     }
//     cb(undefined, true);
//   },
// });

//Error Handling
// const errorMiddleware = (req, res, next) => {
//   throw new Error("Error From middleware!");
// };


// do this for patch ,deletet and get
// app.post(
//   "/upload",
//   upload.single("upload"),
//   (req, res) => {
//     res.send();
//   },
//   (error, req, res, next) => {
//     res.status(400).send({ error: error.message });
//   }
// );

// app.post("/upload", upload.single("upload"), (req, res) => {
//   res.send();
// });

// app.use((req, res, next) => {
//   console.log(req.method, req.path)
//   next()

//it check if Get request then show the blew message. else call the next middleware work perfedtly
//   if (req.method === 'GET') {
//    res.send('Get requests sre diasabled')
//   } else {
//     next( )
//  }

// becouse i din't call next() it restrict all operations
// res.status(503).send("site is currently down , Check back latter!")

// })

app.use(userRouter);

// const myFunction = async() => {
//   const password = "Dev@12344"
//   const hashedpassword = await bycript.hash(password ,8)
//   console.log(password)
//   console.log(hashedpassword)

//   const isMatch = bycript.compare("Dev@12344", hashedpassword);
//   console.log(isMatch)
// }

const myFunction = () => {
  const token = jwt.sign({ _id: "abc123" }, "thisismynodecourse", {
    expiresIn: "7 days",
  });
  console.log(token);

  const data = jwt.verify(token, "thisismynodecourse");
  console.log(data);
};

myFunction();
