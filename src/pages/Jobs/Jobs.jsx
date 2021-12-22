import React, { useState} from 'react'
import '../../assets/css/jobs.css'

// Components
import JobCard from './JobCard'
//Services
import * as jobService  from '../../services/jobService'

  const Jobs = () => {
  const [jobs, setJobs]= useState([])

  const searchJob = async (e) => {
    e.preventDefault()
    try {
      const data = await jobService.getAllJobs(e.target.value)
      setJobs(data.results)
    } catch (error) {
      throw error
    }
  }


  return (
    <>
      <div className="layout">
        <select name="jobs" onChange={searchJob}>
          <option value="">select job</option>
          <option value="IT">IT</option>
          <option value="Software Engineer">Software Engineer</option>
          <option value="UX">UX</option>
          <option value="Project Management">Project Management</option>
        </select>
      </div>
      <div className="jobs-list">
        {jobs.map((job)=>(
          <JobCard 
            job={job}
          />
        ))}
      </div>
    </>
  )
}

export default Jobs
