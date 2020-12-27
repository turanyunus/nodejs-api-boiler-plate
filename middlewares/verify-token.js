const jwt  = require('jsonwebtoken');

module.exports = (req, res, next) => {
    console.log(req.body);

    const token = req.body.token || req.query.token || req.headers['x-access-token'] || req.cookies.token;
    if(token){

        jwt.verify(token, req.app.get('api_secret_key'), (err, decoded) => {

            if(err){
                res.json({
                    status  : false,
                    message : "Token başarısız."
                });
            }else{
                req.decode = decoded;
                next();
            }

        });

    }else{
        res.json({
            status  : false,
            message : "Token bulunamadı."
        });
    }

}