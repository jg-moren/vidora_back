import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import routes from "./routes/routes";

const PORT = process.env.PORT;
const app = express();


app.use(express.json());
app.use(cors());

app.use("/api/", routes);

app.listen(PORT, () => { console.log(`Server listen in ${PORT}`); });

    
