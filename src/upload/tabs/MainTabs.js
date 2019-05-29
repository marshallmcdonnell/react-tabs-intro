import React from 'react';
import { Menu, Segment } from 'semantic-ui-react';
import SciDataTabs from "../scidata-tabs/SciDataTabs";
import * as Data from '../../constants/InitialDatasets';

// Tabs
const defaultDisplay = <button>Add Dataset 3</button>;

class MainTabs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeItem: 'File Upload',
      display: defaultDisplay,
      datasets: Data.initialDatasets
    }

    this.changeTab = this.changeTab.bind(this);
    this.updateDatasets = this.updateDatasets.bind(this);
    this.addDataset = this.addDataset.bind(this);
    this.setState = this.setState.bind(this);
  }

  renderSciDataTab(datasets) {
    return <SciDataTabs
      datasets={datasets}
      handleUpdateDatasets={this.updateDatasets}
    />
  }

  renderFileUpload() {
    return <button onClick={this.addDataset}> Add Dataset 3</button>
  }

  changeTab(name) {
    var display;
    if (name === 'File Upload') {
      display = this.renderFileUpload();
    } else if( name === 'SciData') {
      display = this.renderSciDataTab(this.state.datasets);
    }
    this.setState({
      activeItem: name,
      display: display,
    })
  }

  updateDatasets(datasets) { 
    const display = this.renderSciDataTab(datasets);
    this.setState({ 
      datasets: datasets,
      display: display
    });
  }

  addDataset() {
    const datasets = this.state.datasets;
    datasets.push(Data.DatasetThree);
    this.setState({
        datasets: datasets
    })
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