import { createClient } from "@supabase/supabase-js";

import dotenv from "dotenv";
import express from "express";

import cors from "cors";

dotenv.config();

//supabase setup
const supabaseUrl = "https://tghtmxvonwrxpqauhixi.supabase.co";
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

//port setup
const port = process.env.PORT;

const app = express();

app.use(express.json({ limit: "50mb" }));
app.use(cors());

app.get("/", async (req, res) => {
    res.send("Hello World");
});

// GET Requests
app.get("/getUser", async (req, res) => {
    res.send(
        await supabase.from("Users").select("*").eq("email", req.query.email)
    );
});

// POST Requests
app.post("/register", async (req, res) => {
    //sign up the user for authentication
    let { data, error } = await supabase.auth.signUp(req.body);

    if (error) {
        res.send(error);
    } else {
        //add it with the picture path
        const { data, error } = await supabase.from("Users").insert([
            {
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                r_number: req.body.r_number,
                email: req.body.email,
                picture_path: req.body.image,
            },
        ]);

        res.send("done");
    }
});

app.post("/login", async (req, res) => {
    res.send(await supabase.auth.signInWithPassword(req.body));
});

app.post("/logout", async (req, res) => {
    res.send(await supabase.auth.signOut());
});

app.post("/joinCourse", async (req, res) => {
    res.send(
        await supabase.from("PeopleInCourse").insert([
            {
                user_id: req.query.user_id,
                course_id: req.query.course_id,
            },
        ])
    );
});

app.post("/checkIn", async (req, res) => {
    const userObj = await supabase
        .from("Users")
        .select("*")
        .eq("email", user.body.email);

    const response = await fetch(process.env.MXFACE_REQ_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            subscriptionkey: process.env.MXFACE_KEY,
        },
        body: JSON.stringify({
            encoded_image1: req.body.image1,
            encoded_image2: req.body.image2,
        }),
    });

    //meaning it's a match!
    if (response.matchResult == 0) res.send(false);
    else {
        //we create entry in verify table
        await supabase.from("Verify").insert([
            {
                user_id: userObj.user_id,
                verification_date: new Date(),
            },
        ]);

        res.send(userObj);
    }
});

app.listen(port, () => {
    console.log(`Working at port: ${port}`);
});
