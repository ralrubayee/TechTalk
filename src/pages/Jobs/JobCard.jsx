import React from "react";



const JobCard=(props) =>{
  return(
    <div className="job-card">
      <p className="card-title">{props.job.name}</p>
      <p className="card-content">{props.job.company.name}</p>
      <p className="card-content">{props.job.levels[0].name}</p>
      <p className="card-content"> Published Date:{props.job.publication_date}</p>
      <p className="card-content">{props.job.locations[0].name}</p>
      <a className="card-content" href={props.job.refs.landing_page}><button>leran more</button></a>
    </div>
  )
}
export default JobCard