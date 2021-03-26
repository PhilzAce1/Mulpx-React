import { authActionTypes } from '../../config/types';

const initialState = {
	token: '',
	isAuthenticated: '',
};

const { LOGIN_SUCCESS, REGISTER_SUCCESS } = authActionTypes;
export default function authReducer(state = initialState, action) {
	switch (action.type) {
		case LOGIN_SUCCESS:
		case REGISTER_SUCCESS:
			return {
				...state,
				email: action.payload.email,
				fullname: action.payload.fullname,
				token: action.payload.token,
				isAuthenticated: true,
			};

		default:
			return state;
	}
}
