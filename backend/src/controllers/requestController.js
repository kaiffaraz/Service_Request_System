import db from "../config/db.js";



// ============================================
// CREATE SERVICE REQUEST
// ============================================

export const createRequest = (req, res) => {

    try {

        const {

            title,
            description,
            category,
            address,
            preferred_time

        } = req.body;


        // VALIDATION
        if (

            !title ||
            !description ||
            !category ||
            !address ||
            !preferred_time

        ) {

            return res.status(400).json({

                message: "All fields are required"

            });

        }


        // INSERT QUERY
        const query = `

            INSERT INTO service_requests
            (
                user_id,
                title,
                description,
                category,
                address,
                preferred_time
            )

            VALUES (?, ?, ?, ?, ?, ?)

        `;


        db.query(

            query,

            [

                req.user.id,

                title,
                description,
                category,
                address,
                preferred_time

            ],

            (error, result) => {

                if (error) {

                    return res.status(500).json({

                        message: "Database Error",

                        error

                    });

                }


                res.status(201).json({

                    message:
                        "Service request created successfully"

                });

            }

        );

    } catch (error) {

        res.status(500).json({

            message: "Server Error"

        });

    }

};



// ============================================
// GET ALL SERVICE REQUESTS
// ============================================

export const getRequests = (req, res) => {

    try {

        const query = `

            SELECT * FROM service_requests

            WHERE user_id = ?

            ORDER BY created_at DESC

        `;


        db.query(

            query,

            [req.user.id],

            (error, result) => {

                if (error) {

                    return res.status(500).json({

                        message: "Database Error",

                        error

                    });

                }


                res.status(200).json(result);

            }

        );

    } catch (error) {

        res.status(500).json({

            message: "Server Error"

        });

    }

};



// ============================================
// UPDATE REQUEST STATUS
// ============================================

export const updateRequestStatus = (req, res) => {

    try {

        const { status } = req.body;

        const requestId = req.params.id;


        // VALIDATION
        if (!status) {

            return res.status(400).json({

                message: "Status is required"

            });

        }


        // UPDATE QUERY
        const query = `

            UPDATE service_requests

            SET status = ?

            WHERE id = ?

        `;


        db.query(

            query,

            [status, requestId],

            (error, result) => {

                if (error) {

                    return res.status(500).json({

                        message: "Database Error",

                        error

                    });

                }


                res.status(200).json({

                    message:
                        "Request status updated successfully"

                });

            }

        );

    } catch (error) {

        res.status(500).json({

            message: "Server Error"

        });

    }

};



// ============================================
// DELETE REQUEST
// ============================================

export const deleteRequest = (req, res) => {

    try {

        const requestId = req.params.id;


        const query = `

            DELETE FROM service_requests

            WHERE id = ?

        `;


        db.query(

            query,

            [requestId],

            (error, result) => {

                if (error) {

                    return res.status(500).json({

                        message: "Database Error",

                        error

                    });

                }


                res.status(200).json({

                    message:
                        "Request deleted successfully"

                });

            }

        );

    } catch (error) {

        res.status(500).json({

            message: "Server Error"

        });

    }

};