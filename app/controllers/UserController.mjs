import { User } from "../schema/Schemas.mjs";
import bcrypt from 'bcrypt';

// Function to register a new user
async function registerUser(req, res) {
  try {
    

    const { UserID, FirstName, LastName, Email, Password, Role, TimeZone } = req.body;
    console.log('Request Body:', req.body);
    console.log('Password:', Password);

    // Check if the user already exists
    const existingUser = await User.findOne({ Email });

    if (existingUser) {
      return res.status(400).json({ error: 'User with this email already exists.' });
    }

    // Hash the user password
    const saltRounds = 15;
    const hashedPassword = await bcrypt.hash(Password, saltRounds);

    // Create a new user record with the specified UserID
    const newUser = new User({
      UserID, // Manually set UserID
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
// Function to authenticate a user
async function authenticateUser(req, res) {
  try {
    const { Email, Password } = req.body;
    console.log(req.body)

    const user = await User.findOne({ Email });

    if (!user) {
      return res.status(401).json({ error: 'User not found.' });
    }

    // Compare the provided password with the stored hash
    const passwordMatch = await bcrypt.compare(Password, user.PasswordHash);

    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid password.' });
    }

    // You can generate a JWT token for authentication here if needed

    res.json({ message: 'Authentication successful.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not authenticate the user.' });
  }
}

// Function to update user information
async function updateUser(req, res) {
  try {
    const { UserId } = req.params;
    const { FirstName, LastName, Email, Role, TimeZone } = req.body;

    // Find the user by UserId
    const user = await User.findById(UserId);

    if (!user) {
      return res.status(404).json({ error: 'User not found.' });
    }

    // Update user fields
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

// Function to change user password
async function changePassword(req, res) {
  try {
    const { UserId } = req.params;
    const { CurrentPassword, NewPassword } = req.body;

    // Find the user by UserId
    const user = await User.findById(UserId);

    if (!user) {
      return res.status(404).json({ error: 'User not found.' });
    }

    // Compare the provided current password with the stored hash
    const passwordMatch = await bcrypt.compare(CurrentPassword, user.PasswordHash);

    if (!passwordMatch) {
      return res.status(401).json({ error: 'Current password is incorrect.' });
    }

    // Hash the new password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(NewPassword, saltRounds);

    // Update user's password hash
    user.PasswordHash = hashedPassword;

    await user.save();

    res.json({ message: 'Password changed successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not change the password.' });
  }
}

// Function to delete a user
async function deleteUser(req, res) {
  try {
    const { UserId } = req.params;

    // Find and remove the user by UserId
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
// Function to get all users
async function getAllUsers(req, res) {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not fetch users.' });
  }
}

// Function to get a single user by ID
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

// Function to delete a user by ID
async function deleteUserById(req, res) {
  try {
    const { UserId } = req.params;

    // Find and remove the user by UserId
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
