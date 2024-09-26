import { User } from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import sendMail, { sendForgotMail } from "../middlewares/sendMail.js";
import TryCatch from "../middlewares/TryCatch.js";

export const register = TryCatch(async (req, res) => {
  const { firstname, lastname, orgnization, email, password } = req.body; // Extract firstname, lastname, and organization

  let user = await User.findOne({ email });

  if (user)
    return res.status(400).json({
      message: "User already exists",
    });

  const hashPassword = await bcrypt.hash(password, 10);

  // Create the new user object
  user = {
    firstname, // Use firstname from req.body
    lastname, // Use lastname from req.body
    orgnization, // Use organization from req.body
    email,
    password: hashPassword,
  };

  const otp = Math.floor(Math.random() * 1000000);

  const activationToken = jwt.sign(
    {
      user,
      otp,
    },
    process.env.Activation_Secret,
    {
      expiresIn: "10m",
    }
  );

  const data = {
    name: firstname, // Assuming 'name' refers to firstname for email purposes
    otp,
  };

  // Send the email with the OTP
  await sendMail(email, "Gangstaa Clothing Brand", data);

  res.status(200).json({
    message: "Otp sent to your email address",
    activationToken,
  });
});

export const verifyUser = TryCatch(async (req, res) => {
  const { otp, activationToken } = req.body;
  console.log(typeof otp, activationToken, "my");
  if (!otp || !activationToken) {
    console.log("No otp");
  }

  const verify = jwt.verify(activationToken, process.env.Activation_Secret);
  console.log(typeof verify.otp, "verify");

  if (!verify)
    return res.status(400).json({
      message: "Otp Expired",
    });

  if (verify.otp !== Number(otp))
    return res.status(400).json({
      message: "Wrong Otp",
    });
  console.log("wrong OTP");

  await User.create({
    firstname: verify.user.firstname,
    lastname: verify.user.lastname,
    orgnization: verify.user.orgnization,
    email: verify.user.email,
    password: verify.user.password,
  });

  res.json({
    message: "User Registered",
  });
});

export const loginUser = TryCatch(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user)
    return res.status(400).json({
      message: "No User with this email",
    });

  const mathPassword = await bcrypt.compare(password, user.password);

  if (!mathPassword)
    return res.status(400).json({
      message: "wrong Password",
    });

  const token = jwt.sign({ _id: user._id }, process.env.Jwt_Sec, {
    expiresIn: "15d",
  });

  res.json({
    message: `Welcome back ${user.name}`,
    token,
    user,
  });
});

export const myProfile = TryCatch(async (req, res) => {
  const user = await User.findById(req.user._id);

  res.json({ user });
});

export const forgotPassword = TryCatch(async (req, res) => {
  const { email } = req.body;

  const user = await User.findOne({ email });

  if (!user)
    return res.status(404).json({
      message: "No User with this email",
    });

  const token = jwt.sign({ email }, process.env.Forgot_Secret);

  const data = { email, token };

  await sendForgotMail("E learning", data);

  user.resetPasswordExpire = Date.now() + 5 * 60 * 1000;

  await user.save();

  res.json({
    message: "Reset Password Link is send to you mail",
  });
});

export const resetPassword = TryCatch(async (req, res) => {
  const decodedData = jwt.verify(req.query.token, process.env.Forgot_Secret);

  const user = await User.findOne({ email: decodedData.email });

  if (!user)
    return res.status(404).json({
      message: "No user with this email",
    });

  if (user.resetPasswordExpire === null)
    return res.status(400).json({
      message: "Token Expired",
    });

  if (user.resetPasswordExpire < Date.now()) {
    return res.status(400).json({
      message: "Token Expired",
    });
  }

  const password = await bcrypt.hash(req.body.password, 10);

  user.password = password;

  user.resetPasswordExpire = null;

  await user.save();

  res.json({ message: "Password Reset" });
});

//  get all users
export const getAllusers = async (req, res) => {
  if (req.user.role !== "admin")
    return res.status(403).json({
      message: "Unauthorized", // condition for checking user role
    });

  try {
    const data = await User.find();
    const userslist = await data;
    res.status(200).send({
      message: "All users data",
      data: userslist,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || error,
      sucess: false,
      error: true,
    });
  }
};

// delete one users

export const deleteOneUser = async (req, res) => {
  if (req.user.role !== "admin")
    return res.status(403).json({
      message: "Unauthorized", // condition for checking user role
    });

  try {
    const userId = req.params.id;
    if (!userId) {
      return res.status(400).json({
        message: "User ID is required",
        success: false,
        error: true,
      });
    }

    const user = await User.findByIdAndDelete(userId);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
        success: false,
        error: true,
      });
    }

    res.json({
      message: "User deleted successfully",
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || "An error occurred",
      success: false,
      error: true,
    });
  }
};

// Registration API

// export const register = TryCatch(async(req, res) => {
//     const { email, name, surname, password, phone, address } = req.body;

//     // Check if user already exists
//     let user = await User.findOne({ email });
//     if (user) {
//         return res.status(400).json({
//             message: "User already exists",
//         });
//     }

//     // Hash the password
//     const hashPassword = await bcrypt.hash(password, 10);

//     // Create a new user
//     user = await User.create({
//         name,
//         email,
//         password: hashPassword,
//     });

//     // Create or update the user profile
//     let userProfile = await UserProfile.findOne({ email });

//     if (userProfile) {
//         // Update existing profile
//         userProfile.surname = surname;
//         userProfile.phone = phone;
//         userProfile.address = address;
//         await userProfile.save();
//     } else {
//         // Create a new profile
//         userProfile = new UserProfile({
//             name,
//             surname,
//             email,
//             phone,
//             address,
//         });
//         await userProfile.save();
//     }

//     // Return success response
//     res.status(201).json({
//         message: "User registered and profile created successfully",
//     });
// });

export const updateRole = async (req, res) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(403).json({
        message: "This is admin route",
      });
    }

    const id = req.params.id;

    const user = await User.findOne({ _id: id });

    if (user.role === "admin") {
      user.role = "user";

      await sendMail(
        user.email,
        "Role Updated",
        "Your Role is Updated for the gangstaa Project"
      );

      await user.save();

      return res.json({
        message: "user Role updated",
      });
    }

    if (user.role === "user") {
      user.role = "admin";

      await sendMail(
        user.email,
        "Role Updated",
        "Your Role is Updated for the gangstaa Project"
      );

      await user.save();

      return res.json({
        message: "user Role updated",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};