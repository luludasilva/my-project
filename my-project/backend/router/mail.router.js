const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');


/*----------------------funcion de envio de mail fake para development---------------------------- */

//-------------------post-------------------//
router.post('/', async (req, res) => {
    const formData = req.body;

    try {
        const testAccount = await nodemailer.createTestAccount();

        const transporter = nodemailer.createTransport({
            host: testAccount.smtp.host,
            port: testAccount.smtp.port,
            secure: testAccount.smtp.secure,
            auth: {
                user: testAccount.user,
                pass: testAccount.pass,
            },
        });

        const info = await transporter.sendMail({
            from: `${formData.email}`,
            to: 'email@delCliente.com',
            subject: `Test Email from ${formData.name}`,
            text: `${formData.message}`,
        });

        console.log('Test Email URL:', nodemailer.getTestMessageUrl(info));
        
        res.json({ message: 'Test email sent successfully', testMessageUrl: nodemailer.getTestMessageUrl(info) });
    } catch (error) {
        console.error('Error sending test email:', error);

        res.status(500).json({ error: 'Error sending test email' });
    }
});


/*------------------------funcion de envio de mail para produccion---------------------------- 
    router.get('/', async (req, res) => {
        res.send('ok');
    });
    //-------------------post-------------------//
    router.post('/', async (req, res) => {
        const formData = req.body;

        const transporter = nodemailer.createTransport({
            service: '', 
            auth: {
                user: '', 
                pass: '', 
            },
        });

        const mailOptions = {
            from: '',
            to: '',
            subject: 'nuevo contacto',
            text: `
            Name: ${formData.name}
            Email: ${formData.email}
            Message: ${formData.message}
        `,
        };

        try {
            await transporter.sendMail(mailOptions);

            console.log('Email sent');
            res.json({ message: 'Form data received and email sent successfully' });
        } catch (error) {
            console.error('Error sending email:', error);
            res.status(500).json({ error: 'Error sending email' });
        }

    });
*/


module.exports = router