// middleware/auth.js
import jwt from 'jsonwebtoken';

export const verifyToken = (handler) => async (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, 'your_jwt_secret');
    req.user = decoded;
    return handler(req, res);
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};
