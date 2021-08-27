const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const route = express.Router()
const port = 8080;

app.use(bodyParser.json());
app.use("/", route);
app.listen(port, () => {
    console.log("Application running on port" + port);
});

//   route.get("/users", (req,res) => {
//       res.status(200).send(users);
//   });

const users = [{
        id: "1",
        name: "Miliswa",
        email: "marantselamiliswa9@gmail.com",
        password: "12345"
    },

    {
        id: "2",
        name: "Tlhogi",
        email: "t@gmail.com",
        password: "1234"
    },

    {
        id: "3",
        name: "carl",
        email: "c@gmail.com",
        password: "1234"
    }
]

route.get("/users", (req, res) => {
    const user = users.map(item => (
        item
    ))
    res.status(200).send(user)
})

route.post("/register", (req, res) => {
    const {
        id,
        name,
        email,
        password
    } = req.body;
    const user = {
        id: users.length + 1,
        name: "obakeng",
        email: "o@gmail.com",
        password: "3234"
    }
    console.log(user);
    users.push(user);
    res.status(200).send(users)
})


route.delete("/delete/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.findIndex(item =>
        item.id == id);
    users.splice(user, id)
    res.status(200).send(users)
});

app.put("/update/:id", (req, res) => {
    const id = req.params.id;
    const user = users.forEach(item => {
        if(item.id === id) {
            item.name = req.body.name,
            item.email = req.body.email,
            item.password = req.body.passoword
        }
    })
    res.json(users)
});
