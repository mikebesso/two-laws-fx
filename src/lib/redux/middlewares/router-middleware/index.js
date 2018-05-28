
import actionTypes from "./action-types";
import createHistory from 'history/createBrowserHistory'




export const history = createHistory();

/**
 * This middleware captures CALL_HISTORY_METHOD actions to redirect to the
 * provided history object. This will prevent these actions from reaching your
 * reducer or any middleware that comes after this one.
 */
function createRouterMiddleware(history) {
  return(
    () => {
      return(
        (next) => {
          return(
            (action) => {
              if (action.type !== actionTypes.CALL_HISTORY_METHOD) {
                return next(action);
              }
              const { payload: { method, args } } = action;
              history[method](...args);
            }
          )
        }  
      )
    }
  )
}


const routerMiddleware = createRouterMiddleware(history)


export default routerMiddleware;

