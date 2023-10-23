
import express from 'express';
import axios from 'axios';
import bodyParser from 'body-parser';
import mongoose from 'mongoose'; 
import rateLimit from 'express-rate-limit';
import userRoutes from './app/routes/UserRoutes.mjs';
import TeamRoute from './app/routes/TeamRoute.mjs';
import UserTeamMembershipRoute from './app/routes/UserTeamMembershipRoute.mjs';
import ProjectRoute from './app/routes/ProjectRoute.mjs';
import MeetingRoute from './app/routes/MeetingRoute.mjs';
import UserProjectMembershipRoute from './app/routes/UserProjectMembershipRoute.mjs';
import CustomMetricsRoute from './app/routes/CustomMetricsRoute.mjs';
import UserCustomMetricsRoute from './app/routes/UserCustomMetricsRoute.mjs';
import TeamCustomMetricsRoute from './app/routes/TeamCustomMetricsRoute.mjs';
import ProjectCustomMetricsRoute from './app/routes/ProjectCustomMetricsRoute.mjs';
import PraticipantRoute from './app/routes/ParticipantRoute.mjs';
import ActionItemRoute  from './app/routes/ActionItemRoute.mjs';
import DiscussionPointRoute from './app/routes/DiscussionPointRoute.mjs';
import DiscussionTopicRoute from './app/routes/DiscussionTopicRoute.mjs';
import EngagementMetricsRoute from './app/routes/EngagementMetricsRoute.mjs';
import MeetingAnalyticsRoute from './app/routes/MeetingAnalyticsRoute.mjs';
import PostMeetingReportRoute from './app/routes/PostMeetingReportRoute.mjs';
import SpeakerRecognitionRoute from './app/routes/SpeakerRecognitionRoute.mjs';
import SuggestedTimeSlotRoute from './app/routes/SuggestedTimeSlotRoute.mjs';
import UserMeetingRoleRoute from './app/routes/UserMeetingRoleRoute.mjs';
import UserProjectMeetingRoleRoute from './app/routes/UserProjectMeetingRoleRoute.mjs';
import UserProjectRoleRoute from './app/routes/UserProjectRoleRoute.mjs';
import UserSentimentRoute from './app/routes/UserSentimentRoute.mjs';
import UserTeamRoleRoute from './app/routes/UserTeamRoleRoute.mjs';
import UserZoneMeetingRoleRoute from './app/routes/UserZoneMeetingRoleRoute.mjs';
import UserZoneMembershipRoute from './app/routes/UserZoneMembershipRoute.mjs';
import UserZoneRoleRoute from './app/routes/UserZoneRoleRoute.mjs';
import ZoneCustomMetricsRoute from './app/routes/ZoneCustomMetricsRoute.mjs';
import ZoneMeetingAnalyticsRoute from './app/routes/ZoneMeetingAnalyticsRoute.mjs';
import ZoneMeetingMembershipRoute from './app/routes/ZoneMeetingMembershipRoute.mjs';
import ZoneRoute from './app/routes/ZoneRoute.mjs';
import UserProjectZoneMeetingRoleRoute from './app/routes/UserProjectZoneMeetingRoleRoute.mjs';
import UserProjectZoneRoleRoutte from './app/routes/UserProjectZoneRoleRoutte.mjs';


import { User, Team, Project, UserProjectMembership, Zone, ZoneCustomMetrics,ProjectCustomMetrics,TeamCustomMetrics,UserCustomMetrics,CustomMetrics,UserProjectZoneMeetingRole,UserZoneMeetingRole,UserProjectMeetingRole,UserMeetingRole,UserProjectZoneRole,UserZoneRole
  ,UserTeamRole,UserTeamMembership,UserProjectRole,UserZoneMembership,ZoneMeetingAnalytics,UserSentiment,MeetingAnalytics,PostMeetingReport,SpeakerRecognition,SuggestedTimeSlot,EngagementMetrics,DiscussionPoint,DiscussionTopic,ActionItem,Participant,Meeting,ZoneMeetingMembership} from './app/schema/Schemas.mjs';

// const express = require('express');
// const app1 = express()
// const readline = require("readline-sync")

// let a = readline.question();
// app1.get('/', (req, res) => {

//     const { spawn } = require('child_process');
//     const pyProg = spawn('python', ['main.py',a]);

//     pyProg.stdout.on('data', function(data) {

//         console.log(data.toString());
//         res.write(data);
//         res.end('end');
//     });
// })


const app = express();

