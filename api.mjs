
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose'; // Import Mongoose here
import userRoutes from './app/routes/UserRoutes.mjs';
import { User, Team, Project, UserProjectMembership, Zone, ZoneCustomMetrics,ProjectCustomMetrics,TeamCustomMetrics,UserCustomMetrics,CustomMetrics,UserProjectZoneMeetingRole,UserZoneMeetingRole,UserProjectMeetingRole,UserMeetingRole,UserProjectZoneRole,UserZoneRole
  ,UserTeamRole,UserProjectRole,UserZoneMembership,ZoneMeetingAnalytics,UserSentiment,MeetingAnalytics,PostMeetingReport,SpeakerRecognition,SuggestedTimeSlot,EngagementMetrics,DiscussionPoint,DiscussionTopic,ActionItem,Participant,Meeting,ZoneMeetingMembership} from './app/schema/Schemas.mjs';
const app = express();

// Define MongoDB connection
mongoose.connect("mongodb+srv://koushik:koushik123@cluster0.60rrs9x.mongodb.net/dev")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

  app.use(bodyParser.json());
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  
  app.use('/api/users', userRoutes);

app.get('/api/userss', (req, res) => {
  // You can perform any health checks you need here
  // For simplicity, we'll just return a JSON response indicating the service is healthy
  res.json({ status: 'success' });
});

app.listen(8000,()=>console.log("server started"));