//   // //const http=require("http");
//   // // const os=require("os");
//   // // const fs=require("fs");
//   // // const myserver=http.createServer((req,res)=>{
//   // //   const log=`${Date.now()}:${req.url} new req recived\n`;
//   // //   fs.appendFile("log.txt",log,(err,data)=>{
//   // //     res.end("request recived");
//   // //   });

//   // // });
//   // // myserver.listen(8000,()=> console.log("server started"));
//   // // console.log("koushik reddy" );
//   // const express=require('express');
//   // const app = express();
//   // app.get('/', (req , res) => {return res.send("this is home page");});
//   // app.listen(8000,()=>console.log("server started"))
// // const express=require('express');
// // const app=express();
// // app.get('/',(req,res)=>{
// //   return res.send("this is home page");
// // });
// // app.get('/about',(req,res)=>{
// //   return res.send(`hello ${req.query.name}`);
// // });
// // app.listen(8000,()=>{
// //   console.log("server started");
// // });
// //const mongoose=require('mongoose');
// import mongoose from "mongoose";

// mongoose.connect("mongodb+srv://koushikyeruva02:afNozJdTVARUyq5F@cluster0.60rrs9x.mongodb.net/dev")
//   .then(() => console.log("MongoDB connected"))
//   .catch((err) => console.error("MongoDB connection error:", err));

// const userSchema = new mongoose.Schema({
//     UserID: {
//       type: Number,
//       unique: true,
//     },
//     FirstName: String,
//     LastName: String,
//     Email: {
//       type: String,
//       unique: true,
//     },
//     PasswordHash: String,
//     Role: {
//       type: String,
//       enum: ['Admin', 'Organizer', 'Participant'],
//     },
//     TimeZone: String,
    
//   },{ collection: 'users' });

// export const User=mongoose.model("users",userSchema)

// //team schema
// const teamSchema = new mongoose.Schema({
//   TeamID: {
//     type: Number,
//     unique: true,
//   },
//   TeamName: String,
//   TeamLeaderID: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User', // Reference to the User collection
//   },
// });

// const Team = mongoose.model('Team', teamSchema);

// // UserTeamMembership Schema
// const userTeamMembershipSchema = new mongoose.Schema({
//   UserTeamMembershipID: {
//     type: Number,
//     unique: true,
//   },
//   UserID: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User', // Reference to the User collection
//   },
//   TeamID: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Team', // Reference to the Team collection
//   },
// });

// const UserTeamMembership = mongoose.model('UserTeamMembership', userTeamMembershipSchema);

// // Project Schema
// const projectSchema = new mongoose.Schema({
//   ProjectID: {
//     type: Number,
//     unique: true,
//   },
//   ProjectName: String,
//   ProjectManagerID: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User', // Reference to the User collection
//   },
// });

// const Project = mongoose.model('Project', projectSchema);

// const UserProjectMembershipSchema=new mongoose.Schema({
//   UserProjectMembershipTypeID:{
//     type:Number,
//     unique:true,
//   },
//   UserID:{
//     type:mongoose.Schema.Types.ObjectId,
//     ref:'User'
//   },
//   ProjectID:{
//     type:mongoose.Schema.Types.ObjectId,
//     ref:"Project"
//   }
// })
// const UserProjectMembership=mongoose.model('UserProjectMembership',UserProjectMembershipSchema)

// const zoneSchema = new mongoose.Schema({
//   ZoneID: {
//     type: Number,
//     unique: true,
//   },
//   ZoneName: String,
// });

// const Zone = mongoose.model('Zone', zoneSchema);

// // ZoneMeetingMembership Schema
// const zoneMeetingMembershipSchema = new mongoose.Schema({
//   ZoneMeetingMembershipID: {
//     type: Number,
//     unique: true,
//   },
//   ZoneID: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Zone', // Reference to the Zone collection
//   },
//   MeetingID: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Meeting', // Reference to the Meeting collection
//   },
// });

// const ZoneMeetingMembership = mongoose.model('ZoneMeetingMembership', zoneMeetingMembershipSchema);

// // Meeting Schema
// const meetingSchema = new mongoose.Schema({
//   MeetingID: {
//     type: Number,
//     unique: true,
//   },
//   Title: String,
//   Description: String,
//   OrganizerID: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User', // Reference to the User collection
//   },
//   ScheduledStartTime: Date,
//   ScheduledEndTime: Date,
//   ActualStartTime: Date,
//   ActualEndTime: Date,
// });

