<<<<<<< HEAD
import express from 'express';
import { UserZoneMembership } from '../schema/Schemas.mjs';

async function createUserZoneMembership(req, res) {
  try {
    const { UserZoneMembershipID,UserID, ZoneID } = req.body;

    
    const newUserZoneMembership = new UserZoneMembership({
      UserZoneMembershipID,
      UserID,
      ZoneID,
    });

    await newUserZoneMembership.save();

    res.status(201).json(newUserZoneMembership);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not create user zone membership.' });
  }
}

async function getAllUserZoneMemberships(req, res) {
  try {
    const { populateFields } = req.query;
    const query = UserZoneMembership.find();

    if (populateFields) {
      const fields = populateFields.split(',');

      fields.forEach((field) => {
        query.populate(field.trim());
      });
    }

    const userZoneMemberships = await query.exec();

    res.json(userZoneMemberships);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not fetch user zone memberships.' });
  }
}


async function getUserZoneMembershipById(req, res) {
  try {
    const { userZoneMembershipId, populateFields } = req.params;
    const query = UserZoneMembership.findById(userZoneMembershipId);


    if (populateFields) {
      const fields = populateFields.split(',');

      fields.forEach((field) => {
        query.populate(field.trim());
      });
    }

    const userZoneMembership = await query.exec();

    if (!userZoneMembership) {
      return res.status(404).json({ error: 'User zone membership not found.' });
    }

    res.json(userZoneMembership);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not fetch the user zone membership.' });
  }
}

async function deleteUserZoneMembership(req, res) {
  try {
    const { userZoneMembershipId } = req.params;


    const deletedUserZoneMembership = await UserZoneMembership.findByIdAndRemove(userZoneMembershipId);

    if (!deletedUserZoneMembership) {
      return res.status(404).json({ error: 'User zone membership not found.' });
    }

    res.json({ message: 'User zone membership deleted successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not delete user zone membership.' });
  }
}

export {
  createUserZoneMembership,
  getAllUserZoneMemberships,
  getUserZoneMembershipById,
  deleteUserZoneMembership,
=======
import express from 'express';
import { UserZoneMembership } from '../schema/Schemas.mjs';

async function createUserZoneMembership(req, res) {
  try {
    const { UserZoneMembershipID,UserID, ZoneID } = req.body;

    
    const newUserZoneMembership = new UserZoneMembership({
      UserZoneMembershipID,
      UserID,
      ZoneID,
    });

    await newUserZoneMembership.save();

    res.status(201).json(newUserZoneMembership);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not create user zone membership.' });
  }
}

async function getAllUserZoneMemberships(req, res) {
  try {
    const { populateFields } = req.query;
    const query = UserZoneMembership.find();

    if (populateFields) {
      const fields = populateFields.split(',');

      fields.forEach((field) => {
        query.populate(field.trim());
      });
    }

    const userZoneMemberships = await query.exec();

    res.json(userZoneMemberships);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not fetch user zone memberships.' });
  }
}


async function getUserZoneMembershipById(req, res) {
  try {
    const { userZoneMembershipId, populateFields } = req.params;
    const query = UserZoneMembership.findById(userZoneMembershipId);


    if (populateFields) {
      const fields = populateFields.split(',');

      fields.forEach((field) => {
        query.populate(field.trim());
      });
    }

    const userZoneMembership = await query.exec();

    if (!userZoneMembership) {
      return res.status(404).json({ error: 'User zone membership not found.' });
    }

    res.json(userZoneMembership);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not fetch the user zone membership.' });
  }
}

async function deleteUserZoneMembership(req, res) {
  try {
    const { userZoneMembershipId } = req.params;


    const deletedUserZoneMembership = await UserZoneMembership.findByIdAndRemove(userZoneMembershipId);

    if (!deletedUserZoneMembership) {
      return res.status(404).json({ error: 'User zone membership not found.' });
    }

    res.json({ message: 'User zone membership deleted successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not delete user zone membership.' });
  }
}

export {
  createUserZoneMembership,
  getAllUserZoneMemberships,
  getUserZoneMembershipById,
  deleteUserZoneMembership,
>>>>>>> 4ce2ad190c38dfd350dcb3755bbf1a513f30af84
};