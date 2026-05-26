import db from "../config/db.js";
import bcrypt from "bcryptjs";
import generateToken from "../utils/generateToken.js";

export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const checkUserQuery =
      "SELECT * FROM users WHERE email = ?";

    db.query(checkUserQuery, [email], async (error, result) => {

      if (error) {
        return res.status(500).json({
          message: "Database Error",
          error,
        });
      }

      if (result.length > 0) {
        return res.status(400).json({
          message: "User already exists",
        });
      }

      const hashedPassword =
        await bcrypt.hash(password, 10);

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
              error,
            });
          }

          res.status(201).json({
            message: "User registered successfully",
            token: generateToken(result.insertId),
          });

        }
      );
    });

  } catch (error) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};

export const loginUser = (req, res) => {
  try {

    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required",
      });
    }

    const query =
      "SELECT * FROM users WHERE email = ?";

    db.query(query, [email], async (error, result) => {

      if (error) {
        return res.status(500).json({
          message: "Database Error",
          error,
        });
      }

      if (result.length === 0) {
        return res.status(401).json({
          message: "Invalid email or password",
        });
      }

      const user = result[0];

      const isMatch =
        await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(401).json({
          message: "Invalid email or password",
        });
      }

      res.status(200).json({
        message: "Login successful",
        token: generateToken(user.id),

        user: {
          id: user.id,
          name: user.name,
          email: user.email,
        },
      });

    });

  } catch (error) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};