// const Meeting = mongoose.model('Meeting', meetingSchema);

// // participantSchema
// const participantSchema = new mongoose.Schema({
//   ParticipantID: {
//     type: Number,
//     unique: true,
//   },
//   MeetingID: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Meeting', // Reference to the Meeting collection
//   },
//   UserID: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User', // Reference to the User collection
//   },
//   Status: {
//     type: String,
//     enum: ['Attended', 'Not Attended'],
//   },
// });

// const Participant = mongoose.model('Participant', participantSchema);

// // aationItem Schema
// const actionItemSchema = new mongoose.Schema({
//   ActionItemID: {
//     type: Number,
//     unique: true,
//   },
//   MeetingID: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Meeting', // Reference to the Meeting collection
//   },
//   AssignedToUserID: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User', // Reference to the User collection
//   },
//   Description: String,
//   Deadline: Date,
//   Status: {
//     type: String,
//     enum: ['Pending', 'Completed'],
//   },
// });

// const ActionItem = mongoose.model('ActionItem', actionItemSchema);

// //discussion topics schema

// const discussionTopicSchema = new mongoose.Schema({
//   DiscussionTopicID: {
//     type: Number,
//     unique: true,
//   },
//   MeetingID: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Meeting', // Reference to the Meeting collection
//   },
//   Title: String,
//   Description: String,
// });

// const DiscussionTopic = mongoose.model('DiscussionTopic', discussionTopicSchema);

// // DiscussionPoint Schema
// const discussionPointSchema = new mongoose.Schema({
//   DiscussionPointID: {
//     type: Number,
//     unique: true,
//   },
//   DiscussionTopicID: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'DiscussionTopic', // Reference to the DiscussionTopic collection
//   },
//   SpeakerUserID: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User', // Reference to the User collection
//   },
//   Timestamp: Date,
//   Content: String,
// });

// const DiscussionPoint = mongoose.model('DiscussionPoint', discussionPointSchema);

// // EngagementMetrics Schema
// const engagementMetricsSchema = new mongoose.Schema({
//   EngagementMetricsID: {
//     type: Number,
//     unique: true,
//   },
//   MeetingID: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Meeting', // Reference to the Meeting collection
//   },
//   ParticipantUserID: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User', // Reference to the User collection
//   },
//   FacialExpressionsData: String, // You can use JSON type here if needed
//   FacialExpressionsData: {
//     type: mongoose.Schema.Types.Mixed, // JSON data can be stored as Mixed type
//   },
//   ToneOfVoiceData: {
//     type: mongoose.Schema.Types.Mixed, // JSON data can be stored as Mixed type
//   },
//   InvolvementLevelData: {
//     type: mongoose.Schema.Types.Mixed, // JSON data can be stored as Mixed type
//   },
//   Timestamp: {
//     type: Date,
//     default: Date.now,
//   },
// });

// const EngagementMetrics = mongoose.model('EngagementMetrics', engagementMetricsSchema);

// // SuggestedTimeSlot Schema
// const suggestedTimeSlotSchema = new mongoose.Schema({
//   SuggestedTimeSlotID: {
//     type: Number,
//     unique: true,
//   },
//   MeetingID: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Meeting', // Reference to the Meeting collection
//   },
//   ProposedStartTime: Date,
//   ProposedEndTime: Date,
// });

// const SuggestedTimeSlot = mongoose.model('SuggestedTimeSlot', suggestedTimeSlotSchema);

// //speaker recognition
// const speakerRecognitionSchema = new mongoose.Schema({
//   SpeakerRecognitionID: {
//     type: Number,
//     unique: true,
//     required: true,
//   },
//   MeetingID: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Meeting', // Reference to the Meeting model
//     required: true,
//   },
//   SpeakerUserID: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User', // Reference to the User model
//     required: true,
//   },
//   StartTimestamp: {
//     type: Date,
//     required: true,
//   },
//   EndTimestamp: {
//     type: Date,
//     required: true,
//   },
// });
// const SpeakerRecognition = mongoose.model('SpeakerRecognition', speakerRecognitionSchema);


