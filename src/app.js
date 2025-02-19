// import statements
import express from "express";
import path from "path";
import expressLayouts from "express-ejs-layouts";

import {
  home,
  about,
  contact,
  privacy,
} from "./controllers/PageControllers.js";

// create an instance of express
const app = express();

app.use(expressLayouts)

app.set("view engine", "ejs");
app.set("layout", "layouts/main");
app.set("views", path.resolve("src", "views"));

// serve static files from the public folder
// they can be accessed from the root of the site (e.g. /assets/images/dino_07.png) 🦕
app.use(express.static("public"));

// GET route to serve the index.html file
app.get("/", home);
app.get("/about", about);
app.get("/contact", contact);
app.get("/privacy", privacy);

app.get("*", (req, res) => {
  res.status(404).render("error/404", {
    layout: "layouts/error", 
  })
})

// start the server, listen on port defined in .env file
app.listen(process.env.PORT, () => {
  // callback function that is called when the server starts
  console.log(`Application is listening to port ${process.env.PORT}.`);
});
