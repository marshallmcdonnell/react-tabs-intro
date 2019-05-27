import React, { Component } from 'react';
import { Input, Menu, Segment } from 'semantic-ui-react';
import SciDataTabs from "./SciDataTabs";

const tabs = {
    "File Upload": <button>Add Dataset 3</button>,
    "SciData" : <SciDataTabs />,
}


class MainTabs extends Component {
    constructor(props) {
        super(props);
        this.tabs = tabs;
        this.defaultDisplay = this.tabs['File Upload'];
        this.state = {
            activeItem: 'File Upload',
            display: this.defaultDisplay
        }

        this.changeTab = this.changeTab.bind(this);
    }

    changeTab = (e, { name }) => this.setState({
        activeItem: name,
        display: this.tabs[name],
    })

  render() {
    const activeItem = this.state.activeItem;
    const display = this.state.display;

    return (
      <div>
        <Menu tabular>
            <Menu.Item
                name='File Upload'
                active={activeItem === 'File Upload'}
                onClick={this.changeTab}
            />
            <Menu.Item
                name='SciData'
                active={activeItem === 'SciData'}
                onClick={this.changeTab}
            />
          <Menu.Menu position='right'>
            <Menu.Item>
              <Input icon='search' placeholder='Search...' />
            </Menu.Item>
          </Menu.Menu>
        </Menu>

        <Segment>
            {display}
        </Segment>
      </div>
    )
  }
}

export default MainTabs;