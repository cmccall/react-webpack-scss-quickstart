import * as constants from '../actions/authentication';

const authentication = (state = {}, action) => {
    switch (action.type) {
        case constants.LOG_IN:
        {
            return Object.assign({}, state, {
                user: {
                    name: 'John Doe',
                    username: 'jdoe'
                }
            });
        }

        case constants.LOG_OUT:
        {
            return Object.assign({}, state, {
                user: null
            });
        }

        default: {
            return state;
        }
    }
};

export default authentication;