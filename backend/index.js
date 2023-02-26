import { createClient } from "@supabase/supabase-js";
import { StorageClient } from "@supabase/storage-js";
import cors from "cors";

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

app.use(express.json({ limit: "50mb" }));
app.use(cors());

app.get("/", async (req, res) => {
  res.send("Hello World");
});

// GET Requests
app.get("/getUser", async (req, res) => {
  res.send(await supabase.auth.getUser());
});

// POST Requests

app.post("/register", async (req, res) => {
  //cut first

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

app.get("/getCourseFiles", async (req, res) => {
  const { data, error } = await supabase
    .from("CourseFiles")
    .select("*")
    .eq("course_id", req.query.course_id);

  res.send(data);
});

app.listen(port, () => {
  console.log(`Working at port: ${port}`);
});
