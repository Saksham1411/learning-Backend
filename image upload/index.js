const express = require('express');
const path = require('path');
const multer = require('multer');

const app = express();
const PORT = 5000;

// const upload = multer({ dest: "uploads/" });

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        return cb(null, "./uploads");
    },
    filename: function (req, file, cb) {
        return cb(null, `${Date.now()}-${file.originalname}`)
    }
})

const upload = multer({ storage })

app.set("view engine", "hbs");
app.set("views", path.resolve('./views'));

app.use(express.json());
app.use(express.urlencoded());

app.get("/", (req, res) => {
    return res.render("home");
})

app.post('/upload', upload.single('profileImage'), (req, res) => {
    console.log(req.body);
    console.log(req.file);

})


app.listen(PORT, () => console.log("server is running..."));
