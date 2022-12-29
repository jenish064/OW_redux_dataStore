// this is the store where states are being changed

const initialState = {
    counter: 0,
    addPressed: 0,
    subPressed: 0,
    pace: 1
}

const Reducer = (state=initialState, action) => {
    switch (action.type) {
        case 'INCREASE': 
        return {...initialState,
            counter: state.counter - (state.pace * -1),
            addPressed: state.addPressed + 1,
            subPressed: state.subPressed,
            pace: state.pace}
            
        case 'DECREASE':
        return {...initialState,
            counter: state.counter - state.pace, subPressed: state.subPressed + 1,
            addPressed: state.addPressed,
            pace: state.pace}

        case 'SET_PACE':   
        return {...initialState,
            counter: state.counter,
            subPressed: state.subPressed,
            addPressed: state.addPressed,
            pace: action.payload}

        default :
            return {...initialState, state}
    }
}

export default Reducer;