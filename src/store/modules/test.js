import { handleActions } from 'redux-actions';

const aaa = 'test/aaa'
const bbb = 'test/bbb'
export const plus = () => ({
    type: aaa,
})
export const minus = () => ({
    type: bbb,
})
const initialState = {
    pending: false,
    error: false,
    data: {
        count:0
    }
}
export default handleActions({
    [aaa]:(state, action) => {
        return {
            ...state,
            data: {
                count:state.data.count+1
            }
        };
    },
    [bbb]:(state, action) => {
        return {
            ...state,
            data: {
                count:state.data.count-1
            }
        };
    },
}, initialState);    