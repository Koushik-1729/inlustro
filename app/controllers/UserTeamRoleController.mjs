import express from 'express';
import { UserTeamRole } from '../schema/Schemas.mjs';

async function createUserTeamRole(req, res) {
  try {
    const { UserTeamRoleID,UserID, ZoneID, Role } = req.body;


    const newUserTeamRole = new UserTeamRole({
      UserTeamRoleID,
      UserID,
      ZoneID,
      Role,
    });

    await newUserTeamRole.save();

    res.status(201).json(newUserTeamRole);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not create user team role.' });
  }
}

async function getAllUserTeamRoles(req, res) {
  try {
    const { populateFields } = req.query;
    const query = UserTeamRole.find();

    if (populateFields) {
      const fields = populateFields.split(',');

      fields.forEach((field) => {
        query.populate(field.trim());
      });
    }

    const userTeamRoles = await query.exec();

    res.json(userTeamRoles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not fetch user team roles.' });
  }
}

async function getUserTeamRoleById(req, res) {
  try {
    const { userTeamRoleId, populateFields } = req.params;
    const query = UserTeamRole.findById(userTeamRoleId);

    if (populateFields) {
      const fields = populateFields.split(',');

      fields.forEach((field) => {
        query.populate(field.trim());
      });
    }

    const userTeamRole = await query.exec();

    if (!userTeamRole) {
      return res.status(404).json({ error: 'User team role not found.' });
    }

    res.json(userTeamRole);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not fetch the user team role.' });
  }
}


async function updateUserTeamRole(req, res) {
  try {
    const { userTeamRoleId } = req.params;
    const { ZoneID, Role } = req.body;

  
    const userTeamRole = await UserTeamRole.findById(userTeamRoleId);

    if (!userTeamRole) {
      return res.status(404).json({ error: 'User team role not found.' });
    }

s
    userTeamRole.ZoneID = ZoneID;
    userTeamRole.Role = Role;

    await userTeamRole.save();

    res.json(userTeamRole);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not update user team role.' });
  }
}


async function deleteUserTeamRole(req, res) {
  try {
    const { userTeamRoleId } = req.params;

   
    const deletedUserTeamRole = await UserTeamRole.findByIdAndRemove(userTeamRoleId);

    if (!deletedUserTeamRole) {
      return res.status(404).json({ error: 'User team role not found.' });
    }

    res.json({ message: 'User team role deleted successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not delete user team role.' });
  }
}

export {
  createUserTeamRole,
  getAllUserTeamRoles,
  getUserTeamRoleById,
  updateUserTeamRole,
  deleteUserTeamRole,
};