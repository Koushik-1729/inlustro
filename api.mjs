
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose'; // Import Mongoose here
import userRoutes from './app/routes/UserRoutes.mjs';
import TeamRoute from './app/routes/TeamRoute.mjs';
import UserTeamMembershipRoute from './app/routes/UserTeamMembershipRoute.mjs';
import ProjectRoute from './app/routes/ProjectRoute.mjs';
import MeetingRoute from './app/routes/MeetingRoute.mjs';
import UserProjectMembershipRoute from './app/routes/UserProjectMembershipRoute.mjs'
import CustomMetricsRoute from './app/routes/CustomMetricsRoute.mjs'
import UserCustomMetricsRoute from './app/routes/UserCustomMetricsRoute.mjs'
import TeamCustomMetricsRoute from './app/routes/TeamCustomMetricsRoute.mjs'
import ProjectCustomMetricsRoute from './app/routes/ProjectCustomMetricsRoute.mjs'

import { User, Team, Project, UserProjectMembership, Zone, ZoneCustomMetrics,ProjectCustomMetrics,TeamCustomMetrics,UserCustomMetrics,CustomMetrics,UserProjectZoneMeetingRole,UserZoneMeetingRole,UserProjectMeetingRole,UserMeetingRole,UserProjectZoneRole,UserZoneRole
  ,UserTeamRole,UserTeamMembership,UserProjectRole,UserZoneMembership,ZoneMeetingAnalytics,UserSentiment,MeetingAnalytics,PostMeetingReport,SpeakerRecognition,SuggestedTimeSlot,EngagementMetrics,DiscussionPoint,DiscussionTopic,ActionItem,Participant,Meeting,ZoneMeetingMembership} from './app/schema/Schemas.mjs';
const app = express();

// Define MongoDB connection
mongoose.connect("mongodb+srv://koushik:koushik123@cluster0.60rrs9x.mongodb.net/dev")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

  app.use(bodyParser.json());
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



app.get('/api/userss', (req, res) => {
  // You can perform any health checks you need here
  // For simplicity, we'll just return a JSON response indicating the service is healthy
  res.json({ status: 'success' });
});

app.listen(8000,()=>console.log("server started"));