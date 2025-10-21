import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Header from '../components/Header'
import Footer from '../components/Footer'

function Home() {
  const navigate = useNavigate();

  return (
    <>
    <Header/>
    <div className="container py-5">
      <h2 className="text-center mb-5">Welcome to MeetApp</h2>

      <div className="row g-4 justify-content-center">
        {/* Create Meeting Card */}
        <div className="col-12 col-md-5 col-lg-4">
          <div className="card h-100 shadow-lg border-primary rounded-4">
            <div className="card-header bg-primary text-white py-3 text-center rounded-top-4">
              <h4 className="my-0 fw-bold">Create Meeting</h4>
            </div>
            <div className="card-body d-flex flex-column justify-content-center align-items-center">
              <p className="card-text mb-4 text-center">
                Start a new meeting instantly and invite your team.
              </p>
              <button 
                type="button" 
                className="btn btn-lg btn-outline-primary w-75"
                onClick={() => navigate('/meetingRoom', { state: { mode: 'create' } })}

              >
                Create Meeting
              </button>
            </div>
          </div>
        </div>

        {/* Join Meeting Card */}
        <div className="col-12 col-md-5 col-lg-4">
          <div className="card h-100 shadow-lg border-success rounded-4">
            <div className="card-header bg-success text-white py-3 text-center rounded-top-4">
              <h4 className="my-0 fw-bold">Join Meeting</h4>
            </div>
            <div className="card-body d-flex flex-column justify-content-center align-items-center">
              <p className="card-text mb-4 text-center">
                Enter a meeting code to join an existing meeting.
              </p>
              <button 
                type="button" 
                className="btn btn-lg btn-outline-success w-75"
                onClick={() => navigate('/meetingRoom', { state: { mode: 'join' } })}

              >
                Join Meeting
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Outlet/>
    <Footer/>
    </>
  );
  
}

export default Home;
