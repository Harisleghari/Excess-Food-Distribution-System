const jwtToken = (user, res, status) => {
    const token = user.getJwtToken();
    const id = user._id;
    const options = {
        httpOnly: true,
        expires: new Date(Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000)
    }


    res.status(status).cookie('jwt', token, options).json({ success: true, token, user})
}

module.exports = jwtToken;