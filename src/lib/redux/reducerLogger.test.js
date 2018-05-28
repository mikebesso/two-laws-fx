import reducerLogger from "./reducerLogger";

const newState = {state: "New State"}

function mockReducer(state, action){
    return(newState)
}

const reducer = reducerLogger(mockReducer);

describe(
    "reducerLogger",
    () => {
         it(
            "returns a new state returned by a reducer",
            () => {
                expect(reducer({}, "ACTION")).toEqual(newState)
            }
        )

    }
)