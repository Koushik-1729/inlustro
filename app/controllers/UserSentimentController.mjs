import express from 'express';
import { User,UserSentiment,Meeting } from '../schema/Schemas.mjs';
async function createUserSentiment(req, res) {
  try {
    const {UserSentimentID, UserID, MeetingID, SentimentScore } = req.body;
    const newUserSentiment = new UserSentiment({
      UserSentimentID,
      UserID,
      MeetingID,
      SentimentScore,
    });

    await newUserSentiment.save();

    res.status(201).json(newUserSentiment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not create user sentiment entry.' });
  }
}
async function getAllUserSentiments(req, res) {
  try {
    const { populateFields } = req.query;
    const query = UserSentiment.find();

    // Optionally populate User and Meeting fields based on the request
    if (populateFields) {
      const fields = populateFields.split(',');

      fields.forEach((field) => {
        query.populate(field.trim());
      });
    }

    const userSentiments = await query.exec();

    res.json(userSentiments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not fetch user sentiment entries.' });
  }
}

async function getUserSentimentById(req, res) {
  try {
    const { userSentimentId, populateFields } = req.params;
    const query = UserSentiment.findById(userSentimentId);

    if (populateFields) {
      const fields = populateFields.split(',');

      fields.forEach((field) => {
        query.populate(field.trim());
      });
    }

    const userSentiment = await query.exec();

    if (!userSentiment) {
      return res.status(404).json({ error: 'User sentiment entry not found.' });
    }

    res.json(userSentiment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not fetch the user sentiment entry.' });
  }
}


async function updateUserSentiment(req, res) {
  try {
    const { userSentimentId } = req.params;
    const { SentimentScore } = req.body;
    const userSentiment = await UserSentiment.findById(userSentimentId);

    if (!userSentiment) {
      return res.status(404).json({ error: 'User sentiment entry not found.' });
    }

    
    userSentiment.SentimentScore = SentimentScore;

    await userSentiment.save();

    res.json(userSentiment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not update user sentiment entry.' });
  }
}

async function deleteUserSentiment(req, res) {
  try {
    const { userSentimentId } = req.params;

   
    const deletedUserSentiment = await UserSentiment.findByIdAndRemove(userSentimentId);

    if (!deletedUserSentiment) {
      return res.status(404).json({ error: 'User sentiment entry not found.' });
    }

    res.json({ message: 'User sentiment entry deleted successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not delete user sentiment entry.' });
  }
}

export {
  createUserSentiment,
  getAllUserSentiments,
  getUserSentimentById,
  updateUserSentiment,
  deleteUserSentiment,
};