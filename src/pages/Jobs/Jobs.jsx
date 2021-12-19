import React, { useState } from 'react'
import { useNavigate } from 'react-router'


// Components
import JobCard from './JobCard'
//Services
import * as jobService  from '../../services/jobService'

  const Jobs = (props) => {
  // const navigate = useNavigate()
  const [jobs, setJobs]= useState([])
  const searchJob = async (e) => {
    e.preventDefault()
    console.log(e.target.value)
    try {
      const data = await jobService.getAllJobs(e.target.value)
      setJobs(data.results)
    } catch (error) {
      throw error
    }
  }
  console.log("line22", jobs);
  
  return (
    <div className="layout">
    <select name="jobs" onChange={searchJob}>
      <option value="">select job</option>
      <option value="IT">IT</option>
      <option value="Software Engineer">Software Engineer</option>
    </select>
    {jobs.map((job)=>(
      <JobCard 
      job={job}
      />
    ))}
    
    </div>
  )
}

export default Jobs
