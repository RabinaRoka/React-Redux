const reducer = (state = 5) => {
    return state;
  }
  
  // Redux methods are available from a Redux object
  // For example: Redux.createStore()
  // Define the store here:
  const store = Redux.createStore(
    (state = 5) => state
  );


  //getting state from store 
  const stores = Redux.createStore(
    (state = 5) => state
  );
  
  // Change code below this line
  const currentState = store.getState()


  //action event
  const action = {
    type: 'LOGIN'
  }
  // Define an action creator here:
  const actionCreator = () => {
     return action;
  
  }
   
//dispatch an Action Event
const storee = Redux.createStore(
    (state = {login: false}) => state
  );
  
  const loginAction = () => {
    return {
      type: 'LOGIN'
    }
  };
  
  // Dispatch the action here:
  store.dispatch(loginAction());
  store.dispatch({ type: 'LOGIN' });


  //if else
  const defaultState = {
    login: false
  };
  
  const reducerr = (state = defaultState, action) => {
    // Change code below this line
      if (action.type === "LOGIN") {
      return {
        login: true
      };
    } else {
      return state;
    }
  
    // Change code above this line
  };
  
  const storeee = Redux.createStore(reducer);
  
  const loginActionn = () => {
    return {
      type: 'LOGIN'
    }
  };


  //switch Statement
  const defaultStatee = {
    authenticated: false
  };
  
  const authReducer = (state = defaultState, action) => {
    // change code below this line
    switch (action.type) {
      case "LOGIN":
        return {
          authenticated: true
        };
  
      case "LOGOUT":
        return {
          authenticated: false
        };
  
      default:
        return defaultState;
    }
    // change code above this line
  };
  
  const stors = Redux.createStore(authReducer);
  
  const loginUser = () => {
    return {
      type: "LOGIN"
    };
  };
  
  const logoutUser = () => {
    return {
      type: "LOGOUT"
    };
  };
  