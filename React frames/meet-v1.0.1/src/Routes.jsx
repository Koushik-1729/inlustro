import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const TranscriptsThree = React.lazy(() => import("pages/TranscriptsThree"));
const TranscriptsOne = React.lazy(() => import("pages/TranscriptsOne"));
const Transcripts = React.lazy(() => import("pages/Transcripts"));
const TranscriptsFour = React.lazy(() => import("pages/TranscriptsFour"));
const TranscriptsTwo = React.lazy(() => import("pages/TranscriptsTwo"));
const Duration = React.lazy(() => import("pages/Duration"));
const DurationTwo = React.lazy(() => import("pages/DurationTwo"));
const TeamDashboard = React.lazy(() => import("pages/TeamDashboard"));
const GoalProgress = React.lazy(() => import("pages/GoalProgress"));
const DurationOne = React.lazy(() => import("pages/DurationOne"));
const HostedMeetings = React.lazy(() => import("pages/HostedMeetings"));
const Team = React.lazy(() => import("pages/Team"));
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
          <Route path="/team" element={<Team />} />
          <Route path="/hostedmeetings" element={<HostedMeetings />} />
          <Route path="/durationone" element={<DurationOne />} />
          <Route path="/goalprogress" element={<GoalProgress />} />
          <Route path="/teamdashboard" element={<TeamDashboard />} />
          <Route path="/durationtwo" element={<DurationTwo />} />
          <Route path="/duration" element={<Duration />} />
          <Route path="/transcriptstwo" element={<TranscriptsTwo />} />
          <Route path="/transcriptsfour" element={<TranscriptsFour />} />
          <Route path="/transcripts" element={<Transcripts />} />
          <Route path="/transcriptsone" element={<TranscriptsOne />} />
          <Route path="/transcriptsthree" element={<TranscriptsThree />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
