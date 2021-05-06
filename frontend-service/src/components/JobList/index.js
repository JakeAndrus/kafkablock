import React from 'react'
import { ListGroup } from 'react-bootstrap'
import JobCard from '../JobCard'

class JobList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const jobs = []
    for (const [index, value] of this.props.jobs.entries()) {
      jobs.push(
        (
          <ListGroup.Item key={ index }>
            <JobCard job={ value }></JobCard>
          </ListGroup.Item>
        )
      )
    }

    return (
      <ListGroup>
        { jobs }
      </ListGroup>
    )
  }
}

export default JobList