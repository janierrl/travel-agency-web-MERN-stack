const jwt = require('jsonwebtoken');
const User = require('../../models/utils/User.js');
const { SECRET_KEY } = require ('../../utils/configs/config.js');

async function signup(req, res, next) {
    const { username, email, password } = req.body;

    const user = new User({
        username: username,
        email: email,
        password: password
    });

    user.password = await user.encryptPassword(user.password);
    await user.save();

    const token = jwt.sign({ id: user._id }, SECRET_KEY, { expiresIn: 60 * 60 * 24 });
    res.json({ auth: true, token })
}

async function me(req, res, next) {
    const userId = req.body;
    const user = await User.findById(userId);
    
    if (!user) { return res.status(404).send('Usuario no encontrado'); }
    res.json(user);
}

async function sigin(req, res, next) {
    const { username, password } = req.body;
    const user = await User.findOne({ username: username });
    
    if (!user) { return res.status(404).send("Usuario incorrecto"); }
    const validPassword = await user.validatePassword(password);
    
    if (!validPassword) { return res.status(404).send("Contraseña incorrecta"); }
    const token = jwt.sign({ id: user._id }, SECRET_KEY, { expiresIn: 60 * 60 * 24 });

    res.json({ auth: true, token });
}

async function recoverAccount(req, res, next) {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });

    if (!user) { res.status(400).send('El correo no existe'); }
    user.password = await user.encryptPassword(password);
    await user.save();

    res.status(200).send('La contraseñan ha sido modificada con éxito');
}

module.exports = {
    signup,
    me,
    sigin,
    recoverAccount
};