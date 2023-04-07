/**
 * @swagger
 * components:
 *   schemas:
 *     Course:
 *       type: object
 *       required:
 *         - course_name
 *         - professor_name
 *       properties:
 *         id:
 *           type: int
 *           description: Auto-generated unique identifier
 *         course_name:
 *           type: string
 *           description: The name of the course available
 *         professor_name:
 *           type: string
 *           description: Then name of the professor associated with the course
 *       example:
 *         id: 1
 *         course_name: Introduction to Computer Science
 *         professor_name: Professor Smith
 */

import express from "express";

const router = express.Router();

router.use((req, res, next) => {
    next();
});

router.get("/getCourses", async (req, res) => {
    const userId = await supabase
        .from("Users")
        .select("id")
        .eq("email", req.body.email);

    const courses = await supabase
        .from("PeopleInCourse")
        .select(
            `
                Course (
                course_name,
                professor_name
            )
        `
        )
        .eq("user_id", userId.data[0].id);

    res.send(courses.data);
});

export default router;
