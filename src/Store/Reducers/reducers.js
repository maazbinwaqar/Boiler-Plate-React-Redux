
const INITIAL_STATE = {
    //something
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'USER': 
        return({
            ...state,
            //usrName: action.payload
        })
    }
}