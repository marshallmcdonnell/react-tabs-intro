import React, { Component } from 'react';
import { JsonForms } from '@jsonforms/react';
import { Grid, Menu, Segment} from 'semantic-ui-react';
import SciDataTab from './SciDataTab';
import 'semantic-ui-css/semantic.min.css';

import personSchema from '../schemas/personSchema';
import addressSchema from '../schemas/addressSchema';

import personUISchema from '../schemas/personUISchema';
import addressUISchema from '../schemas/addressUISchema';

class SciDataTabPanel extends Component {
    constructor(props) {
        super(props);

        this.inputPanel = <JsonForms schema={props.schema} uischema={props.uischema} path={props.path}/>
        this.jsonldPanel = <h1>Insert Data</h1>

        this.state = {
            activeItem: 'Input',
            display: this.inputPanel
        }

        this.changeTab = this.changeTab.bind(this);
    }

    renderInputPanel() {
        return <JsonForms schema={this.props.schema} uischema={this.props.uischema} path={this.props.path}/>
    }

    renderJsonLD() {
        return <h1>Insert Data</h1>
    }
    
    
    changeTab(tabName, display) {
        this.setState({ 
            activeItem: tabName,
            display: display,
        })
    }
    
    render() {
        const display = this.state.display;
        const activeItem = this.state.activeItem;
    
        return (
        <div>
            <Menu pointing secondary>
                <Menu.Item 
                    name='Input'
                    active={activeItem === 'Input'}
                    onClick={() => this.changeTab('Input', this.renderInputPanel() )}
                />
                <Menu.Item
                    name='JSON-LD'
                    active={activeItem === 'JSON-LD'}
                    onClick={() => this.changeTab('JSON-LD', this.renderJsonLD() )}
                />
            </Menu>
    
            <Segment>
                {display}
            </Segment>
        </div>
        )
    }
}

// Initial data
const DatasetOne = {
    name: "dataset1",
    title: "Dataset 1",
    display:    
        <SciDataTabPanel 
            schema={personSchema}
            uischema={personUISchema}
            path='person'
        />,
    isActive: false
};
const DatasetTwo = {   
    name: "dataset2",
    title: "Dataset 2",
    display: 
        <SciDataTabPanel 
            schema={addressSchema}
            uischema={addressUISchema}
            path='address'
        />,
    isActive: false
};
const DatasetThree = {   
    name: "dataset3",
    title: "Dataset 3",
    display: 
        <SciDataTabPanel 
            schema={addressSchema}
            uischema={addressUISchema}
            path='address'
        />,
    isActive: false
}

const initialDatasets = [
    DatasetOne,
    DatasetTwo,
]

const initialActiveTab = {
    name: DatasetOne.name,
    display: DatasetOne.display
}

// Tabs Component
class SciDataTabs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItem: initialActiveTab.name,
            display: initialActiveTab.display,
            datasets: initialDatasets,
        };

        this.changeTab = this.changeTab.bind(this);
        this.removeTab = this.removeTab.bind(this);
        this.renderTabFromDataset = this.renderTabFromDataset.bind(this);
        this.renderTabs = this.renderTabs.bind(this);
        this.addDataset = this.addDataset.bind(this);
    }

    changeTab(tabName, display) {
        console.log('parent')
        console.log(display)
        this.setState({ 
            activeItem: tabName,
            display: display,
        })
    }

    removeTab(tabName) {
        const tabs = this.state.datasets;
        var display = this.state.display;
        const newTabs= tabs.filter(obj => obj.name !== tabName);
        if (newTabs === undefined || newTabs.length === 0) {
            display = this.defaultDisplay;
        }
        this.setState({ 
            display: display,
            datasets: newTabs
        })
    }

    renderTabFromDataset(dataset) {
        const activeItem = this.state.activeItem;
        const isActive = (activeItem === dataset.name) ? true : false;
        return <SciDataTab
                key={dataset.name}
                name={dataset.name}
                title={dataset.title}
                display={dataset.display}
                isActive={isActive}
                changeTab={() => this.changeTab(dataset.name, dataset.display)}
                removeTab={() => this.removeTab(dataset.name)}
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
        const display  = this.state.display;             
        
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

export default SciDataTabs;
