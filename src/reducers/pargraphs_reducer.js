import { paragraphs } from '../paragraphs';
const INITIAL_STATE = [...paragraphs];

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'DELETE_LAST_PARAGRAPH': {
        paragraphs.pop();
        console.log('state', state)
        return [...paragraphs];
    }

    default: {
        return state;
    }
}
}