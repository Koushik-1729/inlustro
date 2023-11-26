import express from 'express';
import { UserZoneMeetingRole, Zone,Meeting,User} from '../schema/Schemas.mjs';
async function createUserZoneMeetingRole(req, res) {
  try {
    const { UserZoneRoleId,UserID, ZoneID, MeetingID, Role } = req.body;

  
    const newUserZoneMeetingRole = new UserZoneMeetingRole({
      UserZoneRoleId,
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


async function getUserZoneMeetingRolesForZoneAndMeeting(req, res) {
  try {
    const { zoneId, meetingId } = req.params;

    const userZoneMeetingRoles = await UserZoneMeetingRole.find({
      ZoneID: zoneId,
      MeetingID: meetingId,
    })
   
      .populate({
        path:'UserID',
        Model:User
      })
     
      .populate({
        path:'ZoneID',
        Model:Zone
      })
      .populate({
        path:'MeetingID',
        Model:Meeting
      })
      .exec();

    res.json(userZoneMeetingRoles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not fetch user zone meeting roles.' });
  }
}

async function getUserZoneMeetingRoleById(req, res) {
  try {
    const { userZoneMeetingRoleId } = req.params;

    const userZoneMeetingRole = await UserZoneMeetingRole.findById(userZoneMeetingRoleId)
    .populate({
      path:'UserID',
      Model:User
    })
  
    .populate({
      path:'ZoneID',
      Model:Zone
    })
    .populate({
      path:'MeetingID',
      Model:Meeting
    })
    .exec();


    if (!userZoneMeetingRole) {
      return res.status(404).json({ error: 'User zone meeting role not found.' });
    }

    res.json(userZoneMeetingRole);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not fetch the user zone meeting role.' });
  }
}


async function updateUserZoneMeetingRole(req, res) {
  try {
    const { userZoneMeetingRoleId } = req.params;
    const { Role } = req.body;

    const userZoneMeetingRole = await UserZoneMeetingRole.findById(userZoneMeetingRoleId);

    if (!userZoneMeetingRole) {
      return res.status(404).json({ error: 'User zone meeting role not found.' });
    }

   
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

  
    const deletedUserZoneMeetingRole = await UserZoneMeetingRole.findByIdAndRemove(
      userZoneMeetingRoleId
    );

    if (!deletedUserZoneMeetingRole) {
      return res.status(404).json({ error: 'User zone meeting role not found.' });
    }

    res.json({ message: 'User zone meeting role deleted successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not delete user zone meeting role.' });
  }
}

export {
  createUserZoneMeetingRole,
  getUserZoneMeetingRolesForZoneAndMeeting,
  getUserZoneMeetingRoleById,
  updateUserZoneMeetingRole,
  deleteUserZoneMeetingRole,
};