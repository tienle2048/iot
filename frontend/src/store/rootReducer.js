let initState={
    
}

const rootReducer=(state =initState,action)=>{
    console.log(action.payload)
    let okla1=action.payload
    initState = {...state,
        okla1}
    return {...state,
        okla1}
}

export default rootReducer