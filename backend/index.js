import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
import express from "express";

dotenv.config();

//supabase setup
const supabaseUrl = "https://tghtmxvonwrxpqauhixi.supabase.co";
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

//port setup
const port = process.env.PORT;

const app = express();

app.get("/", async (req, res) => {
    res.send("Hello World");
});
app.listen(port, () => {
    console.log(`Working at port: ${port}`);
});
