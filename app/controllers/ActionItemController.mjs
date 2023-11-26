<<<<<<< HEAD
import express from 'express';
import mongoose from 'mongoose';
import { ActionItem } from '../schema/Schemas.mjs';
import {User} from '../schema/Schemas.mjs';
import { Meeting } from '../schema/Schemas.mjs';


async function createActionItem(req, res) {
  try {
    const { ActionItemID, MeetingID, AssignedToUserID, Description, Deadline, Status } = req.body;

    
    const newActionItem = new ActionItem({
      ActionItemID, 
      MeetingID,
      AssignedToUserID,
      Description,
      Deadline,
      Status,
    });

    await newActionItem.save();

    res.status(201).json(newActionItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not create action item.' });
  }
}

async function getAllActionItems(req, res) {
  try {
    const actionItems = await ActionItem.find()
    
      .populate({
        path:'MeetingID',
        Model:Meeting
      })
      .exec();

    res.json(actionItems);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not fetch action items.' });
  }
}

async function getActionItemById(req, res) {
  try {
    const { actionItemId } = req.params;

    const actionItem = await ActionItem.findById(actionItemId)
     
      .populate({
        path:'MeetingID',
        Model:Meeting
      }) 
      .populate({
        path:'AssignedToUserID',
        Model:User
      }) 
      .exec();

    if (!actionItem) {
      return res.status(404).json({ error: 'Action item not found.' });
    }

    res.json(actionItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not fetch the action item.' });
  }
}


async function updateActionItem(req, res) {
  try {
    const { actionItemId } = req.params;
    const { Description, Deadline, Status } = req.body;

   
    const actionItem = await ActionItem.findById(actionItemId);

    if (!actionItem) {
      return res.status(404).json({ error: 'Action item not found.' });
    }

  
    actionItem.Description = Description;
    actionItem.Deadline = Deadline;
    actionItem.Status = Status;

    await actionItem.save();

    res.json(actionItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not update action item.' });
  }
}

async function deleteActionItem(req, res) {
  try {
    const { actionItemId } = req.params;

    
    const deletedActionItem = await ActionItem.findByIdAndRemove(actionItemId);

    if (!deletedActionItem) {
      return res.status(404).json({ error: 'Action item not found.' });
    }

    res.json({ message: 'Action item deleted successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not delete action item.' });
  }
}

export {
  createActionItem,
  getAllActionItems,
  getActionItemById,
  updateActionItem,
  deleteActionItem,
};
=======
import express from 'express';
import mongoose from 'mongoose';
import { ActionItem } from '../schema/Schemas.mjs';
import {User} from '../schema/Schemas.mjs';
import { Meeting } from '../schema/Schemas.mjs';


async function createActionItem(req, res) {
  try {
    const { ActionItemID, MeetingID, AssignedToUserID, Description, Deadline, Status } = req.body;

    
    const newActionItem = new ActionItem({
      ActionItemID, 
      MeetingID,
      AssignedToUserID,
      Description,
      Deadline,
      Status,
    });

    await newActionItem.save();

    res.status(201).json(newActionItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not create action item.' });
  }
}

async function getAllActionItems(req, res) {
  try {
    const actionItems = await ActionItem.find()
    
      .populate({
        path:'MeetingID',
        Model:Meeting
      })
      .exec();

    res.json(actionItems);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not fetch action items.' });
  }
}

async function getActionItemById(req, res) {
  try {
    const { actionItemId } = req.params;

    const actionItem = await ActionItem.findById(actionItemId)
     
      .populate({
        path:'MeetingID',
        Model:Meeting
      }) 
      .populate({
        path:'AssignedToUserID',
        Model:User
      }) 
      .exec();

    if (!actionItem) {
      return res.status(404).json({ error: 'Action item not found.' });
    }

    res.json(actionItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not fetch the action item.' });
  }
}


async function updateActionItem(req, res) {
  try {
    const { actionItemId } = req.params;
    const { Description, Deadline, Status } = req.body;

   
    const actionItem = await ActionItem.findById(actionItemId);

    if (!actionItem) {
      return res.status(404).json({ error: 'Action item not found.' });
    }

  
    actionItem.Description = Description;
    actionItem.Deadline = Deadline;
    actionItem.Status = Status;

    await actionItem.save();

    res.json(actionItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not update action item.' });
  }
}

async function deleteActionItem(req, res) {
  try {
    const { actionItemId } = req.params;

    
    const deletedActionItem = await ActionItem.findByIdAndRemove(actionItemId);

    if (!deletedActionItem) {
      return res.status(404).json({ error: 'Action item not found.' });
    }

    res.json({ message: 'Action item deleted successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not delete action item.' });
  }
}

export {
  createActionItem,
  getAllActionItems,
  getActionItemById,
  updateActionItem,
  deleteActionItem,
};
>>>>>>> 4ce2ad190c38dfd350dcb3755bbf1a513f30af84
