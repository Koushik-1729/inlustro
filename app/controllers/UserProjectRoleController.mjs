<<<<<<< HEAD
import express from 'express';
import { UserProjectRole,Project,User } from '../schema/Schemas.mjs';


async function createUserProjectRole(req, res) {
  try {
    const { UserProjectRoleID,UserID, ProjectID, Role } = req.body;

    
    const newUserProjectRole = new UserProjectRole({
      UserProjectRoleID,
      UserID,
      ProjectID,
      Role,
    });

    await newUserProjectRole.save();

    res.status(201).json(newUserProjectRole);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not create user project role.' });
  }
}


async function getUserProjectRolesForProject(req, res) {
  try {
    const { projectId } = req.params;

    const userProjectRoles = await UserProjectRole.find({ ProjectID: projectId })
      // .populate('ProjectID')
      .populate({
        path:'ProjectID',
        Model:Project
      })
      // .populate('UserID') 
      .populate({
        path:'UserID',
        Model:User
      })
      .exec();

    res.json(userProjectRoles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not fetch user project roles.' });
  }
}

async function getUserProjectRoleById(req, res) {
  try {
    const { userProjectRoleId } = req.params;

    const userProjectRole = await UserProjectRole.findById(userProjectRoleId)
      //.populate('UserID')
      .populate({
        path:'UserID',
        Model:User
      })
      .exec();

    if (!userProjectRole) {
      return res.status(404).json({ error: 'User project role not found.' });
    }

    res.json(userProjectRole);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not fetch the user project role.' });
  }
}


async function updateUserProjectRole(req, res) {
  try {
    const { userProjectRoleId } = req.params;
    const { Role } = req.body;

    
    const userProjectRole = await UserProjectRole.findById(userProjectRoleId);

    if (!userProjectRole) {
      return res.status(404).json({ error: 'User project role not found.' });
    }

  
    userProjectRole.Role = Role;

    await userProjectRole.save();

    res.json(userProjectRole);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not update user project role.' });
  }
}


async function deleteUserProjectRole(req, res) {
  try {
    const { userProjectRoleId } = req.params;

    const deletedUserProjectRole = await UserProjectRole.findByIdAndRemove(userProjectRoleId);

    if (!deletedUserProjectRole) {
      return res.status(404).json({ error: 'User project role not found.' });
    }

    res.json({ message: 'User project role deleted successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not delete user project role.' });
  }
}

export {
  createUserProjectRole,
  getUserProjectRolesForProject,
  getUserProjectRoleById,
  updateUserProjectRole,
  deleteUserProjectRole,
=======
import express from 'express';
import { UserProjectRole,Project,User } from '../schema/Schemas.mjs';


async function createUserProjectRole(req, res) {
  try {
    const { UserProjectRoleID,UserID, ProjectID, Role } = req.body;

    
    const newUserProjectRole = new UserProjectRole({
      UserProjectRoleID,
      UserID,
      ProjectID,
      Role,
    });

    await newUserProjectRole.save();

    res.status(201).json(newUserProjectRole);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not create user project role.' });
  }
}


async function getUserProjectRolesForProject(req, res) {
  try {
    const { projectId } = req.params;

    const userProjectRoles = await UserProjectRole.find({ ProjectID: projectId })
      // .populate('ProjectID')
      .populate({
        path:'ProjectID',
        Model:Project
      })
      // .populate('UserID') 
      .populate({
        path:'UserID',
        Model:User
      })
      .exec();

    res.json(userProjectRoles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not fetch user project roles.' });
  }
}

async function getUserProjectRoleById(req, res) {
  try {
    const { userProjectRoleId } = req.params;

    const userProjectRole = await UserProjectRole.findById(userProjectRoleId)
      //.populate('UserID')
      .populate({
        path:'UserID',
        Model:User
      })
      .exec();

    if (!userProjectRole) {
      return res.status(404).json({ error: 'User project role not found.' });
    }

    res.json(userProjectRole);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not fetch the user project role.' });
  }
}


async function updateUserProjectRole(req, res) {
  try {
    const { userProjectRoleId } = req.params;
    const { Role } = req.body;

    
    const userProjectRole = await UserProjectRole.findById(userProjectRoleId);

    if (!userProjectRole) {
      return res.status(404).json({ error: 'User project role not found.' });
    }

  
    userProjectRole.Role = Role;

    await userProjectRole.save();

    res.json(userProjectRole);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not update user project role.' });
  }
}


async function deleteUserProjectRole(req, res) {
  try {
    const { userProjectRoleId } = req.params;

    const deletedUserProjectRole = await UserProjectRole.findByIdAndRemove(userProjectRoleId);

    if (!deletedUserProjectRole) {
      return res.status(404).json({ error: 'User project role not found.' });
    }

    res.json({ message: 'User project role deleted successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not delete user project role.' });
  }
}

export {
  createUserProjectRole,
  getUserProjectRolesForProject,
  getUserProjectRoleById,
  updateUserProjectRole,
  deleteUserProjectRole,
>>>>>>> 4ce2ad190c38dfd350dcb3755bbf1a513f30af84
};