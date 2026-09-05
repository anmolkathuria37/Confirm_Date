
const express = require("express");
const jwt = require("jsonwebtoken");

const router = express.Router();


// Admin Login
router.post("/login", async (req, res) => {

    try {

        const { username, password } = req.body;

        // Check credentials
        if (
            username !== process.env.ADMIN_USERNAME ||
            password !== process.env.ADMIN_PASSWORD
        ) {
            return res.status(401).json({
                success: false,
                message: "Invalid username or password",
            });
        }


        // Create JWT token
        const token = jwt.sign(
            {
                username: username,
                role: "admin",
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "2h",
            }
        );


        res.status(200).json({
            success: true,
            message: "Admin login successful ❤️",
            token,
        });


    } catch (error) {

        console.error("Admin login error:", error);

        res.status(500).json({
            success: false,
            message: "Server error",
        });

    }

});


module.exports = router;

