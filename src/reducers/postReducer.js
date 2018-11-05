import { ADD_POST, DELETE_POST, STAR_POST } from '../actions/types';

export default function postReducer(state = [], action){
	switch(action.type){
		case ADD_POST:
			return [...state, action.payload];
		case DELETE_POST:
			return state.filter(post => post.id !== action.payload.id);
		case STAR_POST:
			return state.map(post => {if(post.id === action.payload.id) { post.starred = !post.starred }
									  									  return post})
		default:
			return state;
	}
}