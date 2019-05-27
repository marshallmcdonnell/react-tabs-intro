import React, { Component } from 'react';
import { Input, Menu, Segment } from 'semantic-ui-react';
import SciDataTabs from "./SciDataTabs";

class MainTabs extends Component {
  state = { activeItem: 'SciData' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu pointing>
        <Menu.Item name='File Upload' active={activeItem === 'File Upload'} onClick={this.handleItemClick} />
          <Menu.Item name='SciData' active={activeItem === 'SciData'} onClick={this.handleItemClick} />
          <Menu.Menu position='right'>
            <Menu.Item>
              <Input icon='search' placeholder='Search...' />
            </Menu.Item>
          </Menu.Menu>
        </Menu>

        <Segment>
            <SciDataTabs />
        </Segment>
      </div>
    )
  }
}

export default MainTabs;