const express = require("express");
const app = express();
app.use(express.json());
// eslint-disable-next-line no-undef
const port = process.env.PORT || 3000;

app.set('views', './app/views');
app.set('view engine', 'pug');

const projects = require("./app/model/Projects");

app.listen(port, () => {
    console.log(`Listening to requests on port ${port}`);
});

app.get("/", (req, res) => {
    res.render('index.pug', { title: 'Hey', message: 'Hello there!'});
});

//CRUD proyectos
app.get("/v1/projects", async (req, res) => {
    const allProjects = await projects.getAllProjects();
    res.json(allProjects);
});

// probando.