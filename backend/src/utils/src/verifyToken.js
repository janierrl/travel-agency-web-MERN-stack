const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require ('../../utils/configs/config.js');

function verifyToken(req, res, next) {
    const token = req.headers['x-access-token'];
    if (!token) {
        return res.status(401).json({
            auth: false,
            message: 'No token provided'
        });
    }

    const decoded = jwt.verify(token, SECRET_KEY);
    res.status(200).send(decoded.id);
}

module.exports = verifyToken;