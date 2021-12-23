import React from "react";



const JobCard=(props) =>{
  return(
    <div className="job-card">
      <p className="job-title">{props.job.name}</p>
      <p className="job-content">{props.job.company.name}</p>
      <p className="job-content">{props.job.levels[0].name}</p>
      <p className="job-content"> Published Date:{props.job.publication_date}</p>
      <p className="job-content">Location: {props.job.locations[0].name}</p>
      <div>
        <a className="job-button" href={props.job.refs.landing_page}><button className="job-button">Learn more</button></a>
      </div>
    </div>
  )
}
export default JobCard