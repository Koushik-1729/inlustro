<<<<<<< HEAD
import express from 'express';
import { UserProjectMeetingRole,User,Project,Meeting } from '../schema/Schemas.mjs';

async function createUserProjectMeetingRole(req, res) {
  try {
    const {UserProjectMeetingRoleID,UserID, ProjectID, MeetingID, Role } = req.body;

    const newUserProjectMeetingRole = new UserProjectMeetingRole({
      UserProjectMeetingRoleID,
      UserID,
      ProjectID,
      MeetingID,
      Role,
    });

    await newUserProjectMeetingRole.save();

    res.status(201).json(newUserProjectMeetingRole);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not create user project meeting role.' });
  }
}


async function getUserProjectMeetingRolesForProjectAndMeeting(req, res) {
  try {
    const { userId,projectId, meetingId } = req.body;
    console.log(req.body)
    console.log(projectId);
    console.log(meetingId)


    const userProjectMeetingRoles = await UserProjectMeetingRole.find({
      UserID:userId,
      ProjectID: projectId,
      MeetingID: meetingId,
    })
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
      .populate('MeetingID')
      .populate({
        path:'MeetingID',
        Model:Meeting
      })   
      .exec();

    res.json(userProjectMeetingRoles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not fetch user project meeting roles.' });
  }
}


async function getUserProjectMeetingRoleById(req, res) {
  try {
    const { userProjectMeetingRoleId } = req.params;

    const userProjectMeetingRole = await UserProjectMeetingRole.findById(userProjectMeetingRoleId)
      // .populate('UserID')
      .populate({
        path:'UserID',
        Model:User
      }) // Populate the UserID reference
      .exec();

    if (!userProjectMeetingRole) {
      return res.status(404).json({ error: 'User project meeting role not found.' });
    }

    res.json(userProjectMeetingRole);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not fetch the user project meeting role.' });
  }
}

async function updateUserProjectMeetingRole(req, res) {
  try {
    const { userProjectMeetingRoleId } = req.params;
    const { Role } = req.body;

    
    const userProjectMeetingRole = await UserProjectMeetingRole.findById(userProjectMeetingRoleId);

    if (!userProjectMeetingRole) {
      return res.status(404).json({ error: 'User project meeting role not found.' });
    }

   
    userProjectMeetingRole.Role = Role;

    await userProjectMeetingRole.save();

    res.json(userProjectMeetingRole);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not update user project meeting role.' });
  }
}

async function deleteUserProjectMeetingRole(req, res) {
  try {
    const { userProjectMeetingRoleId } = req.params;

    
    const deletedUserProjectMeetingRole = await UserProjectMeetingRole.findByIdAndRemove(
      userProjectMeetingRoleId
    );

    if (!deletedUserProjectMeetingRole) {
      return res.status(404).json({ error: 'User project meeting role not found.' });
    }

    res.json({ message: 'User project meeting role deleted successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not delete user project meeting role.' });
  }
}

export {
  createUserProjectMeetingRole,
  getUserProjectMeetingRolesForProjectAndMeeting,
  getUserProjectMeetingRoleById,
  updateUserProjectMeetingRole,
  deleteUserProjectMeetingRole,
=======
import express from 'express';
import { UserProjectMeetingRole,User,Project,Meeting } from '../schema/Schemas.mjs';

async function createUserProjectMeetingRole(req, res) {
  try {
    const {UserProjectMeetingRoleID,UserID, ProjectID, MeetingID, Role } = req.body;

    const newUserProjectMeetingRole = new UserProjectMeetingRole({
      UserProjectMeetingRoleID,
      UserID,
      ProjectID,
      MeetingID,
      Role,
    });

    await newUserProjectMeetingRole.save();

    res.status(201).json(newUserProjectMeetingRole);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not create user project meeting role.' });
  }
}


async function getUserProjectMeetingRolesForProjectAndMeeting(req, res) {
  try {
    const { userId,projectId, meetingId } = req.body;
    console.log(req.body)
    console.log(projectId);
    console.log(meetingId)


    const userProjectMeetingRoles = await UserProjectMeetingRole.find({
      UserID:userId,
      ProjectID: projectId,
      MeetingID: meetingId,
    })
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
      .populate('MeetingID')
      .populate({
        path:'MeetingID',
        Model:Meeting
      })   
      .exec();

    res.json(userProjectMeetingRoles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not fetch user project meeting roles.' });
  }
}


async function getUserProjectMeetingRoleById(req, res) {
  try {
    const { userProjectMeetingRoleId } = req.params;

    const userProjectMeetingRole = await UserProjectMeetingRole.findById(userProjectMeetingRoleId)
      // .populate('UserID')
      .populate({
        path:'UserID',
        Model:User
      }) // Populate the UserID reference
      .exec();

    if (!userProjectMeetingRole) {
      return res.status(404).json({ error: 'User project meeting role not found.' });
    }

    res.json(userProjectMeetingRole);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not fetch the user project meeting role.' });
  }
}

async function updateUserProjectMeetingRole(req, res) {
  try {
    const { userProjectMeetingRoleId } = req.params;
    const { Role } = req.body;

    
    const userProjectMeetingRole = await UserProjectMeetingRole.findById(userProjectMeetingRoleId);

    if (!userProjectMeetingRole) {
      return res.status(404).json({ error: 'User project meeting role not found.' });
    }

   
    userProjectMeetingRole.Role = Role;

    await userProjectMeetingRole.save();

    res.json(userProjectMeetingRole);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not update user project meeting role.' });
  }
}

async function deleteUserProjectMeetingRole(req, res) {
  try {
    const { userProjectMeetingRoleId } = req.params;

    
    const deletedUserProjectMeetingRole = await UserProjectMeetingRole.findByIdAndRemove(
      userProjectMeetingRoleId
    );

    if (!deletedUserProjectMeetingRole) {
      return res.status(404).json({ error: 'User project meeting role not found.' });
    }

    res.json({ message: 'User project meeting role deleted successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not delete user project meeting role.' });
  }
}

export {
  createUserProjectMeetingRole,
  getUserProjectMeetingRolesForProjectAndMeeting,
  getUserProjectMeetingRoleById,
  updateUserProjectMeetingRole,
  deleteUserProjectMeetingRole,
>>>>>>> 4ce2ad190c38dfd350dcb3755bbf1a513f30af84
};