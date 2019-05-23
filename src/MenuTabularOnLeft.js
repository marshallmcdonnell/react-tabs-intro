import React, { Component } from 'react';
import { Grid, Menu, Segment, Icon } from 'semantic-ui-react';

export default class MenuTabularOnLeft extends Component {
    state = { 
      activeItem: 'dataset1',
      renderTab: 'dataset1' 
    }

    changeTab(tabName) {
        this.setState({ 
            renderTab: tabName,
            activeItem: tabName,
         })
    }

    removeTab = () => {
        console.log('index');
    }

    render() {
        const activeItem = this.state.activeItem;
        const renderTab  = this.state.renderTab;

        return (
            <Grid>
                <Grid.Column width={4}>
                    <Menu fluid vertical tabular>
                        <Menu.Item name='dataset1' active={activeItem === 'dataset1'} onClick={() => this.changeTab('dataset1')} as='a'>
                            Dataset1   <Icon name='remove circle' active={activeItem === 'dataset2'} onClick={() => this.removeTab()}/>
                        </Menu.Item>
                        <Menu.Item name='dataset2' active={activeItem === 'dataset2'} onClick={() => this.changeTab('dataset2')} as='a'>
                            Dataset2  <Icon name='remove circle' onClick={() => this.removeTab()}/>
                        </Menu.Item>
                    </Menu>
                </Grid.Column>

                <Grid.Column stretched width={12}>
                    <RenderedContent tabName={renderTab} />
                </Grid.Column>
            </Grid>
        )
    }
}

const RenderedContent = ({ tabName }) => {
    if (tabName === 'dataset1') {
        return <Dataset1 />
    }
    if (tabName === 'dataset2') {
        return <Dataset2 />
    }
}

const Dataset1 = () => (
    <Segment>
        This is Dataset 1
    </Segment>
)

const Dataset2 = () => (
    <Segment>
        This is Dataset 2
    </Segment>
)