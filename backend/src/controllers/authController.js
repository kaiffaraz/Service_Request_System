const db = require("../config/db");

const bcrypt = require("bcryptjs");

const generateToken = require("../utils/generateToken");


const registerUser = async (req, res) => {

    try {

        const { name, email, password } = req.body;


        // CHECK EMPTY FIELDS
        if (!name || !email || !password) {

            return res.status(400).json({
                message: "All fields are required"
            });

        }


        // CHECK IF USER ALREADY EXISTS
        const checkUserQuery =
            "SELECT * FROM users WHERE email = ?";


        db.query(checkUserQuery, [email], async (error, result) => {

            if (error) {

                return res.status(500).json({
                    message: "Database Error",
                    error
                });

            }


            // USER EXISTS
            if (result.length > 0) {

                return res.status(400).json({
                    message: "User already exists"
                });

            }


            // HASH PASSWORD
            const hashedPassword =
                await bcrypt.hash(password, 10);


            // INSERT USER
            const insertUserQuery = `
                INSERT INTO users(name, email, password)
                VALUES (?, ?, ?)
            `;


            db.query(

                insertUserQuery,

                [name, email, hashedPassword],

                (error, result) => {

                    if (error) {

                        return res.status(500).json({
                            message: "Database Error",
                            error
                        });

                    }


                    // SUCCESS RESPONSE
                    res.status(201).json({

                        message: "User registered successfully",

                        token: generateToken(result.insertId)

                    });

                }

            );

        });

    } catch (error) {

        res.status(500).json({
            message: "Server Error"
        });

    }

};


const loginUser = (req, res) => {

    try {

        const { email, password } = req.body;


        // VALIDATION
        if (!email || !password) {

            return res.status(400).json({
                message: "Email and password are required"
            });

        }


        // CHECK USER
        const query =
            "SELECT * FROM users WHERE email = ?";


        db.query(query, [email], async (error, result) => {

            if (error) {

                return res.status(500).json({
                    message: "Database Error",
                    error
                });

            }


            // USER NOT FOUND
            if (result.length === 0) {

                return res.status(401).json({
                    message: "Invalid email or password"
                });

            }


            const user = result[0];


            // COMPARE PASSWORD
            const isMatch =
                await bcrypt.compare(password, user.password);


            // WRONG PASSWORD
            if (!isMatch) {

                return res.status(401).json({
                    message: "Invalid email or password"
                });

            }


            // LOGIN SUCCESS
            res.status(200).json({

                message: "Login successful",

                token: generateToken(user.id),

                user: {

                    id: user.id,
                    name: user.name,
                    email: user.email

                }

            });

        });

    } catch (error) {

        res.status(500).json({
            message: "Server Error"
        });

    }

};


module.exports = {

    registerUser,
    loginUser

};