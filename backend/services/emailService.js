
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",

    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

const sendDateConfirmationEmail = async (dateData) => {

    const { date, time, place, activity } = dateData;

    const mailOptions = {
        from: `"Date Scheduler ❤️" <${process.env.EMAIL_USER}>`,
        to: process.env.ADMIN_EMAIL,

        subject: "💕 New Date Confirmed!",

        html: `
            <div style="
                font-family: Arial, sans-serif;
                max-width: 600px;
                margin: auto;
                padding: 30px;
                border-radius: 20px;
                border: 1px solid #eee;
            ">

                <h1 style="text-align:center;">
                    IT'S A DATE!!! 🥹❤️
                </h1>

                <p style="text-align:center;">
                    A new date has been confirmed!
                </p>

                <div style="
                    margin-top: 25px;
                    padding: 20px;
                    border-radius: 15px;
                    background: #fafafa;
                ">

                    <p>📅 <strong>Date:</strong> ${date}</p>

                    <p>⏰ <strong>Time:</strong> ${time}</p>

                    <p>📍 <strong>Place:</strong> ${place}</p>

                    <p>✨ <strong>Plan:</strong> ${activity}</p>

                </div>

                <p style="text-align:center; margin-top:25px;">
                    Someone just said YES ❤️
                </p>

            </div>
        `,
    };

    await transporter.sendMail(mailOptions);

    console.log("Confirmation email sent successfully ❤️");
};

module.exports = sendDateConfirmationEmail;

