import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import axios from "axios";

//routes
import Course from "./routes/Course/Course.js";
import User from "./routes/User/User.js";

//import supabase database
import supabase from "./database/DbInit.js";

//swagger
import swaggerUi from "swagger-ui-express";
import { specs, swaggerOptions } from "./documentation/SwaggerSettings.js";

//dotenv config
dotenv.config();

//port setup
const port = process.env.PORT;

//creating app
const app = express();

app.use("/docs", swaggerUi.serve, swaggerUi.setup(specs, swaggerOptions));
app.use(cors());
app.use(express.json({ limit: "50mb" }));

//setup routes for User and Course
//app.use("/", User);
router.post("/login", async (req, res) => {
    //sign in to user
    const user = await supabase.auth.signInWithPassword(req.body);

    const { data, error } = await supabase.from("user").select("*");

    if (error) res.send(error);

    res.send(data);
});

app.use("/", Course);

app.listen(port, () => {
    console.log(`Working at port: ${port}`);
});
