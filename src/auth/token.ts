import {sign} from "jsonwebtoken"; 

// Access Token  
export const generateAccessToken = (username: string, email: string, role: string, expirationTimeInHours: number): string => {
    const user = { username, email, role};
    const accessToken = sign(user, process.env.ACCESS_TOKEN_SECRET!, {expiresIn: (expirationTimeInHours*3600).toString()+'s'});
    return accessToken;
}

// Refresh  Token  
export const generateRefreshToken = (username: string, email: string, role: string): string => {
    const user = { username, email, role};
    const refreshToken = sign(user, process.env.REFRESH_TOKEN_SECRET!);
    return refreshToken;
}

