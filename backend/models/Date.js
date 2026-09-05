
const mongoose = require("mongoose");

const dateSchema = new mongoose.Schema(
    {
        date: {
            type: String,
            required: true,
        },

        time: {
            type: String,
            required: true,
        },

        place: {
            type: String,
            required: true,
        },

        activity: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const DateModel = mongoose.model("Date", dateSchema);

module.exports = DateModel;

