import {
	SET_TOKEN,
    CLEAR_TOKEN
} from '../actionTypes';

const initialState = {
	user:{
		token:''
	},
	authenticated:false
};

export default function auth(state = initialState, action) {
    switch (action.type) {
		case SET_TOKEN:{
			const { token } = action.payload;
			if (token === undefined) throw new Error("Redux Reducer Error: token is undefined.");
			localStorage.setItem('AUTH_TOKEN', token);
			return {
                user: {
					token: token
				},
				authenticated: true,
            };
		}
        case CLEAR_TOKEN:{
			localStorage.clear();
			return  {
                user: {
					token: ''
				},
				authenticated: false,
            };
		}
        default: {
            return state;
        }
    }
}

