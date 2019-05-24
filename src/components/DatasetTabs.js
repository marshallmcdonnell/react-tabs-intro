import React, { Component } from 'react';
import { Grid, Menu, Segment } from 'semantic-ui-react';
import DatasetTab from './DatasetTab';
import 'semantic-ui-css/semantic.min.css';

// Initial data
const tabName = 'dataset2';

const DatasetOne = {
    name: "dataset1",
    title: "Dataset 1",
    display: <Segment>I am Dataset 1</Segment>,
    isActive: false
};
const DatasetTwo = {   
    name: "dataset2",
    title: "Dataset 2",
    display: <Segment>I am Dataset 2</Segment>,
    isActive: false
};
const DatasetThree = {   
    name: "dataset3",
    title: "Dataset 3",
    display: <Segment>I am Dataset 3</Segment>,
    isActive: false
}

const initialDatasets = [
    DatasetOne,
    DatasetTwo,
]


// Tabs Component
export default class MenuTabularOnLeft extends Component {
    constructor(props) {
        super(props);
        this.defaultDisplay = <h1>Hello, select a tab</h1>;
        this.state = {
            activeItem: tabName,
            datasets: initialDatasets,
            display: this.defaultDisplay
        };
    }

    changeTab(tabName, display) {
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
            console.log("here")
            console.log(display)
            console.log('bye')
        }
        this.setState({ 
            display: display,
            datasets: newTabs
        })
    }

    renderTabFromDataset(dataset) {
        const activeItem = this.state.activeItem;
        const isActive = (activeItem === dataset.name) ? true : false;
        return <DatasetTab
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


    render() {
        const display  = this.state.display;   
        console.log(display)           
        
        var tabs = this.renderTabs();
        console.log(tabs);
        

        //const myArray = this.createTabs();
        return (
            <div>
                <button>Add Dataset 3</button>
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
