const initialState = { message: "subscribe to simplilearn" };

const reducer = (state = initialState, action) => {
  const newState = { ...state };

  if (action.type === "message change") {
    newState.message = "Thank you for subscribing";
  }

  return newState;
};

export default reducer;
