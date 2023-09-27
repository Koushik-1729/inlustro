import express from 'express';
import { UserMeetingRole,Meeting } from '../schema/Schemas.mjs';

async function createUserMeetingRole(req, res) {
  try {
    const { UserMeetingRoleID,UserID, MeetingID, Role } = req.body;

    
    const newUserMeetingRole = new UserMeetingRole({
      UserMeetingRoleID,
      UserID,
      MeetingID,
      Role,
    });

    await newUserMeetingRole.save();

    res.status(201).json(newUserMeetingRole);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not create user meeting role.' });
  }
}


async function getUserMeetingRolesForMeeting(req, res) {
  try {
    const { meetingId } = req.params;

    const userMeetingRoles = await UserMeetingRole.find({ MeetingID: meetingId })
      // .populate('UserID')
      .populate({
        path:'UserID',
        Model:User
      })
      // .populate('MeetingID')
      .populate({
        path:'MeetingID',
        Model:Meeting
      })
      .exec();

    res.json(userMeetingRoles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not fetch user meeting roles.' });
  }
}


async function getUserMeetingRoleById(req, res) {
  try {
    const { userMeetingRoleId } = req.params;

    const userMeetingRole = await UserMeetingRole.findById(userMeetingRoleId)
    .populate({
      path:'UserID',
      Model:User
    })
    .populate({
      path:'MeetingID',
      Model:Meeting
    })
    .exec();

    if (!userMeetingRole) {
      return res.status(404).json({ error: 'User meeting role not found.' });
    }

    res.json(userMeetingRole);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not fetch the user meeting role.' });
  }
}


async function updateUserMeetingRole(req, res) {
  try {
    const { userMeetingRoleId } = req.params;
    const { Role } = req.body;

   
    const userMeetingRole = await UserMeetingRole.findById(userMeetingRoleId);

    if (!userMeetingRole) {
      return res.status(404).json({ error: 'User meeting role not found.' });
    }

    userMeetingRole.Role = Role;

    await userMeetingRole.save();

    res.json(userMeetingRole);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not update user meeting role.' });
  }
}

async function deleteUserMeetingRole(req, res) {
  try {
    const { userMeetingRoleId } = req.params;

    
    const deletedUserMeetingRole = await UserMeetingRole.findByIdAndRemove(userMeetingRoleId);

    if (!deletedUserMeetingRole) {
      return res.status(404).json({ error: 'User meeting role not found.' });
    }

    res.json({ message: 'User meeting role deleted successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not delete user meeting role.' });
  }
}

export {
  createUserMeetingRole,
  getUserMeetingRolesForMeeting,
  getUserMeetingRoleById,
  updateUserMeetingRole,
  deleteUserMeetingRole,
};