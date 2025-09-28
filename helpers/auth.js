import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

const auth = function (req, res, next) {

    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({message: 'Acesso Negado'});
    }

    try{
        const tokenpuro = token.replace('Bearer ', '');
        const decoded = jwt.verify(tokenpuro, JWT_SECRET);
        req.userId = decoded.id;
        next();
    }catch(err){
        console.log(err)
        return res.status(401).json({message: 'Acesso Negado: ' + err});
    }

}

export default auth