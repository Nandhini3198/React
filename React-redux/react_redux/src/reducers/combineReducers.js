import reducersFirstName from './reducerFirstName';
import reducersLastName from './reducerLastName';
import reducerScore from './reducerScore'


const allReducers = combineReducers({

    reducersFirstName: reducersFirstName,
    reducersLastName: reducersLastName,
    reducerScore: reducerScore

})

export default allReducers