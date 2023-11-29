const jwt = require('jsonwebtoken');
const authenticationMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    console.log(req.headers);
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        throw new CustomAPIError('No token provided', 400)
    }
    const token = authHeader.split(' ')[1];
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECERT);
        // console.log(decoded);
        const { id, username } = decoded;
        req.user = { id, username };
        next();
    } catch (error) {
        throw new CustomAPIError('Not authorized to access this route', 401)
    }
}

module.exports = authenticationMiddleware;