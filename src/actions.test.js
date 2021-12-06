import * as actions from './actions';
import { CHANGE_SEARCH_FIELD, REQUEST_ROBOTS_PENDING } from './constants';
import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

const mockStore = configureMockStore([thunkMiddleware])
describe('SearchField', () => {
    it('should create an action to search robots', () => {
        const text = 'woo';
        const expectedAction = {
            type: CHANGE_SEARCH_FIELD,
            payload: text
        }
        expect(actions.setSearchField(text)).toEqual(expectedAction)
    })
})

describe('Request Robots', () => {

    it('handles requesting robots pending', () => {
        const store = mockStore();
        store.dispatch(actions.requestRobots());
        const action = store.getActions();
        const expectedAction = {
            type: REQUEST_ROBOTS_PENDING
        }
        console.log(action)
        expect(action[0]).toEqual(expectedAction)
    })

    it('handles requestiong robots API sucess', () => {
        
    })
})