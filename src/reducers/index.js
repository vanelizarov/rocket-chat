import { combineReducers } from 'redux';

import users from './users';
import bills from './bills';
import messages from './messages';
import investments from './investments';

export default combineReducers({
    users,
    bills,
    messages,
    investments
});

