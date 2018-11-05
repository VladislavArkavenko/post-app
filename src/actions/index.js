import uuidv4 from 'uuid/v4';
import { ADD_POST, DELETE_POST, STAR_POST } from './types';

export const createPost = ({title, body}) => ({
	type: ADD_POST,
	payload: {
		id: uuidv4(),
		title,
		body,
		starred: false
	}
});

export const deletePost = id => ({
	type: DELETE_POST,
	payload: {
		id
	}
});

export const starPost = id => ({
	type: STAR_POST,
	payload: {
		id
	}
});