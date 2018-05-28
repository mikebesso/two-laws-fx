import React from "react";
import AppStore from "./AppStore"
import { combineReducers } from 'redux';
import { mount } from "enzyme";

import { Provider, connect } from 'react-redux';

const actions = {
    types: {
        DEC: "DEC",
        INC: "INC",
        SET: "SET"
    },
    increment: () => {return({type: "INC"})},
    decrement: () => {return({type: "DEC"})},
    set: (value) => {return({type: "SET", payload: value})}
}

const counterReducer = (state = {value: 0}, action) => {
    switch (action.type) {
        case "INC": return({value: state.value + 1});
        case "DEC": return({value: state.value - 1});
        case "SET": return({value: action.payload});
        default: return(state);
    }
}

const reducers = combineReducers(
    {
        counter: counterReducer
    }
);



describe(
    "AppStore", 

    () => {

        const Store = new AppStore(actions, reducers);

        it(
            "The AppStore was created successfully",
            () => {
                expect(AppStore.store).not.toBe(null);
                expect(AppStore.reducers).not.toBe(null);
                expect(AppStore.actions).not.toBe(null);
            }
        );


        it(
            "Creating an AppStore twice throws an exception",
            () => {
                expect(
                    () => {new AppStore(actions, reducers)}
                ).toThrow("There can be only one AppStore");
            }
        );

        it(
            "Can SET value through the store",
            () => {
                AppStore.Dispatch(actions.set(5));
                expect(AppStore.GetState().counter.value).toEqual(5);
            }
        );

        it(
            "Can INC value through the store",
            () => {
                AppStore.Dispatch(actions.set(5));
                AppStore.Dispatch(actions.increment());
                expect(AppStore.GetState().counter.value).toEqual(6);
            }
        )
    }
)


class Counter extends React.Component {
    
    componentWillMount(){
        this.props.set(30);
    }

    render = () => {
        return(
            <div>{this.props.counter.value}</div>
        )
    }


}

const CounterMapStateToProps = (state) => {
    return({counter: state.counter})
}

//const ConnectedCounter = AppStore.Connect(IncrementorMapStateToProps)(Counter);

//const ConnectedCounter = connect(CounterMapStateToProps, AppStore.actions)(Counter);
const ConnectedCounter = AppStore.Connect(CounterMapStateToProps)(Counter);

describe(
    "AppStore Provider", 
    () => {
        const wrapper = mount(<AppStore.Provider><ConnectedCounter /></AppStore.Provider>);
    }
)