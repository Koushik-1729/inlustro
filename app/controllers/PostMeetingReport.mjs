import express from 'express';
import { spawn } from 'child_process';
import { PostMeetingReport,Meeting } from '../schema/Schemas.mjs';
// Function to create a new post-meeting report
async function createPostMeetingReport(req, res) {
  try {
    const SampleDataForSpeakingTimeDistribution={
      User1:100,
      User2:85,
      User3:95,
      User4:97,
      User5:98,
      User6:99,
      User7:88,
      User8:87,
      User9:86,
      User10:85,
      User11:84,
      User12:83,

    }
    // const SampleDataForTopicAnalysis={
    //   topic1:
    //   {
    //     keywords:['maths','Geometry','Algebra','Mathematical Model'],
    //     sentiment:'Positive',
    //   }
    // }
    const {
      PostMeetingReportID,
      MeetingID,
      EngagementMetricsSummary,
      ActionItemsSummary,
      KeyDecisions,
      FollowUpTasks,
    } = req.body;

    const topicAnalysis = await performTopicAnalysis(EngagementMetricsSummary);
    const newPostMeetingReport = new PostMeetingReport({
      PostMeetingReportID,
      MeetingID,
      EngagementMetricsSummary,
      SpeakingTimeDistribution:SampleDataForSpeakingTimeDistribution,
      TopicAnalysis:topicAnalysis,
      ActionItemsSummary,
      KeyDecisions,
      FollowUpTasks,
    });

    await newPostMeetingReport.save();

    res.status(201).json(newPostMeetingReport);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not create post-meeting report.' });
  }
}
async function performTopicAnalysis(engagementMetricsSummary) {
  return new Promise((resolve, reject) => {
    const scriptPath = './aimodles/main.py';

    const pyProg = spawn('python', [scriptPath, engagementMetricsSummary]);

    let data = '';

    pyProg.stdout.on('data', (chunk) => {
      data += chunk;
    });

    pyProg.on('close', (code) => {
      if (code === 0) {
        try {
          const result = JSON.parse(data.trim());
          resolve(result); 
        } catch (err) {
          reject('Error parsing JSON data from the Python script');
        }
      } else {
        reject(`Python script exited with code ${code}`);
      }
    });
  });
}






async function updatePostMeetingReport(req, res) {
  try {
    const { PostMeetingReportID } = req.params;
    const {
      MeetingID,
      EngagementMetricsSummary,
      SpeakingTimeDistribution,
      TopicAnalysis,
      ActionItemsSummary,
      KeyDecisions,
      FollowUpTasks,
    } = req.body;

  
    const postMeetingReport = await PostMeetingReport.findById(PostMeetingReportID);

    if (!postMeetingReport) {
      return res.status(404).json({ error: 'Post-meeting report not found.' });
    }

   
    postMeetingReport.MeetingID = MeetingID;
    postMeetingReport.EngagementMetricsSummary = EngagementMetricsSummary;
    postMeetingReport.SpeakingTimeDistribution = SpeakingTimeDistribution;
    postMeetingReport.TopicAnalysis = TopicAnalysis;
    postMeetingReport.ActionItemsSummary = ActionItemsSummary;
    postMeetingReport.KeyDecisions = KeyDecisions;
    postMeetingReport.FollowUpTasks = FollowUpTasks;

    await postMeetingReport.save();

    res.json(postMeetingReport);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not update post-meeting report.' });
  }
}


async function deletePostMeetingReport(req, res) {
  try {
    const { PostMeetingReportID } = req.params;

    
    const deletedPostMeetingReport = await PostMeetingReport.findByIdAndRemove(PostMeetingReportID);

    if (!deletedPostMeetingReport) {
      return res.status(404).json({ error: 'Post-meeting report not found.' });
    }

    res.json({ message: 'Post-meeting report deleted successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not delete post-meeting report.' });
  }
}

async function getAllPostMeetingReports(req, res) {
  try {

    const postMeetingReports = await PostMeetingReport.find()
      .populate({
        path:'MeetingID',
        Model:Meeting
      })
      .exec();

    res.json(postMeetingReports);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not fetch post-meeting reports.' });
  }
}

async function getPostMeetingReportById(req, res) {
  try {
    const { PostMeetingReportID } = req.params; 
    const postMeetingReport = await PostMeetingReport.findById(PostMeetingReportID)
    .populate({
      path:'MeetingID',
      Model:Meeting
    })
      .exec();

    if (!postMeetingReport) {
      return res.status(404).json({ error: 'Post-meeting report not found.' });
    }

    res.json(postMeetingReport);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not fetch the post-meeting report.' });
  }
}

export {
  createPostMeetingReport,
  updatePostMeetingReport,
  deletePostMeetingReport,
  getAllPostMeetingReports,
  getPostMeetingReportById,
};  
