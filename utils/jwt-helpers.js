import jwt from 'jsonwebtoken';

function jwtTokens({user_id, user_name, user_email}) {
    const user = {user_id, user_name, user_email};
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn : '15d'});
    const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, {expiresIn : '30d'});
    return ({accessToken, refreshToken});

}

export {jwtTokens};