/**
 * Articles Reducer
 */
import { ADD_ARTICLE, DELETE_ARTICLE, EDIT_ARTICLE } from '../actions/types'
/**
 * initial articles
 */
const INIT_STATE = {
    articles: JSON.parse(localStorage.getItem('articles')) || []
};

export default (state = INIT_STATE, {type, payload }) => {
    switch (type) {
        case ADD_ARTICLE: case DELETE_ARTICLE: case EDIT_ARTICLE:
            const {success, articles} = payload;
            if(success) {
                return { articles };
            }
        break;
    }
    return { ...state };
}
