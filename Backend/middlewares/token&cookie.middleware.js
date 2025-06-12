import jwt from 'jsonwebtoken';



export const generateTokenandSetCookies = (user, res, next) => {
    const token = jwt.sign({ _id: user._id }, process.env.SECRET_KEY, { expiresIn: "1d" });
    res.cookie("jwt", token, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 });
    return token;
}