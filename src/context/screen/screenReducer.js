export function screenReducer(state, action){
    switch(action.type){
        case 'changeScreen':
            return {...state, payload}
        default: return state
    }
}