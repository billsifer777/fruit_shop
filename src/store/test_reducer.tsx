const defaultState={
    pcs:1
}
export const test_reducer=(state=defaultState,action: { type: any; payload: number; })=>{
    switch (action.type) {
        case "add":
            return {...state,pcs: state.pcs+action.payload}
        case "get":
            return {...state,pcs: state.pcs=1}
        case "remote":
            return {...state,pcs: state.pcs-action.payload}
        default:
            return state
    }
}