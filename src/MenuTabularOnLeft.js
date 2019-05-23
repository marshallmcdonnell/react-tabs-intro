import React, { Component } from 'react';
import { Grid, Menu, Segment, Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';



export default class MenuTabularOnLeft extends Component {
    constructor() {
        super();
    
        const initialDatasets = {
            "dataset1": {
                title: "Dataset 1",
                display: <Segment>I am Dataset 1</Segment>
            },
            "dataset2": {   
                title: "Dataset 2",
                display: <Segment>I am Dataset 2</Segment>
            }
        }

        const tabName = 'dataset2';

        this.state = { 
            datasets: initialDatasets,
            activeItem: tabName,
            renderTab: initialDatasets[tabName].display
        }
    };

    changeTab(tabName) {
        const renderTab = this.state.datasets[tabName].display
        this.setState({ 
            renderTab: renderTab,
            activeItem: tabName,
         })
    }

    removeTab = () => {
        console.log('index');
    }

    render() {
        const activeItem = this.state.activeItem;
        const renderTab  = this.state.renderTab;      
        
        
        const myArray = [
            <Menu.Item key='dataset1' active={activeItem === 'dataset1'} onClick={() => this.changeTab('dataset1')} as='a'> Dataset1  <Icon name='remove circle' onClick={() => this.removeTab()}/> </Menu.Item>,
            <Menu.Item key='dataset2' active={activeItem === 'dataset2'} onClick={() => this.changeTab('dataset2')} as='a'> Dataset2  <Icon name='remove circle' onClick={() => this.removeTab()}/> </Menu.Item>
        ]
        

        //const myArray = this.createTabs();
        return (
            <div>
                <button>Add Dataset 3</button>
                <Grid>
                    <Grid.Column width={4}>
                        <Menu fluid vertical tabular>
                            {myArray}
                        </Menu>
                    </Grid.Column>

                    <Grid.Column stretched width={12}>
                        {renderTab}
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}
