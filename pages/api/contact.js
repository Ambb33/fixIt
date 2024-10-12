import nodemailer from "nodemailer";

export default async function ContactAPI(req, res) {
    const { name, email, message } = req.body;
    
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const data = {
        name, email, message
    };
    const user = process.env.user;

    const transporter = nodemailer.createTransport({
        host: "host.email.com",
        port: 587,
        secure: false, // use STARTTLS
        auth: {
            user: process.env.user, // your email address
            pass: process.env.pass, // app-specific password
        },
        tls: {
            rejectUnauthorized: false,
        },
    });
    
    
    try {
        // Send the contact form submission email
        await transporter.sendMail({
            from: user,
            to: "e-mail adress",
            replyTo: email,
            subject: `Contact form submission from ${name}`,
            html: `
                <p>Name: ${name}</p>
                <p>Email: ${email}</p>
                <p>Message: ${message}</p>
            `,
        });

        // Send the confirmation email to the client
        await transporter.sendMail({
            from: user,
            to: email,
            subject: "Confirmation: Your message was received",
            html: `
                <p>Hello ${name},</p>
                <p>Thank you for reaching out. We have received your message and will get back to you within 5 working days.</p>
                <p>Best regards,<br>Your Company</p>
                <br>
                <p>Your message:</p>
                <p>"${message}"</p>
            `,
        });

        return res.status(200).json({ message: "success" });
    } catch (error) {
        console.log('User:', process.env.user);
    console.log('Pass:', process.env.pass);

        console.log(error);
        res.status(500).json({
            message: "Could not send the email",
            error: error.message, // Add this line to include the error message in the response
        });
    }
}