mongoose.connect("mongodb+srv://koushik:koushik123@cluster0.60rrs9x.mongodb.net/dev")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

  const limiter=rateLimit({
    windowsMs:10*60*1000,
    max:100,
    message:"To Many Requests from the IP Address Please Try Again After 10 Minutes",
    statusCode: 429
  });
  app.use('/api',limiter);
  app.use(bodyParser.json());
  app.post('/summarize', async (req, res) => {
    try {
      
      if (!req.body.Id) {
        return res.status(400).json({ error: 'PostMeetingReportID is required in the request body' });
      }
  
      const _data = req.body.data;
      const _model = req.body.model;
      const _idType  = req.body.idType;
      // console.log(textToSummarize)
      // console.log(req.body.text)
      
      const flaskResponse = await axios.post('http://127.0.0.1:5000/summarize', {
        _data: _data,
        _modelType: _model
      });
      console.log('Flask Response:', flaskResponse);
  
      if (flaskResponse.status === 200) {
        const _response = flaskResponse.data._output;
        console.log('Summarized Text:', _response);
  
        if(_idType == 'POSTMEET'){
        const { id } = req.body;
        await PostMeetingReport.findOneAndUpdate(
          { _id: id},
          { KeyDecisions: _response },
          // {modelType :  summarizedText}
          

        );
        }
        else if (_idType=='FACE'){
          const { id } = req.body;
          await EngagementMetrics.findOneAndUpdate(
            {_id:id},
            {FacialExpressionsData:_response}
          );
        }
        else if(_idType=='VOICE')
        {

        }
        else if(_idType=='DETECTFACE')
        {
          
        }
        return res.status(200).json({ _response});

      } else {
        return res.status(flaskResponse.status).json({ error: 'Error from Flask server' });
      }
    
    } catch (error) {
      console.error('Error:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  
  app.use('/api/users', userRoutes);
  app.use('/api/teams', TeamRoute);
  app.use('/api/userteammemberships', UserTeamMembershipRoute);
  app.use('/api/projects', ProjectRoute);
  app.use('/api/meetings', MeetingRoute);
  app.use('/api/userprojectmemberships', UserProjectMembershipRoute);
  app.use('/api/custommetrics', CustomMetricsRoute);
  app.use('/api/usercustommetrics', UserCustomMetricsRoute);
  app.use('/api/teamcustommetrics', TeamCustomMetricsRoute);
  app.use('/api/projectcustommetrics', ProjectCustomMetricsRoute);
  app.use('/api/participants', PraticipantRoute);
  app.use('/api/Zone',ZoneRoute);
  app.use('/api/ZoneMeetingMembership',ZoneMeetingMembershipRoute);
  app.use('/api/ZoneMeetingAnalytics',ZoneMeetingAnalyticsRoute);
  app.use('/api/ZoneCustomMetrics',ZoneCustomMetricsRoute);
  app.use('/api/UserZoneRole',UserZoneRoleRoute);
  app.use('/api/UserZoneMembership',UserZoneMembershipRoute);
  app.use('/api/UserZoneMeetingRole', UserZoneMeetingRoleRoute);
  app.use('/api/UserTeamRole',UserTeamRoleRoute);
  app.use('/api/UserSentiment',UserSentimentRoute);
  app.use('/api/UserProjectRole',UserProjectRoleRoute);
  app.use('/api/UserProjectMeetingRole',UserProjectMeetingRoleRoute);
  app.use('/api/UserMeetingRole',UserMeetingRoleRoute);
  app.use('/api/SuggestedTimeSlot',SuggestedTimeSlotRoute);
  app.use('/api/SpeakerRecognition',SpeakerRecognitionRoute);
  app.use('/api/ProjectCustomMetrics',ProjectCustomMetricsRoute);
  app.use('/api/PostMeetingReport',PostMeetingReportRoute);
  app.use('/api/MeetingAnalytics',MeetingAnalyticsRoute);
  app.use('/api/EngagementMetrics',EngagementMetricsRoute);
  app.use('/api/DiscussionTopic',DiscussionTopicRoute);
  app.use('/api/DiscussionPoint',DiscussionPointRoute);
  app.use('/api/ActionItem',ActionItemRoute);
  app.use('/api/UserProjectMeeting',UserProjectMeetingRoleRoute);
  app.use('/api/UserProjectZoneMeetingRole',UserProjectZoneMeetingRoleRoute);
  app.use('/api/UserProjectZoneRole',UserProjectZoneRoleRoutte);
app.listen(8000,()=>console.log("server started"));