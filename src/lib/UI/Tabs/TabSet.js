import React from 'react';
import PropTypes from 'prop-types';

import classnames from "classnames";
import {isArray} from "util";

import * as Bloomer from "bloomer";

import HashRouter from "../../hashRouter/HashRouter";


class TabSet extends React.Component {

  
    constructor(props) {
        super(props);
    
        //this.toggle = this.toggle.bind(this);
        this.state = {
          activeTab: '0'
        };
      }
    
      toggle = (tab) => {
        if (this.state.activeTab !== tab) {
          this.setState({
            activeTab: tab
          });
        }
      }

      navigateTo = (location) => {
        HashRouter.NavigateTo(location.name, location.options)
      }


      renderTab = (d, i = 0) => {

          const {isPaged, currentLocation} = this.props;

          if (!isPaged) {
          
            return(
                <Bloomer.Tab key={`${i}`} className={classnames("tab", { isActive: this.state.activeTab === `${i}` })}>
                    <Bloomer.TabLink 
                        className={classnames("tab-link")}
                        onClick={() => { this.toggle(`${i}`); }}
                    >
                        {d.props.tabTitle}
                    </Bloomer.TabLink>
                </Bloomer.Tab>             
            )

        } else {
            
            return(
                <Bloomer.Tab key={`${i}`} className={classnames("tab", { isActive: currentLocation === d.props.location })}>
                    <Bloomer.TabLink 
                        className={classnames("tab-link")}
                        onClick={() => { this.navigateTo(d.props.location) }}
                    >
                        {d.props.tabTitle}
                    </Bloomer.TabLink>
                </Bloomer.Tab>                 
            )
        }

      }

      renderTabPane = (d, i = 0) => {
          return(
            <Bloomer.Container key={`${i}`} >
                {d}
            </Bloomer.Container>              
          )
      }

    render(){

        const {isFullWidth, isBoxed, isPaged, children} = this.props;

        if (!isPaged)
            return(
                <div>
                    <Bloomer.Tabs className={classnames("TabSet")} isFullWidth={isFullWidth} isBoxed = {isBoxed}>
                        <Bloomer.TabList>
                            {
                                isArray(this.props.children)
                                    ? this.props.children.map( 
                                        (d, i) => this.renderTab(d, i)
                                    )
                                    : this.renderTab(this.props.children)
                            }
                        </Bloomer.TabList>
                    </Bloomer.Tabs>
                    <Bloomer.Container> 
                        { 
                            
                            isArray(this.props.children)
                                ? this.renderTabPane(children[this.state.activeTab])
                                : this.renderTabPane(children)
                        }             
                    </Bloomer.Container>
                </div>
            )
        else {

            return(
                <div>
                    <Bloomer.Tabs className={classnames("TabSet")} isFullWidth={isFullWidth} isBoxed = {isBoxed}>
                        <Bloomer.TabList>
                            {
                                isArray(this.props.children)
                                    ? this.props.children.map( 
                                        (d, i) => this.renderTab(d, i)
                                    )
                                    : this.renderTab(this.props.children)
                            }
                        </Bloomer.TabList>
                    </Bloomer.Tabs>
                </div>

            )

        }
    }
}


TabSet.defaultProps = {
    isPaged: false,
    isBoxed: false,
    isFullWidth: false,
  };
  
  TabSet.propTypes = {
    isPaged: PropTypes.bool,
    isBoxed: PropTypes.bool,
    isFullWidth: PropTypes.bool,
  }
  

export default TabSet;