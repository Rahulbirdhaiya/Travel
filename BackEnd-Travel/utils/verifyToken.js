import jwt from 'jsonwebtoken'

const verifyToken = (req, res, next) => {
  const token = req.cookies.accessToken;
  if (!token) {
    return res.status(401).json({ success: false, message: "Access denied. You're not authorized" });
  }

  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(401).json({ success: false, message: 'Invalid token' });
    }
    req.user = user;
    next();
  });
};

export const verifyUser = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.role === 'admin') {
      next();
    } else {
      res.status(401).json({ success: false, message: "You're not authorized to access this resource" });
    }
  });
};

export const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.role === 'admin') {
      next();
    } else {
      res.status(401).json({ success: false, message: "You're not authorized to access this resource" });
    }
  });
};