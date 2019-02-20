const userReducers = (state = {user: []}, action) => {
	switch(action.type){
		case "ADD_USER_DATA":
		return {user: [...state.user.concat(action.payload)]};
		default: 
		return state;
	}
}

export default userReducers;
