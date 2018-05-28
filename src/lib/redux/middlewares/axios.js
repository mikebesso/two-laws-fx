import axiosMiddleware from 'redux-axios';



const backend = {
    axios: {
      baseURL: 'http://localhost:8080',
      responseType: 'json',
    },
    //opt
    options: {
      interceptors: {
        request: [
          (getState, config) => {
              console.log("axios", getState())
            if (getState().user.token) {
              config.headers['Authorization'] = 'Bearer ' + getState().user.token
            }
  
            return config
          }
        ],
        response: [
          (getState, response) => {
            // do something here if we want         
  
            return response
          }
        ]
      }
    }
};
  





const clients = {
    default: backend,
    backend
}


const externalInterfaceMiddleware = axiosMiddleware(clients);

export default externalInterfaceMiddleware;