
const express = require("express");
const DateModel = require("../models/Date");

const protect = require("../middleware/authMiddleware");

const router = express.Router();

// Create a new date
router.post("/", async (req, res) => {
    try {
        const { date, time, place, activity } = req.body;

        // Check if all fields are provided
        if (!date || !time || !place || !activity) {
            return res.status(400).json({
                success: false,
                message: "All fields are required",
            });
        }

        // Create new date
        const newDate = new DateModel({
            date,
            time,
            place,
            activity,
        });

        // Save to MongoDB
        const savedDate = await newDate.save();

        res.status(201).json({
            success: true,
            message: "Date scheduled successfully ❤️",
            data: savedDate,
        });

    } catch (error) {
        console.error("Error scheduling date:", error);

        res.status(500).json({
            success: false,
            message: "Server error",
        });
    }
});


// Get all scheduled dates
router.get("/",protect, async (req, res) => {
    try {
        const dates = await DateModel.find().sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            count: dates.length,
            data: dates,
        });

    } catch (error) {
        console.error("Error fetching dates:", error);

        res.status(500).json({
            success: false,
            message: "Server error",
        });
    }
});


router.delete("/:id", protect, async (req, res) => {
    try {

        const deletedDate = await DateModel.findByIdAndDelete(
            req.params.id
        )

        if (!deletedDate) {
            return res.status(404).json({
                success: false,
                message: "Date not found",
            })
        }

        res.status(200).json({
            success: true,
            message: "Date deleted successfully 🗑️",
            data: deletedDate,
        })

    } catch (error) {

        console.error("Error deleting date:", error)

        res.status(500).json({
            success: false,
            message: "Server error",
        })
    }
})


router.put("/:id", protect, async (req, res) => {
    try {

        const { date, time, place, activity } = req.body

        if (!date || !time || !place || !activity) {
            return res.status(400).json({
                success: false,
                message: "All fields are required",
            })
        }

        const updatedDate = await DateModel.findByIdAndUpdate(
            req.params.id,
            {
                date,
                time,
                place,
                activity,
            },
            {
                new: true,
                runValidators: true,
            }
        )

        if (!updatedDate) {
            return res.status(404).json({
                success: false,
                message: "Date not found",
            })
        }

        res.status(200).json({
            success: true,
            message: "Date updated successfully ❤️",
            data: updatedDate,
        })

    } catch (error) {

        console.error("Error updating date:", error)

        res.status(500).json({
            success: false,
            message: "Server error",
        })
    }
})







module.exports = router;

