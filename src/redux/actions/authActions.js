import { BASE_URL } from 'config/constants';
import axios from 'axios';
import { authActionTypes } from 'config/types';
import { toast } from 'react-toastify';
const { REGISTER_SUCCESS, LOGIN_SUCCESS } = authActionTypes;
/**
 * Setup config/headers and token
 * @param {object} getState
 * @returns header token
 */
export const tokenConfig = (getState) => {
	// Get token from localstorage
	const token = getState().auth.token;
	// Headers
	const config = {
		headers: {
			'Content-type': 'application/json',
		},
	};

	// If token, add to headers
	if (token) {
		config.headers['Authorization'] = `Bearer ${token}`;
	}

	return config;
};
/**
 * Register user and save user details to Store
 * @param {string} data
 * @returns
 */
export const register = (data, callback) => (dispatch) => {
	axios
		.post(`${BASE_URL}/signup`, data)
		.then(({ data }) => {
			if (data.success)
				dispatch({
					type: REGISTER_SUCCESS,
					payload: data,
				});
			toast.success('Successfully Registered');
		})
		.catch((err) => console.error(err));
};

/**
 * login user and save user details to Store
 * @param {object} data
 * @returns void
 */
export const login = (data) => (dispatch) => {
	axios
		.post(`${BASE_URL}/login`, data)
		.then(({ data }) => {
			if (data.success)
				dispatch({
					type: LOGIN_SUCCESS,
					payload: data,
				});
			toast.success('Login Successful');
		})
		.catch((err) => console.error(err));
};

/**
 * Logout user and Clear Store
 * @returns void
 */
export const logout = () => (dispatch) => {};
