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
				token: action.payload.accessToken,
				isAuthenticated: true,
			};

		default:
			return state;
	}
}
