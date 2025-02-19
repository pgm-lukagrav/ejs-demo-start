import {person, navItems} from "../data/data.js"

export const home = (req, res) => {
  res.render("pages/home", {
    title: "kkr dinootje",
    content: "kkr kkr kkr kkr",
    navItems
  });
};

export const about = (req, res) => {
  res.render("pages/default", {
    title: "about us",
    content: "kkr kkr kkr kkr",
    team: ["t-rex", "veloicraptop", "<strong>stegosaurus</strong>"],
    navItems
  });
};

export const contact = (req, res) => {
  res.render("pages/contact", {
    title: "contact",
    content: "kkr kkr kkr kkr",
    person, navItems
  });
};

export const privacy = (req, res) => {
  res.render("pages/default", {
    title: "privacy policy",
    message: "kkr kkr kkr kkr",
    navItems
  });
};