// const postMeetingReportSchema = new mongoose.Schema({
//   PostMeetingReportID: {
//     type: Number,
//     unique: true,
//     required: true,
//   },
//   MeetingID: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Meeting', // Reference to the Meeting model
//     required: true,
//   },
//   EngagementMetricsSummary: {
//     type: String,
//   },
//   SpeakingTimeDistribution: {
//     type: mongoose.Schema.Types.Mixed, // JSON data can be stored as Mixed type
//   },
//   TopicAnalysis: {
//     type: mongoose.Schema.Types.Mixed, // JSON data can be stored as Mixed type
//   },
//   ActionItemsSummary: {
//     type: String,
//   },
//   KeyDecisions: {
//     type: String,
//   },
//   FollowUpTasks: {
//     type: String,
//   },
// });

// const PostMeetingReport = mongoose.model('PostMeetingReport', postMeetingReportSchema);

// const meetingAnalyticsSchema = new mongoose.Schema({
//   MeetingAnalyticsID: {
//     type: Number,
//     unique: true,
//     required: true,
//   },
//   MeetingID: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Meeting', // Reference to the Meeting model
//     required: true,
//   },
//   AverageEngagementLevel: {
//     type: Number,
//   },
//   MostEngagedParticipant: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User', // Reference to the User model
//   },
//   MostTalkativeParticipant: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User', // Reference to the User model
//   },
//   MostDiscussedTopics: {
//     type: mongoose.Schema.Types.Mixed, // JSON data can be stored as Mixed type
//   },
//   MeetingDuration: {
//     type: String, // You can use a string to represent the duration, e.g., "2 hours"
//   },
//   TotalSpeakingTimePerParticipant: {
//     type: mongoose.Schema.Types.Mixed, // JSON data can be stored as Mixed type
//   },
// });

// const MeetingAnalytics = mongoose.model('MeetingAnalytics', meetingAnalyticsSchema);

// const userSentimentSchema = new mongoose.Schema({
//   UserSentimentID: {
//     type: Number,
//     unique: true,
//     required: true,
//   },
//   UserID: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User', // Reference to the User model
//     required: true,
//   },
//   MeetingID: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Meeting', // Reference to the Meeting model
//     required: true,
//   },
//   SentimentScore: {
//     type: Number, // Change this to type Number
//     required: true, // If SentimentScore is required
//   },
//   Timestamp: {
//     type: Date,
//     default: Date.now,
//   },
// });

// const UserSentiment = mongoose.model('UserSentiment', userSentimentSchema);

// const zoneMeetingAnalyticsSchema = new mongoose.Schema({
//   ZoneMeetingAnalyticsID: {
//     type: Number,
//     unique: true,
//     required: true,
//   },
//   ZoneID: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Zone', // Reference to the Zone model
//     required: true,
//   },
//   MeetingID: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Meeting', // Reference to the Meeting model
//     required: true,
//   },
//   ZoneAverageEngagementLevel: {
//     type: Number, // Field for float data (average engagement level)
//     required: true,
//   },
//   ZoneMostEngagedParticipant: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User', // Reference to the User model
//   },
//   ZoneMostTalkativeParticipant: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User', // Reference to the User model
//   },
//   ZoneMostDiscussedTopics: {
//     type: mongoose.Schema.Types.Mixed, // JSON data can be stored as Mixed type
//   },
//   ZoneMeetingDuration: {
//     type: String, // Assuming Interval is a string representation
//   },
//   ZoneTotalSpeakingTimePerParticipant: {
//     type: mongoose.Schema.Types.Mixed, // JSON data can be stored as Mixed type
//   },
// });

// const ZoneMeetingAnalytics = mongoose.model('ZoneMeetingAnalytics', zoneMeetingAnalyticsSchema);

// const userZoneMembershipSchema = new mongoose.Schema({
//   UserZoneMembershipID: {
//     type: Number,
//     unique: true,
//     required: true,
//   },
//   UserID: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User', // Reference to the User model
//     required: true,
//   },
//   ZoneID: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Zone', // Reference to the Zone model
//     required: true,
//   },
// });

// const UserZoneMembership = mongoose.model('UserZoneMembership', userZoneMembershipSchema);

// const userProjectRoleSchema = new mongoose.Schema({
//   UserProjectRoleID: {
//     type: Number,
//     unique: true,
//     required: true,
//   },
//   UserID: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User', // Reference to the User model
//     required: true,
//   },
//   ProjectID: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Project', // Reference to the Project model
//     required: true,
//   },
//   Role: {
//     type: String,
//     enum: ['Developer', 'Designer', 'Manager', 'Other'],
//     required: true,
//   },
// });

// const UserProjectRole = mongoose.model('UserProjectRole', userProjectRoleSchema);

