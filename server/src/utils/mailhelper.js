
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.MAIL,
        pass: process.env.PASSWORD,
    },
});

exports.sendMail = async (receiverMail) => {
    try {
        const info = await transporter.sendMail({
            from: process.env.MAIL,
            to: receiverMail,
            subject: "Your Order Has Been Completed Successfully",

            html: `
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Order Confirmation</title>
            </head>

            <body style="margin:0; padding:0; background-color:#f4f4f4; font-family:Arial,sans-serif;">

                <div style="max-width:600px; margin:30px auto; background-color:#ffffff; border-radius:10px; overflow:hidden;">

                    <div style="background-color:#198754; padding:30px; text-align:center;">
                        <h1 style="color:#ffffff; margin:0;">
                            Order Completed!
                        </h1>
                    </div>

                    <div style="padding:30px; color:#333333;">

                        <h2>Hello!</h2>

                        <p style="font-size:16px; line-height:1.6;">
                            Great news! Your order has been successfully completed.
                            Thank you for shopping with StyleMatch.
                        </p>

                        <div style="background-color:#f0f8f3; padding:20px; border-radius:8px; text-align:center; margin:25px 0;">

                            <h2 style="color:#198754; margin:0;">
                                Your Order is Completed
                            </h2>

                            <p style="color:#555555; margin-bottom:0;">
                                We hope you enjoy your purchase!
                            </p>

                        </div>

                        <p style="font-size:15px; line-height:1.6;">
                            If you have any questions or need assistance,
                            please feel free to contact our support team.
                        </p>

                        <p style="font-size:16px; line-height:1.6;">
                            Thank you for choosing us!<br><br>
                            <b>StyleMatch Team</b>
                        </p>

                    </div>

                    <div style="background-color:#f4f4f4; padding:18px; text-align:center;">

                        <p style="font-size:12px; color:#777777; margin:0;">
                            &copy; 2026 StyleMatch. All rights reserved.
                        </p>

                    </div>

                </div>

            </body>
            </html>
            `,
        });

        console.log("Message sent:", info.messageId);

    } catch (err) {
        console.error("Error while sending mail:", err);
    }
};
