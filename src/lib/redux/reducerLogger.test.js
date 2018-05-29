import reducerLogger from "./reducerLogger";

const newState = {state: "New State"}

function mockReducer(state, action){
    return(newState)
}

const logger = reducerLogger(mockReducer);

describe(
    "reducerLogger",
    () => {
         it(
            "returns a new state returned by a reducer",
            () => {
                expect(logger({}, "ACTION")).toEqual(newState)
            }
        )

    }
)