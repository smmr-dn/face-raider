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

// GET Requests
app.get("/getUser", async (req, res) => {
    res.send(await supabase.auth.getUser());
});

// POST Requests

app.post("/register", async (req, res) => {
    res.send(await supabase.auth.signUp(req.body));
});

app.post("/login", async (req, res) => {
    res.send(await supabase.auth.signInWithPassword(req.body));
});

app.post("/logout", async (req, res) => {
    res.send(await supabase.auth.signOut());
});

app.post("/joinCourse", async (req, res) => {
    await supabase.from("PeopleInCourse").insert([
        {
            user_id: req.query.user_id,
            course_id: req.query.course_id,
        },
    ]);
});

app.post("/checkIn", async (req, res) => {
    await supabase.from("Verify").insert([
        {
            user_id: req.query.user_id,
            verification_date: new Date(),
        },
    ]);
});

app.listen(port, () => {
    console.log(`Working at port: ${port}`);
});
