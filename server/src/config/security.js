// FILE: server/src/config/security.js

const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

/**
 * Security middleware configuration.
 */
const securityMiddleware = (app) => {
    // 1. Helmet for security headers
    app.use(helmet());

    // 2. Global Rate Limiting
    const globalLimiter = rateLimit({
        windowMs: 15 * 60 * 1000, // 15 minutes
        max: 100, // Limit each IP to 100 requests per windowMs
        message: {
            success: false,
            message: 'Too many requests from this IP, please try again after 15 minutes'
        },
        standardHeaders: true,
        legacyHeaders: false
    });

    // 3. Login specific rate limiting (Stricter)
    const loginLimiter = rateLimit({
        windowMs: 15 * 60 * 1000,
        max: 5, // Limit each IP to 5 login attempts
        message: {
            success: false,
            message: 'Too many login attempts, please try again after 15 minutes'
        }
    });

    app.use('/api', globalLimiter);
    app.use('/api/auth/login', loginLimiter);
};

module.exports = securityMiddleware;
