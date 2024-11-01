import React, { useState } from 'react';
import JobCard from './JobCard';
import './JobCarousel.css';

const JobCarousel = ({ jobs }) => {
  const [index, setIndex] = useState(0);

  const nextJob = () => setIndex((index + 1) % jobs.length);
  const prevJob = () => setIndex((index - 1 + jobs.length) % jobs.length);

  return (
    <div className="carousel">
      <button onClick={prevJob} className="arco arco-esquerdo">◀</button>
      <JobCard job={jobs[index]} />
      <button onClick={nextJob} className="arco arco-direito">▶</button>
    </div>
  );
};

export default JobCarousel;