// const UserTeamRoleSchema=new mongoose.Schema({
//   UserTeamRoleID:{
//     type :Number ,
//     unique:true,
//     required:true,
//   },
//   UserID:{
//     type:mongoose.Schema.Types.ObjectId,
//     ref:'User'//Reference to the User Model
//   },
//   ZoneID:{
//     type:mongoose.Schema.Types.ObjectId,
//     ref:"Zone",
//   },
//   Role:{
//     enum:['Participant','Moderator'],
//   }
// });

// const UserTeamRole=mongoose.model('UserTeamRole',UserTeamRoleSchema);

// const UserZoneRoleSchema=new mongoose.Schema({
//   UserZoneRoleId:{
//     type:Number,
//     unique:true,
//     required:true
//   },
//   UserID:{
//     type:mongoose.Schema.Types.ObjectId,
//     ref:'User',//reference to the User Schema
//   },
//   TeamID:{
//     type:mongoose.Schema.Types.ObjectId,
//     ref:'Team'//reference to team schema
//   },
//   Role:{
//     enum:[ "Member","Leader"],
//   }
// });
// const UserZoneRole=mongoose.model('UserZoneRole',UserZoneRoleSchema);

// const userProjectZoneRoleSchema = new mongoose.Schema({
//   UserProjectZoneRoleID: {
//     type: Number,
//     unique: true,
//     required: true,
//   },
//   UserID: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User', // Reference to the User model
//     required: true,
//   },
//   ProjectID: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Project', // Reference to the Project model
//     required: true,
//   },
//   ZoneID: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Zone', // Reference to the Zone model
//     required: true,
//   },
//   Role: {
//     type: String,
//     enum: ['Member', 'Leader', 'Other'],
//     required: true,
//   },
// });

// const UserProjectZoneRole = mongoose.model('UserProjectZoneRole', userProjectZoneRoleSchema);

// const userMeetingRoleSchema = new mongoose.Schema({
//   UserMeetingRoleID: {
//     type: Number,
//     unique: true,
//     required: true,
//   },
//   UserID: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User', // Reference to the User model
//     required: true,
//   },
//   MeetingID: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Meeting', // Reference to the Meeting model
//     required: true,
//   },
//   Role: {
//     type: String,
//     enum: ['Organizer', 'Participant', 'Other'],
//     required: true,
//   },
// });

// const UserMeetingRole = mongoose.model('UserMeetingRole', userMeetingRoleSchema);

// const userProjectMeetingRoleSchema = new mongoose.Schema({
//   UserProjectMeetingRoleID: {
//     type: Number,
//     unique: true,
//     required: true,
//   },
//   UserID: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User', // Reference to the User model
//     required: true,
//   },
//   ProjectID: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Project', // Reference to the Project model
//     required: true,
//   },
//   MeetingID: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Meeting', // Reference to the Meeting model
//     required: true,
//   },
//   Role: {
//     type: String,
//     enum: ['Organizer', 'Participant', 'Other'],
//     required: true,
//   },
// });

// const UserProjectMeetingRole = mongoose.model('UserProjectMeetingRole', userProjectMeetingRoleSchema);

// const userZoneMeetingRoleSchema = new mongoose.Schema({
//   UserZoneMeetingRoleID: {
//     type: Number,
//     unique: true,
//     required: true,
//   },
//   UserID: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User', // Reference to the User model
//     required: true,
//   },
//   ZoneID: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Zone', // Reference to the Zone model
//     required: true,
//   },
//   MeetingID: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Meeting', // Reference to the Meeting model
//     required: true,
//   },
//   Role: {
//     type: String,
//     enum: ['Moderator', 'Participant', 'Other'],
//     required: true,
//   },
// });

// const UserZoneMeetingRole = mongoose.model('UserZoneMeetingRole', userZoneMeetingRoleSchema);

// const userProjectZoneMeetingRoleSchema = new mongoose.Schema({
//   UserProjectZoneMeetingRoleID: {
//     type: Number,
//     unique: true,
//     required: true,
//   },
//   UserID: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User', // Reference to the User model
//     required: true,
//   },
//   ProjectID: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Project', // Reference to the Project model
//     required: true,
//   },
//   ZoneID: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Zone', // Reference to the Zone model
//     required: true,
//   },
//   MeetingID: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Meeting', // Reference to the Meeting model
//     required: true,
//   },
//   Role: {
//     type: String,
//     enum: ['Moderator', 'Participant', 'Other'],
//     required: true,
//   },
// });

