import jwt from 'jsonwebtoken';

export const generateVerificationAndSetCookies = (res, userId) => {
        const token = jwt.sign({ id: userId }, process.env.JWT_SECRET, {
            expiresIn: '1d',
        });
        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 7 * 60 * 60 * 24 * 1000,
        });

        return token;
        
    };

