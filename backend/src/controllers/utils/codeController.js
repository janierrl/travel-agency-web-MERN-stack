const nodemailer = require('nodemailer');
const Code = require('../../models/utils/Code.js');
const { USER_EMAIL, PASSWORD_EMAIL } = require ('../../utils/configs/config.js');
const createAccount = require('../../utils/templates/createAccount.js');
const recoverAccount = require('../../utils/templates/recoverAccount.js');

async function verifyEmail(req, res, next) {
    const isRecoverAccount = req.body.isRecoverAccount;
    let email, username;

    if (isRecoverAccount === false) {
        const { username: user, email: useremail } = req.body;
        const verifyUser = await User.findOne({username: user});
        const verifyUserEmail = await User.findOne({email: useremail});
        const verifyCodeEmail = await Code.findOne({email: useremail});

        if (verifyUser) { return res.status(400).send("El usuario ya existe"); }
        if (verifyUserEmail) { return res.status(400).send("El correo ya existe"); }
        if (verifyCodeEmail) { return res.status(400).send("Ya ha sido enviado el correo de verificación a este correo"); }

        username = user;
        email = useremail;
    } else {
        email = req.body.email;

        const verifyCodeEmail = await Code.findOne({email: email});
        if (verifyCodeEmail) { return res.status(400).send("Ya ha sido enviado el correo de verificación a este correo"); }

        const verifyUser = await User.findOne({email: email});
        if (!verifyUser) { return res.status(400).send("El correo no existe"); }

        username = verifyUser.username;
    }
    
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) { return res.status(400).send('Correo inválido'); }
    
    const codeRandom = Math.floor(Math.random() * 900000) + 100000;
    const verifyEmailHtml = isRecoverAccount ? await recoverAccount(username, codeRandom) : await createAccount(username, codeRandom);

    const code = new Code({ 
        email: email,
        code: codeRandom,
        createAt: new Date()
    });

    await code.save();

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: USER_EMAIL,
            pass: PASSWORD_EMAIL
        }
    });

    const emailOptions = {
        from: USER_EMAIL,
        to: email,
        subject: 'Confirmar dirección de correo electrónico para ConsulToria',
        html: verifyEmailHtml
    };

    transporter.sendMail(emailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Fallo al enviar el correo de verificación');
        } else {
            console.log('Email send: ' + info.response);
            res.status(200).send('Correo de verificación enviado con éxito');
        }
    });
}

async function verifyCode(req, res) {
    const { email, code } = req.body;

    const findCode = await Code.findOne({ email: email, code: code });
    if (!findCode) {
        res.status(400).send('El código es incorrecto');
    } else {
        await Code.deleteOne({ email: email, code: code });
        res.status(200).send('El correo ha sido verificado con éxito');
    }
}

module.exports = {
    verifyEmail,
    verifyCode
};