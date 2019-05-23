import React, { Component } from 'react';
import { Grid, Menu, Segment, Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

// Initial data
const tabName = 'dataset2';

const initialDatasets = {
    "dataset1": {
        title: "Dataset 1",
        display: <Segment>I am Dataset 1</Segment>,
        isActive: false
    },
    "dataset2": {   
        title: "Dataset 2",
        display: <Segment>I am Dataset 2</Segment>,
        isActive: false
    }
}

// Tab Component
function MenuTab(props) {
    return (
        <Menu.Item key={props.name} active={props.isActive} onClick={props.changeTab} as='a'> 
            {props.title}  <Icon name='remove circle' onClick={props.removeTab}/> 
        </Menu.Item>
    );
}

// Tabs Component
export default class MenuTabularOnLeft extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItem: tabName,
            datasets: initialDatasets,
            display: <h1>Hello, select a tab</h1>
        };
    }

    changeTab(tabName, display) {
        this.setState({ 
            activeItem: tabName,
            display: display,
        })
    }

    removeTab(tabName) {
        console.log("Removing: " + tabName);
    }

    renderTabFromDataset(i, dataset) {
        const activeItem = this.state.activeItem;
        const isActive = (activeItem === dataset) ? true : false;
        return <MenuTab
                key={i}
                name={dataset}
                title={dataset.title}
                display={dataset.display}
                isActive={isActive}
                changeTab={() => this.changeTab(dataset, dataset.display)}
                removeTab={() => this.removeTab(dataset.title)}
            />
    }

    renderTabs() {
        const datasets = this.state.datasets;
        var tabs = [];
        tabs.push(this.renderTabFromDataset(0, datasets['dataset1']));
        tabs.push(this.renderTabFromDataset(1, datasets['dataset2']));
        return tabs;
    }


    render() {
        const activeItem = this.state.activeItem;
        const display  = this.state.display;              
        
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
