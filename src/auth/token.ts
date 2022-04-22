import {sign} from "jsonwebtoken"; 


// Access Token  
export const generateAccessToken = (username: string, email: string, expirationTimeInHours: number): string => {
    const user = { username, email};
    const accessToken = sign(user, process.env.ACCESS_TOKEN_SECRET!, {expiresIn: (expirationTimeInHours*3600).toString()+'s'});
    return accessToken;
}

// Refresh  Token  
export const generateRefreshToken = (username: string, email: string): string => {
    const user = { username, email};
    const refreshToken = sign(user, process.env.REFRESH_TOKEN_SECRET!);
    return refreshToken;
}

