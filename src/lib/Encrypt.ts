// Bcryptjs 
import bcrypt from "bcryptjs"; 

export const encrypt = (dataString: string) => {
    const salt = bcrypt.genSaltSync(Number(process.env.PASSWORD_SECRET!));
    return bcrypt.hashSync(dataString, salt);
}

export const verifyHash = (dataString: string, hashString: string) => {
    const comparasionResult = bcrypt.compareSync(dataString, hashString);
    if(comparasionResult) return true;
    else return false;
}