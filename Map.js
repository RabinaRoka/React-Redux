
//Map State

const state = [];

// Change code below this line


// change code below this line
const mapStateToProps = (state)=>{
  return {
    messages: state
  }
}


//Map Dispatch
const addMessage = (message) => {
    return {
      type: 'ADD',
      message: message
    }
  };
  
  // Change code below this line
  const mapDispatchToProps = (dispatch) => {
      return {
          submitNewMessage: (message)=>{
              dispatch(addMessage(message))
          }
      }
  }