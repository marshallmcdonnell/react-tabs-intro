import React from 'react';
import { Menu, Segment } from 'semantic-ui-react';
import SciDataTabs from "./SciDataTabs";
import { initialDatasets } from './InitialDatasets'

// Tabs
const defaultDisplay = <button>Add Dataset 3</button>;

class MainTabs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeItem: 'File Upload',
      display: defaultDisplay,
      datasets: initialDatasets
    }

    this.changeTab = this.changeTab.bind(this);
    this.updateDatasets = this.updateDatasets.bind(this);
    this.setState = this.setState.bind(this);
  }

  changeTab(name) {
    var display;
    if (name === 'File Upload') {
      display = <button>Add Dataset 3</button>
    } else if( name === 'SciData') {
      display = <SciDataTabs
        datasets={this.state.datasets}
        handleUpdateDatasets={this.updateDatasets}
      />
    }
    this.setState({
      activeItem: name,
      display: display,
    })
  }

  updateDatasets(datasets) { 
    const display = <SciDataTabs
      datasets={datasets}
      handleUpdateDatasets={this.updateDatasets}
    />
    this.setState({ datasets: datasets, display: display });
  }

  render() {
    const activeItem = this.state.activeItem;
    const display = this.state.display;

    return (
      <div>
        <Menu tabular>
            <Menu.Item
                name='File Upload'
                active={activeItem === 'File Upload'}
                onClick={() => this.changeTab('File Upload')}
            />
            <Menu.Item
                name='SciData'
                active={activeItem === 'SciData'}
                onClick={() => this.changeTab('SciData')}
            />
        </Menu>

        <Segment>
            {display}
        </Segment>
      </div>
    )
  }
}

export default MainTabs;