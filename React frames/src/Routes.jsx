import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Transcripts = React.lazy(() => import("pages/Transcripts"));
const TranscriptsOne = React.lazy(() => import("pages/TranscriptsOne"));
const TranscriptsThree = React.lazy(() => import("pages/TranscriptsThree"));
const TranscriptsTwo = React.lazy(() => import("pages/TranscriptsTwo"));
const Duration = React.lazy(() => import("pages/Duration"));
const TeamDashboard = React.lazy(() => import("pages/TeamDashboard"));
const GoalProgress = React.lazy(() => import("pages/GoalProgress"));
const HostedMeetings = React.lazy(() => import("pages/HostedMeetings"));
const Teams = React.lazy(() => import("pages/Teams"));
const MeetingType = React.lazy(() => import("pages/MeetingType"));
const Login = React.lazy(() => import("pages/Login"));
const SignUp = React.lazy(() => import("pages/SignUp"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/login" element={<Login />} />
          <Route path="/meetingtype" element={<MeetingType />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/hostedmeetings" element={<HostedMeetings />} />
          <Route path="/goalprogress" element={<GoalProgress />} />
          <Route path="/teamdashboard" element={<TeamDashboard />} />
          <Route path="/duration" element={<Duration />} />
          <Route path="/transcriptstwo" element={<TranscriptsTwo />} />
          <Route path="/transcriptsthree" element={<TranscriptsThree />} />
          <Route path="/transcriptsone" element={<TranscriptsOne />} />
          <Route path="/transcripts" element={<Transcripts />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
