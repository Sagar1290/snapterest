import jwt from "jsonwebtoken";

export const verifyToken = (token) => {
  try {
    const res = jwt.verify(token, process.env.JWT_SECRET);
    return res;
  } catch (error) {
    throw new Error("Invalid or expired token");
  }
};