// const UserProjectZoneMeetingRole = mongoose.model('UserProjectZoneMeetingRole', userProjectZoneMeetingRoleSchema);

// const customMetricsSchema = new mongoose.Schema({
//   CustomMetricsID: {
//     type: Number,
//     unique: true,
//     required: true,
//   },
//   MetricName: {
//     type: String,
//     required: true,
//   },
//   MetricType: {
//     type: String,
//     enum: ['Number', 'Percentage', 'Other'],
//     required: true,
//   },
//   Description: {
//     type: String,
//     required: true,
//   },
// });

// const CustomMetrics = mongoose.model('CustomMetrics', customMetricsSchema);

// const userCustomMetricsSchema = new mongoose.Schema({
//   UserCustomMetricsID: {
//     type: Number,
//     unique: true,
//     required: true,
//   },
//   UserID: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User',
//     required: true,
//   },
//   CustomMetricsID: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'CustomMetrics',
//     required: true,
//   },
//   Value: {
//     type: Number,
//     required: true,
//   },
//   Timestamp: {
//     type: Date,
//     required: true,
//   },
// });

// const UserCustomMetrics = mongoose.model('UserCustomMetrics', userCustomMetricsSchema);

// const teamCustomMetricsSchema = new mongoose.Schema({
//   TeamCustomMetricsID: {
//     type: Number,
//     unique: true,
//     required: true,
//   },
//   TeamID: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Team',
//     required: true,
//   },
//   CustomMetricsID: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'CustomMetrics',
//     required: true,
//   },
//   Value: {
//     type: Number,
//     required: true,
//   },
//   Timestamp: {
//     type: Date,
//     required: true,
//   },
// });

// const TeamCustomMetrics = mongoose.model('TeamCustomMetrics', teamCustomMetricsSchema);

// const projectCustomMetricsSchema = new mongoose.Schema({
//   ProjectCustomMetricsID: {
//     type: Number,
//     unique: true,
//     required: true,
//   },
//   ProjectID: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Project',
//     required: true,
//   },
//   CustomMetricsID: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'CustomMetrics',
//     required: true,
//   },
//   Value: {
//     type: Number,
//     required: true,
//   },
//   Timestamp: {
//     type: Date,
//     required: true,
//   },
// });

// const ProjectCustomMetrics = mongoose.model('ProjectCustomMetrics', projectCustomMetricsSchema);

// const zoneCustomMetricsSchema = new mongoose.Schema({
//   ZoneCustomMetricsID: {
//     type: Number,
//     unique: true,
//     required: true,
//   },
//   ZoneID: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Zone',
//     required: true,
//   },
//   CustomMetricsID: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'CustomMetrics',
//     required: true,
//   },
//   Value: {
//     type: Number,
//     required: true,
//   },
//   Timestamp: {
//     type: Date,
//     required: true,
//   },
// });

// const ZoneCustomMetrics = mongoose.model('ZoneCustomMetrics', zoneCustomMetricsSchema);
// // module.exports={
// //   User,
// //   UserProjectMembership,
// //   Zone,
// //   ZoneMeetingMembership,
// //   Meeting,
// //   Participant,
// //   ActionItem,
// //   DiscussionTopic,
// //   DiscussionPoint,
// //   EngagementMetrics,
// //   SuggestedTimeSlot,
// //   SpeakerRecognition,
// //   PostMeetingReport,
// //   MeetingAnalytics,
// //   UserSentiment,
// //   ZoneMeetingAnalytics,
// //   UserZoneMembership,
// //   UserProjectRole,
// //   UserTeamRole,
// //   UserZoneRole,
// //   UserProjectZoneRole,
// //   UserMeetingRole,
// //   UserProjectMeetingRole,
// //   UserZoneMeetingRole,
// //   UserProjectZoneMeetingRole,
// //   CustomMetrics,
// //   UserCustomMetrics,
// //   TeamCustomMetrics,
// //   ProjectCustomMetrics,
// //   ZoneCustomMetrics, 
// // }

// // app.get("/users",(req,res) =>{
// //   const html=`
// //   <ul>
// //     ${users.map((user)=>`<li>${user.first_name}</li>`).join("")}
// //   </ul>
// //   `;
// //   res.send(html);
// // });



//   // Remove the user from the array
  
//   // return res.json({status:"pending"});
