import React, { Component } from 'react'
import { Dropdown, Grid, Segment } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

const options = [
    { key: '1', value: '1', text: 'Task 1' },
    { key: '2', value: '2', text: 'Task 2' },
    { key: '3', value: '3', text: 'Task 3' },
    { key: '4', value: '4', text: 'Task 4' },
    { key: '5', value: '5', text: 'Task 5' },
]

export default class NavButton extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state

    return (
      <Grid columns={2}>
        <Grid.Column>
          <Dropdown
            className="nav-button"
            onChange={this.handleChange}
            options={options}
            placeholder='Task 1'
            selection
            value={value}
          />
        </Grid.Column>
        {/* <Grid.Column>
          <Segment secondary>
            <pre>Current value: {value}</pre>
          </Segment>
        </Grid.Column> */}
      </Grid>
    )
  }
}