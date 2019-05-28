import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Menu } from 'semantic-ui-react';
import { JsonForms } from '@jsonforms/react';
import {getData, JsonFormsState} from '@jsonforms/core';

import { SciDataTab, SciDataTabPanel } from './SciDataTab';
import 'semantic-ui-css/semantic.min.css';

import personSchema from '../schemas/personSchema';
import addressSchema from '../schemas/addressSchema';

import personUISchema from '../schemas/personUISchema';
import addressUISchema from '../schemas/addressUISchema';

// Initial data
const DatasetOne = {
    name: "dataset1",
    title: "Dataset 1",
    schema: personSchema,
    uischema: personUISchema,
    path: 'person'
};

const DatasetTwo = {   
    name: "dataset2",
    title: "Dataset 2",
    schema: addressSchema,
    uischema: addressUISchema,
    path: 'address'
}

const DatasetThree = {   
    name: "dataset3",
    title: "Dataset 3",
    schema: personSchema,
    uischema: personUISchema,
    path: 'person'
}

const initialDatasets = [
    DatasetOne,
    DatasetTwo,
]

// Tabs Component
class SciDataTabs extends Component {
    constructor(props) {
        super(props);

        const name = DatasetOne.name;
        const schema = DatasetOne.schema;
        const uischema = DatasetOne.uischema;
        const path = DatasetOne.path;

        this.state = {
            activeItem: name,
            datasets: initialDatasets,
            childActiveItem: 'Input',
            childDisplay: this.renderJsonForm(schema, uischema, path)
        };

        this.defaultDisplay = <h1> </h1>

        this.changeTab = this.changeTab.bind(this);
        this.changeChildTab = this.changeChildTab.bind(this);
        this.removeTab = this.removeTab.bind(this);
        this.renderTabFromDataset = this.renderTabFromDataset.bind(this);
        this.renderTabs = this.renderTabs.bind(this);
        this.addDataset = this.addDataset.bind(this);
    }

    changeTab(tabName ) { this.setState({ activeItem: tabName }) }

    changeChildTab(tabName) {
        this.setState({ childActiveItem: tabName })
    }

    removeTab(tabName) {
        const activeItem = this.state.activeItem;
        const isActive = (activeItem === tabName) ? true : false;
        const tabs = this.state.datasets;
        const newTabs= tabs.filter(obj => obj.name !== tabName);

        // If no more tabs, return
        if (newTabs.length === 0) {
            this.setState({
                datasets: []
            })
            return;
        }

        // Check if we deleted the active tab
        var activeTabName;
        if (isActive) {
            activeTabName = newTabs[0].name;
        } else {
            activeTabName = tabName;
        }
        this.setState({
            datasets: newTabs,
            activeItem: activeTabName
        })
    }

    renderTabFromDataset(dataset) {
        const activeItem = this.state.activeItem;
        const isActive = (activeItem === dataset.name) ? true : false;
        return <SciDataTab
                key={dataset.name}
                name={dataset.name}
                title={dataset.title}
                isActive={isActive}
                changeTab={() => this.changeTab(dataset.name)}
                removeTab={() => this.removeTab(dataset.name)}
            />
    }

    renderJsonForm(schema, uischema, path) {
        return <JsonForms schema={schema} uischema={uischema} path={path}/>
    }

    renderActiveTabPanel() {
        const activeItem = this.state.activeItem;
        const datasets = this.state.datasets;
        const activeDatasetArray = datasets.filter(obj => (activeItem === obj.name));
        const dataset = activeDatasetArray[0];

        const childActiveItem = this.state.childActiveItem;

        if (dataset === undefined) {
            return this.defaultDisplay
        }

        const dataForDataset = this.props.data[dataset.path];

        var display;
        if(childActiveItem === 'Input') {
            display=this.renderJsonForm(dataset.schema, dataset.uischema, dataset.path)
        } else {
            display=JSON.stringify(dataForDataset, null, 2) 
        }

        return <SciDataTabPanel 
            activeItem={childActiveItem}
            display={display}
            changeChildTab={this.changeChildTab}
        />
    }

    renderTabs() {
        const datasets = this.state.datasets;
        const tabs = datasets.map(dataset => this.renderTabFromDataset(dataset));
        return tabs;
    }

    addDataset() {
        const datasets = this.state.datasets;
        datasets.push(DatasetThree);
        this.setState({
            datasets: datasets
        })
    }

    render() {
        const display = this.renderActiveTabPanel();            
        var tabs = this.renderTabs();     

        //const myArray = this.createTabs();
        return (
            <div>
                <button onClick={this.addDataset}> Add Dataset 3</button>
                <Grid>
                    <Grid.Column width={4}>
                        <Menu fluid vertical tabular>
                            {tabs}
                        </Menu>
                    </Grid.Column>

                    <Grid.Column stretched width={12}>
                        {display}
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = (state: JsonFormsState) => {
    return { data: getData(state) }
  };
  
  export default connect(mapStateToProps)(SciDataTabs);
