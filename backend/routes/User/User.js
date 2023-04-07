/**
 * @swagger
 * components:
 *   schemas:
 *     Users:
 *       type: object
 *       required:
 *         - r_number
 *         - email
 *         - picture_path
 *       properties:
 *         id:
 *           type: int
 *           description: Auto-generated unique identifier
 *         first_name:
 *           type: string
 *           description: The first name of the user
 *         last_name:
 *           type: string
 *           description: The last name of the user
 *         r_number:
 *           type: string
 *           description: The unique R number of the user
 *         email:
 *           type: string
 *           description: Associated email of the user
 *         picture_path:
 *           type: string
 *           description: The base64 image of the user for face verification
 *       example:
 *         id: 1
 *         first_name: Jane
 *         last_name: Doe
 *         r_number: 12345678
 *         email: jane.doe@gmail.com
 *         picture_path: /9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAA...
 */
import express from "express";
import supabase from "../../database/DbInit.js";
import axios from "axios";
const router = express.Router();

router.use((req, res, next) => {
    next();
});

//GET request
router.get("/getUser/:id", async (req, res) => {
    const { data, error } = await supabase
        .from("user")
        .select("*")
        .eq("id", req.params.id);

    if (Object.keys(data).length === 0 || error) return res.sendStatus(403);

    return res.send(data);
});

router.get("/getPresentCount", async (req, res) => {
    const userId = await supabase
        .from("Users")
        .select("id")
        .eq("email", req.body.email);

    const courseId = await supabase
        .from("Course")
        .select("id")
        .eq("course_name", req.body.course_name);

    const presentCount = await supabase
        .from("Verify")
        .select(`course_id`, { count: "exact", head: true })
        .eq("user_id", userId.data[0].id)
        .eq("is_present", true)
        .eq("course_id", courseId.data[0].id);

    res.send("" + presentCount.count);
});

router.get("/getAbsentCount", async (req, res) => {
    const userId = await supabase
        .from("Users")
        .select("id")
        .eq("email", req.body.email);

    const courseId = await supabase
        .from("Course")
        .select("id")
        .eq("course_name", req.body.course_name);

    const absentCount = await supabase
        .from("Verify")
        .select(`course_id`, { count: "exact", head: true })
        .eq("user_id", userId.data[0].id)
        .eq("is_present", false)
        .eq("course_id", courseId.data[0].id);

    res.send("" + absentCount.count);
});

// POST Requests
router.post("/register", async (req, res) => {
    //sign up the user for authentication
    let { data, error } = await supabase.auth.signUp(req.body);

    if (error) {
        res.send(error);
    } else {
        //add it with the picture path
        await supabase.from("Users").insert([
            {
                id: data.user.id,
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                r_number: req.body.r_number,
                email: req.body.email,
                picture_path: req.body.image.slice(23),
            },
        ]);

        res.sendStatus(200);
    }
});

router.post("/login", async (req, res) => {
    const { data, error } = await supabase.auth.signInWithPassword(req.body);

    if (error) return res.send(error);
    return res.send(data.session.user.id);
});

router.post("/logout", async (req, res) => {
    res.send(await supabase.auth.signOut());
});

router.post("/joinCourse", async (req, res) => {
    res.send(
        await supabase.from("PeopleInCourse").insert([
            {
                user_id: req.body.user_id,
                course_id: req.body.course_id,
            },
        ])
    );
});

router.post("/checkIn", async (req, res) => {
    const userObj = await supabase
        .from("Users")
        .select("*")
        .eq("r_number", req.body.r_number);

    const image1 = userObj.data[0].picture_path;
    const image2 = req.body.image.slice(23);
    const key = process.env.MXFACE_KEY;

    const response = await axios
        .post(
            process.env.MXFACE_REQ_URL,
            {
                encoded_image1: image1,
                encoded_image2: image2,
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    subscriptionkey: key,
                },
            }
        )
        .then((response) => response.data.matchedFaces[0])
        .catch((error) => error.response);

    res.send(response);
});

export default router;
