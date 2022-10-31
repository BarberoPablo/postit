require("dotenv").config();

export const configuration = {
  jwt: {
    accessToken: {
      token: process.env.ACCESS_TOKEN_SECRET,
      expiresIn: "25s",
    },
    refreshToken: {
      token: process.env.REFRESH_TOKEN_SECRET,
    },
  },
};
