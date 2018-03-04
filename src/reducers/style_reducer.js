const INITIAL_STATE =  {fontSize: 14, fontFamily: 'Arial', backgroundColor:'white'};


export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'CHANGE_FONT_SIZE': {
            return {...state, fontSize: action.payload}
        }

        case 'CHANGE_BACKGROUND_COLOR': {
            return {...state, backgroundColor: action.payload}
        }

        case 'CHANGE_FONT_FAMILY': {
            return {...state, fontFamily: action.payload}
        }

        default: {
            return {...state};
        }
    }
}
