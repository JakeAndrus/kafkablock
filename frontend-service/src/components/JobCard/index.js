import React from 'react'
import { Card } from 'react-bootstrap'

class JobCard extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{ this.props.job.jobTitle }</Card.Title>
          <Card.Text>
            { this.props.job.company }
          </Card.Text>
        </Card.Body>
      </Card>
    )
  }
}

export default JobCard