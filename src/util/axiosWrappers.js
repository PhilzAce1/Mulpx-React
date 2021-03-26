import axios from 'axios';
import { tokenConfig } from 'redux/actions/authActions';

export class AuthRequestWrapper {
	/**
	 * Axios Get Request
	 * @param {*} url
	 * @param {State of the Store} storeState
	 */
	static get(url, storeState) {}

	/**
	 *
	 * @param {string} url
	 * @param {object} data
	 * @param {object} storeState
	 */
	static post(url, data, storeState) {}
	// static delete() {}
	// static patch() {}
}
