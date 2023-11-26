import express from 'express';
import mongoose from 'mongoose';
import { User,Project,Zone,Meeting,UserProjectZoneMeetingRole } from '../schema/Schemas.mjs';


async function getAllUserProjectZoneMeetingRoles(req, res) {
  try {
    const userProjectZoneMeetingRoles = await UserProjectZoneMeetingRole.find()
      // .populate('UserID')
      // .populate({
      //   path:'UserID',
      //   Model:User
      // })
      // .populate('ProjectID')
      .populate({
        path:'ProjectID',
        Model:Project
      })
      // .populate('ZoneID')
      .populate({
        path:'ZoneID',
        Model:Zone
      })
      // .populate('MeetingID')
      .populate({
        path:'MeetingID',
        Model:Meeting
      })
      .exec();

    res.json(userProjectZoneMeetingRoles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not fetch the user project zone meeting roles.' });
  }
}

async function getUserProjectZoneMeetingRoleById(req, res) {
  try {
    const { userProjectZoneMeetingRoleId } = req.params;

    const userProjectZoneMeetingRole = await UserProjectZoneMeetingRole.findById(userProjectZoneMeetingRoleId)
      // .populate('UserID')
      .populate({
        path:'UserID',
        Model:User
      })
      // .populate('ProjectID')
      .populate({
        path:'ProjectID',
        Model:Project
      })
      // .populate('ZoneID')
      .populate({
        path:'ZoneID',
        Model:Zone
      })
      // .populate('MeetingID')
      .populate({
        path:'MeetingID',
        Model:Meeting
      })
      .exec();

    if (!userProjectZoneMeetingRole) {
      return res.status(404).json({ error: 'User project zone meeting role not found.' });
    }

    res.json(userProjectZoneMeetingRole);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not fetch the user project zone meeting role.' });
  }
}


async function createUserProjectZoneMeetingRole(req, res) {
  try {
    const { UserProjectZoneMeetingRoleID,UserID, ProjectID, ZoneID, MeetingID, Role } = req.body;

    const userProjectZoneMeetingRole = new UserProjectZoneMeetingRole({
      UserProjectZoneMeetingRoleID,
      UserID,
      ProjectID,
      ZoneID,
      MeetingID,
      Role,
    });

    await userProjectZoneMeetingRole.save();

    res.status(201).json(userProjectZoneMeetingRole);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not create the user project zone meeting role.' });
  }
}


async function updateUserProjectZoneMeetingRoleById(req, res) {
  try {
    const { userProjectZoneMeetingRoleId } = req.params;
    const { UserID, ProjectID, ZoneID, MeetingID, Role } = req.body;

    const userProjectZoneMeetingRole = await UserProjectZoneMeetingRole.findById(userProjectZoneMeetingRoleId);

    if (!userProjectZoneMeetingRole) {
      return res.status(404).json({ error: 'User project zone meeting role not found.' });
    }

    userProjectZoneMeetingRole.UserID = UserID;
    userProjectZoneMeetingRole.ProjectID = ProjectID;
    userProjectZoneMeetingRole.ZoneID = ZoneID;
    userProjectZoneMeetingRole.MeetingID = MeetingID;
    userProjectZoneMeetingRole.Role = Role;

    await userProjectZoneMeetingRole.save();

    res.json(userProjectZoneMeetingRole);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not update the user project zone meeting role.' });
  }
}


async function deleteUserProjectZoneMeetingRoleById(req, res) {
  try {
    const { userProjectZoneMeetingRoleId } = req.params;

    const userProjectZoneMeetingRole = await UserProjectZoneMeetingRole.findById(userProjectZoneMeetingRoleId);

    if (!userProjectZoneMeetingRole) {
      return res.status(404).json({ error: 'User project zone meeting role not found.' });
    }

    await userProjectZoneMeetingRole.remove();

    res.status(204).json();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not delete the user project zone meeting role.' });
  }
}

export{
  getAllUserProjectZoneMeetingRoles,
  getUserProjectZoneMeetingRoleById,
  createUserProjectZoneMeetingRole,
  updateUserProjectZoneMeetingRoleById,
  deleteUserProjectZoneMeetingRoleById

}