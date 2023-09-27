import express from 'express';
import { DiscussionTopic,Meeting} from '../schema/Schemas.mjs';


async function createDiscussionTopic(req, res) {
  try {
    const { DiscussionTopicID, MeetingID, Title, Description } = req.body;

    const newDiscussionTopic = new DiscussionTopic({
      DiscussionTopicID,
      MeetingID,
      Title,
      Description,
    });

    await newDiscussionTopic.save();

    res.status(201).json(newDiscussionTopic);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not create the discussion topic.' });
  }
}


async function updateDiscussionTopic(req, res) {
  try {
    const { DiscussionTopicID } = req.params;
    const { MeetingID, Title, Description } = req.body;

    
    const discussionTopic = await DiscussionTopic.findOne({ DiscussionTopicID });

    if (!discussionTopic) {
      return res.status(404).json({ error: 'Discussion topic not found.' });
    }

  
    discussionTopic.MeetingID = MeetingID;
    discussionTopic.Title = Title;
    discussionTopic.Description = Description;

    await discussionTopic.save();

    res.json(discussionTopic);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not update the discussion topic.' });
  }
}


async function deleteDiscussionTopic(req, res) {
  try {
    const { DiscussionTopicID } = req.params;

   
    const deletedDiscussionTopic = await DiscussionTopic.findOneAndDelete({ DiscussionTopicID });

    if (!deletedDiscussionTopic) {
      return res.status(404).json({ error: 'Discussion topic not found.' });
    }

    res.json({ message: 'Discussion topic deleted successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not delete the discussion topic.' });
  }
}
async function getAllDiscussionTopics(req, res) {
  try {
    const discussionTopics = await DiscussionTopic.find()
      .populate('MeetingID')
      .populate({
        path:'MeetingID',
        Model:Meeting
      })
      .exec();

    res.json(discussionTopics);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not fetch discussion topics.' });
  }
}

async function getDiscussionTopicById(req, res) {
  try {
    const { DiscussionTopicID } = req.params;

    const discussionTopic = await DiscussionTopic.findOne({ DiscussionTopicID })
      .populate('MeetingID') // Populate the Meeting field
      .exec();

    if (!discussionTopic) {
      return res.status(404).json({ error: 'Discussion topic not found.' });
    }

    res.json(discussionTopic);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not fetch the discussion topic.' });
  }
}

export {
  createDiscussionTopic,
  updateDiscussionTopic,
  deleteDiscussionTopic,
  getAllDiscussionTopics,
  getDiscussionTopicById,
};