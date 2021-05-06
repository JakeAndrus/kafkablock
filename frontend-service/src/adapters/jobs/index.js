import { get } from '../xhr'

export function getJobs() {
  // return get('kafkaurl')
  return [
    {
      jobTitle: 'Software Engineer',
      company: 'Splunk'
    },
    {
      jobTitle: 'Data Scientist',
      company: 'Twitter'
    }
  ]
}