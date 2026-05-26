import jwt from "jsonwebtoken";

const protect = (req, res, next) => {

    try {

        let token;

        // CHECK AUTHORIZATION HEADER
        if (
            req.headers.authorization &&
            req.headers.authorization.startsWith("Bearer")
        ) {

            // GET TOKEN
            token =
              req.headers.authorization.split(" ")[1];

            // VERIFY TOKEN
            const decoded = jwt.verify(
                token,
                process.env.JWT_SECRET
            );

            // SAVE USER DATA
            req.user = decoded;

            next();

        } else {

            return res.status(401).json({
                message: "Not authorized, token missing"
            });

        }

    } catch (error) {

        return res.status(401).json({
            message: "Invalid token"
        });

    }

};

export default protect;