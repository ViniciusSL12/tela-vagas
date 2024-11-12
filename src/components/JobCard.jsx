import React from 'react';
import './JobCard.css';

const JobCard = ({ job }) => (
  <div className="job-card">
    <img src={job.logo} alt="Logo" className="job-logo" />
    <h2>{job.title}</h2>
    <p>{job.description}</p>
    <button className="apply-button">Conferir vaga</button>
  </div>
);

export default JobCard;
