import express from 'express';
import { UserProjectZoneRole,User,Project,Zone } from '../schema/Schemas.mjs';
async function getAllUserProjectZoneRoles(req, res) {
  try {
    const userProjectZoneRoles = await UserProjectZoneRole.find()
      // .populate('UserID')
      // .populate({
      //   path:"UserID",
      //   Model:User
      // })
      // // .populate('ProjectID')
      .populate({
        path:"ProjectID",
        Model:Project
      })
      // .populate('ZoneID')
      .populate({
        path:"ZoneID",
        Model:Project
      })
      .exec();

    res.json(userProjectZoneRoles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not fetch the user project zone roles.' });
  }
}


async function getUserProjectZoneRoleById(req, res) {
  try {
    const { userProjectZoneRoleId } = req.params;

    const userProjectZoneRole = await UserProjectZoneRole.findById(userProjectZoneRoleId)
      .populate('UserID')
      .populate('ProjectID')
      .populate('ZoneID')
      .exec();

    if (!userProjectZoneRole) {
      return res.status(404).json({ error: 'User project zone role not found.' });
    }

    res.json(userProjectZoneRole);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not fetch the user project zone role.' });
  }
}


async function createUserProjectZoneRole(req, res) {
  try {
    const {UserProjectZoneRoleID, UserID, ProjectID, ZoneID, Role } = req.body;

    const userProjectZoneRole = new UserProjectZoneRole({
      UserProjectZoneRoleID,
      UserID,
      ProjectID,
      ZoneID,
      Role,
    });

    await userProjectZoneRole.save();

    res.status(201).json(userProjectZoneRole);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not create the user project zone role.' });
  }
}


async function updateUserProjectZoneRoleById(req, res) {
  try {
    const { userProjectZoneRoleId } = req.params;
    const { UserID, ProjectID, ZoneID, Role } = req.body;

    const userProjectZoneRole = await UserProjectZoneRole.findById(userProjectZoneRoleId);

    if (!userProjectZoneRole) {
      return res.status(404).json({ error: 'User project zone role not found.' });
    }

    userProjectZoneRole.UserID = UserID;
    userProjectZoneRole.ProjectID = ProjectID;
    userProjectZoneRole.ZoneID = ZoneID;
    userProjectZoneRole.Role = Role;

    await userProjectZoneRole.save();

    res.json(userProjectZoneRole);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not update the user project zone role.' });
  }
}


async function deleteUserProjectZoneRoleById(req, res) {
  try {
    const { userProjectZoneRoleId } = req.params;

    const userProjectZoneRole = await UserProjectZoneRole.findById(userProjectZoneRoleId);

    if (!userProjectZoneRole) {
      return res.status(404).json({ error: 'User project zone role not found.' });
    }

    await userProjectZoneRole.remove();

    res.status(204).json();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not delete the user project zone role.' });
  }
}
export{
  getAllUserProjectZoneRoles,
  deleteUserProjectZoneRoleById,
  updateUserProjectZoneRoleById,
  createUserProjectZoneRole,
  getUserProjectZoneRoleById

}