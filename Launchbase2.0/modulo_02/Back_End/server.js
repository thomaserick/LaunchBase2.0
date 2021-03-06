const express = require("express");
const nunjucks = require("nunjucks");

const server = express();
const videos = require("./data");

server.use(express.static("public"));

server.set("view engine", "njk");
nunjucks.configure("views", {
  express: server,
  autoescape: false,
  noCache: true,
});

server.get("/", (req, res) => {
  const about = {
    avatar_url: "./img/geek.jpg",
    name: "Thomas Erick",
    role: "Desenvolvedor - Web",
    description: "Full Stack",
    links: [
      {
        name: "GitHub",
        url: "https://github.com/thomaserick/",
      },
      {
        name: "Linkedin",
        url: "https://github.com/thomaserick/",
      },
    ],
  };
  return res.render("about", { about });
});

server.get("/portfolio", (req, res) => {
  return res.render("portfolio", { items: videos });
});

server.get("/video", (req, res) => {
  const id = req.query.id;

  const video = videos.find(function (video) {
    return video.id == id;
  });

  if (!video) {
    return res.send("Video not fund!");
  }
  return res.render("video", { item: video });
});

server.listen(5000, () => {
  console.log("Server is running");
});
