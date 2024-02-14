const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
const app = express();

app.use(cors());
app.use(express.json());

// DB Connection
const conn = require("./db/conn"); // Importando o módulo 'db/conn'

try {
    conn.connect(); // Conectando ao banco de dados
} catch (error) {
    console.error(error); // Tratando erros de conexão
}

//Routes
const routes = require("./routes/router");

app.use("/api", routes);

// Load environment variables from the root of the project
dotenv.config({ path: path.join(__dirname, "../.env") });

const PORT = process.env.PORT || 3333;

app.listen(PORT, function () {
    console.log(`Server running on port ${PORT}!`);
});

//GRyM7oWG9EAfO6nm
