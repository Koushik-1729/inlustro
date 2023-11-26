import express from 'express';
import { DiscussionPoint,DiscussionTopic,User} from '../schema/Schemas.mjs';
async function createDiscussionPoint(req, res) {
  try {
    const { DiscussionPointID,DiscussionTopicID, SpeakerUserID, Timestamp, Content } = req.body;

    const newDiscussionPoint = new DiscussionPoint({
      DiscussionPointID,
      DiscussionTopicID,
      SpeakerUserID,
      Timestamp,
      Content,
    });

    await newDiscussionPoint.save();

    res.status(201).json(newDiscussionPoint);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not create the discussion point.' });
  }
}


async function updateDiscussionPoint(req, res) {
  try {
    const { DiscussionPointID } = req.params;
    const { DiscussionTopicID, SpeakerUserID, Timestamp, Content } = req.body;

 
    const discussionPoint = await DiscussionPoint.findById(DiscussionPointID);

    if (!discussionPoint) {
      return res.status(404).json({ error: 'Discussion point not found.' });
    }

   
    discussionPoint.DiscussionTopicID = DiscussionTopicID;
    discussionPoint.SpeakerUserID = SpeakerUserID;
    discussionPoint.Timestamp = Timestamp;
    discussionPoint.Content = Content;

    await discussionPoint.save();

    res.json(discussionPoint);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not update the discussion point.' });
  }
}


async function deleteDiscussionPoint(req, res) {
  try {
    const { DiscussionPointID } = req.params;

    const deletedDiscussionPoint = await DiscussionPoint.findByIdAndRemove(DiscussionPointID);

    if (!deletedDiscussionPoint) {
      return res.status(404).json({ error: 'Discussion point not found.' });
    }

    res.json({ message: 'Discussion point deleted successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not delete the discussion point.' });
  }
}


async function getAllDiscussionPoints(req, res) {
  try {
   
    const discussionPoints = await DiscussionPoint.find()
      
      .populate({
        path:"DiscussionTopicID",
        Model:DiscussionTopic
      })
     
      .populate({
        path:'SpeakerUserID',
        Model:User
      })
      .exec();

    res.json(discussionPoints);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not fetch discussion points.' });
  }
}


async function getDiscussionPointById(req, res) {
  try {
    const { DiscussionPointID } = req.params;

    const discussionPoint = await DiscussionPoint.findById(DiscussionPointID)
   
      .populate({
        path:"DisscussionTopicID",
        Model:DiscussionTopic
      })
      
      .populate({
        path:'SpeakerUserID',
        Model:User
      })
      .exec();

    if (!discussionPoint) {
      return res.status(404).json({ error: 'Discussion point not found.' });
    }

    res.json(discussionPoint);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not fetch the discussion point.' });
  }
}

export {
  createDiscussionPoint,
  updateDiscussionPoint,
  deleteDiscussionPoint,
  getAllDiscussionPoints,
  getDiscussionPointById,
};
