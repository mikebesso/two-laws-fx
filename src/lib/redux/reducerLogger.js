
export default (reducer) => {

    return(
        (state, action) =>
        {
            console.log("REDUCING", reducer.name, action.type, {state, action});
            const newState = reducer(state, action);
            console.log("REDUCED", {newState});
            return(newState);
        }
    )
}