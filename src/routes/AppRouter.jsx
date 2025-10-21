import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import MeetingRoom from "../pages/MeetingRoom";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/meetingRoom' element={<MeetingRoom />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
