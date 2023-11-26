<<<<<<< HEAD
import express from 'express';
import { UserZoneMeetingRole } from '../schema/Schemas.mjs';

async function createUserZoneMeetingRole(req, res) {
  try {
    const { UserZoneMeetingRoleID, UserID, ZoneID, MeetingID, Role } = req.body;

    const newUserZoneMeetingRole = new UserZoneMeetingRole({
      UserZoneMeetingRoleID,
      UserID,
      ZoneID,
      MeetingID,
      Role,
    });

    await newUserZoneMeetingRole.save();

    res.status(201).json(newUserZoneMeetingRole);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not create user zone meeting role.' });
  }
}


async function updateUserZoneMeetingRole(req, res) {
  try {
    const { userZoneMeetingRoleId } = req.params;
    const { UserZoneMeetingRoleID, Role } = req.body;

   
    const userZoneMeetingRole = await UserZoneMeetingRole.findById(userZoneMeetingRoleId);

    if (!userZoneMeetingRole) {
      return res.status(404).json({ error: 'User zone meeting role not found.' });
    }

   
    userZoneMeetingRole.UserZoneMeetingRoleID = UserZoneMeetingRoleID;
    userZoneMeetingRole.Role = Role;

    await userZoneMeetingRole.save();

    res.json(userZoneMeetingRole);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not update user zone meeting role.' });
  }
}
async function deleteUserZoneMeetingRole(req, res) {
  try {
    const { userZoneMeetingRoleId } = req.params;

    
    const deletedUserZoneMeetingRole = await UserZoneMeetingRole.findByIdAndRemove(userZoneMeetingRoleId);

    if (!deletedUserZoneMeetingRole) {
      return res.status(404).json({ error: 'User zone meeting role not found.' });
    }

    res.json({ message: 'User zone meeting role deleted successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not delete user zone meeting role.' });
  }
}
async function getUserZoneMeetingRoleById(req, res) {
  try {
    const { userZoneMeetingRoleId, populateFields } = req.params;
    const query = UserZoneMeetingRole.findById(userZoneMeetingRoleId);

    if (populateFields) {
      const fields = populateFields.split(',');

      fields.forEach((field) => {
        query.populate(field.trim());
      });
    }

    const userZoneMeetingRole = await query.exec();

    if (!userZoneMeetingRole) {
      return res.status(404).json({ error: 'User zone meeting role not found.' });
    }

    res.json(userZoneMeetingRole);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not fetch the user zone meeting role.' });
  }
}
async function getAllUserZoneMeetingRoles(req, res) {
  try {
    const { populateFields } = req.query;
    const query = UserZoneMeetingRole.find();

    if (populateFields) {
      const fields = populateFields.split(',');

      fields.forEach((field) => {
        query.populate(field.trim());
      });
    }

    const userZoneMeetingRoles = await query.exec();

    res.json(userZoneMeetingRoles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not fetch user zone meeting roles.' });
  }
}

export {
  createUserZoneMeetingRole,
  getAllUserZoneMeetingRoles,
  getUserZoneMeetingRoleById,
  updateUserZoneMeetingRole,
  deleteUserZoneMeetingRole,
=======
import express from 'express';
import { UserZoneMeetingRole } from '../schema/Schemas.mjs';

async function createUserZoneMeetingRole(req, res) {
  try {
    const { UserZoneMeetingRoleID, UserID, ZoneID, MeetingID, Role } = req.body;

    const newUserZoneMeetingRole = new UserZoneMeetingRole({
      UserZoneMeetingRoleID,
      UserID,
      ZoneID,
      MeetingID,
      Role,
    });

    await newUserZoneMeetingRole.save();

    res.status(201).json(newUserZoneMeetingRole);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not create user zone meeting role.' });
  }
}


async function updateUserZoneMeetingRole(req, res) {
  try {
    const { userZoneMeetingRoleId } = req.params;
    const { UserZoneMeetingRoleID, Role } = req.body;

   
    const userZoneMeetingRole = await UserZoneMeetingRole.findById(userZoneMeetingRoleId);

    if (!userZoneMeetingRole) {
      return res.status(404).json({ error: 'User zone meeting role not found.' });
    }

   
    userZoneMeetingRole.UserZoneMeetingRoleID = UserZoneMeetingRoleID;
    userZoneMeetingRole.Role = Role;

    await userZoneMeetingRole.save();

    res.json(userZoneMeetingRole);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not update user zone meeting role.' });
  }
}
async function deleteUserZoneMeetingRole(req, res) {
  try {
    const { userZoneMeetingRoleId } = req.params;

    
    const deletedUserZoneMeetingRole = await UserZoneMeetingRole.findByIdAndRemove(userZoneMeetingRoleId);

    if (!deletedUserZoneMeetingRole) {
      return res.status(404).json({ error: 'User zone meeting role not found.' });
    }

    res.json({ message: 'User zone meeting role deleted successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not delete user zone meeting role.' });
  }
}
async function getUserZoneMeetingRoleById(req, res) {
  try {
    const { userZoneMeetingRoleId, populateFields } = req.params;
    const query = UserZoneMeetingRole.findById(userZoneMeetingRoleId);

    if (populateFields) {
      const fields = populateFields.split(',');

      fields.forEach((field) => {
        query.populate(field.trim());
      });
    }

    const userZoneMeetingRole = await query.exec();

    if (!userZoneMeetingRole) {
      return res.status(404).json({ error: 'User zone meeting role not found.' });
    }

    res.json(userZoneMeetingRole);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not fetch the user zone meeting role.' });
  }
}
async function getAllUserZoneMeetingRoles(req, res) {
  try {
    const { populateFields } = req.query;
    const query = UserZoneMeetingRole.find();

    if (populateFields) {
      const fields = populateFields.split(',');

      fields.forEach((field) => {
        query.populate(field.trim());
      });
    }

    const userZoneMeetingRoles = await query.exec();

    res.json(userZoneMeetingRoles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not fetch user zone meeting roles.' });
  }
}

export {
  createUserZoneMeetingRole,
  getAllUserZoneMeetingRoles,
  getUserZoneMeetingRoleById,
  updateUserZoneMeetingRole,
  deleteUserZoneMeetingRole,
>>>>>>> 4ce2ad190c38dfd350dcb3755bbf1a513f30af84
};