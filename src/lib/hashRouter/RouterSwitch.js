import React from "react";
import AppStore from "../redux/AppStore";
import _ from "lodash";


class RouteNotFound extends React.Component{ 
    render = () => {

        let text = this.props.locationName;
        if (this.props.defaultNotSpecified) {
            text = text + " default component not specified"
        }
        return(
            <div>
                {text}
            </div>
        )
    }
}

class Loading extends React.Component{
    render = () => {
        return(
            <div>Loading... Thank you for your patience</div>
        )
    }
}

class RouterSwitch extends React.Component{

    render = () => {
        
        const map = this.props.map;
        const location = this.props.hashRouter.location;

        let retVal = null;
        let defaultSpecified = _.has(this.props, "defaultComponent")

        if (!_.has(location, "name")){
            retVal = <Loading />
        } else if (_.has(map, location.name)) {
            retVal = React.createElement(map[location.name], this.props);
        } else if (defaultSpecified)
        {
            retVal =  React.createElement(this.props.defaultComponent, this.props);
        } else {
            retVal = <RouteNotFound locationName={location.name} defaultNotSpecified={!defaultSpecified}/>
        }

        return(retVal);

    }
}



const mapStateToProps = (state) => (
    {
        hashRouter: state.hashRouter
    } 
);



export default AppStore.Connect(mapStateToProps)(RouterSwitch);