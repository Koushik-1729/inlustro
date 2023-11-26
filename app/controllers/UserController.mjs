import { User } from "../schema/Schemas.mjs";
import bcrypt from 'bcrypt';
import nodemailer from 'nodemailer';
import { body, validationResult } from 'express-validator';

async function registerUser(req, res) {
  try {
    await Promise.all([
      body('Email').isEmail().withMessage('Invalid email format').run(req),
      body('Password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters long').run(req),
    ]);

    const errors = validationResult(req);
    if (!errors.isEmpty()) { 
      return res.status(400).json({ errors: errors.array() });
    }
    const { UserID, FirstName, LastName, Email, Password, Role, TimeZone } = req.body;
    console.log('Request Body:', req.body);
    console.log('Password:', Password);

    const existingUser = await User.findOne({ Email });

    if (existingUser) {
      return res.status(400).json({ error: 'User with this email already exists.' });
    }

    const saltRounds = 15;
    const hashedPassword = await bcrypt.hash(Password, saltRounds);
    const newUser = new User({
      UserID, 
      FirstName,
      LastName,
      Email,
      PasswordHash: hashedPassword,
      Role,
      TimeZone,
    });

    await newUser.save();

    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not register the user.' });
  }
}

async function authenticateUser(req, res) {
  try {
  
    await Promise.all([
      body('Email').isEmail().withMessage('Invalid email format').run(req),
      body('Password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters long').run(req),
    ]);

    const errors = validationResult(req);
    if (!errors.isEmpty()) { 
      return res.status(400).json({ errors: errors.array() });
    }

  
    const { Email, Password } = req.body;

    
    const user = await User.findOne({ Email });

    if (!user) {
      return res.status(401).json({ error: 'User not found.' });
    }


    const passwordMatch = await bcrypt.compare(Password, user.PasswordHash);

    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid password.' });
    }

    
    res.json({ message: 'Authentication successful.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not authenticate the user.' });
  }
}

async function updateUser(req, res) {
  try {
    const { UserId } = req.params;
    const { FirstName, LastName, Email, Role, TimeZone } = req.body;

  
    const user = await User.findById(UserId);

    if (!user) {
      return res.status(404).json({ error: 'User not found.' });
    }


    user.FirstName = FirstName;
    user.LastName = LastName;
    user.Email = Email;
    user.Role = Role;
    user.TimeZone = TimeZone;

    await user.save();

    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not update user information.' });
  }
}


// function generateOTP() {
//   return Math.floor(1000 + Math.random() * 9000).toString();
// }

// // Store OTPs temporarily (in-memory or a database) for validation
// const otpStorage = new Map();


// async function sendOTP(email, otp) {
//   // Create a nodemailer transporter for sending emails (configure it based on your email service)
//   const transporter = nodemailer.createTransport({
//     service: 'stmp',
//     auth: {
//       user: 'koushojjhvgvhbj',
//       pass: 5468754',
//     },
//   });

//   const mailOptions = {
//     from: 'koushik.yeruva02@gmail.com',
//     to: email,
//     subject: 'Password Change OTP',
//     text: `Your OTP for password change is: ${otp}`,
//   };

 
//   await transporter.sendMail(mailOptions);
// }

async function changePassword(req, res) {
  try {
    const { UserId } = req.params;
    const { CurrentPassword, NewPassword, OTP } = req.body;

    const user = await User.findById(UserId);

    if (!user) {
      return res.status(404).json({ error: 'User not found.' });
    }
    const passwordMatch = await bcrypt.compare(CurrentPassword, user.PasswordHash);

    if (!passwordMatch) {
      return res.status(401).json({ error: 'Current password is incorrect.' });
    }

    
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(NewPassword, saltRounds);

    
    user.PasswordHash = hashedPassword;

    await user.save();

    
    otpStorage.delete(user.Email);

    res.json({ message: 'Password changed successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not change the password.' });
  }
}

async function deleteUser(req, res) {
  try {
    const { UserId } = req.params;

    const deletedUser = await User.findByIdAndRemove(UserId);

    if (!deletedUser) {
      return res.status(404).json({ error: 'User not found.' });
    }

    res.json({ message: 'User deleted successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not delete the user.' });
  }
}

async function getAllUsers(req, res) {
  try {
    const { page, limit, filter } = req.query;
    
    const pageOptions = {
      page: parseInt(page, 10) || 1,
      limit: parseInt(limit, 10) || 10, 
    };

    const filterOptions = filter ? { $text: { $search: filter } } : {};

    const users = await User.find(filterOptions)
      .skip((pageOptions.page - 1) * pageOptions.limit)
      .limit(pageOptions.limit);

    const totalCount = await User.countDocuments(filterOptions);

    const totalPages = Math.ceil(totalCount / pageOptions.limit);

    res.json({
      users,
      page: pageOptions.page,
      limit: pageOptions.limit,
      totalPages,
      totalCount,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not fetch users.' });
  }
}


async function getUserById(req, res) {
  try {
    const { UserId } = req.params;
    const user = await User.findById(UserId);

    if (!user) {
      return res.status(404).json({ error: 'User not found.' });
    }

    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not fetch the user.' });
  }
}

async function deleteUserById(req, res) {
  try {
    const { UserId } = req.params;

    const deletedUser = await User.findByIdAndRemove(UserId);

    if (!deletedUser) {
      return res.status(404).json({ error: 'User not found.' });
    }

    res.json({ message: 'User deleted successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not delete the user.' });
  }
}

export {
  registerUser,
  authenticateUser,
  updateUser,
  changePassword,
  getAllUsers,
  getUserById,
  deleteUserById,
};
