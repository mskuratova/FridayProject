type InitialStateType = {
    pageSize: number,
    totalUserCount: number,
    currentPage: number
}

const initialState: InitialStateType = {
    pageSize: 5,
    totalUserCount: 100,
    currentPage: 1
};

type SET_CURRENT_PAGE = {
    type: 'SET-CURRENT-PAGE'
    currentPage: number
}

export const searchReducer = (state:InitialStateType= initialState, action:any):InitialStateType =>{
    switch (action.type) {
        case "SET-CURRENT-PAGE": {
            return {...state, currentPage:action.currentPage}
        }
        default:
            return state
    }
}

export const setCurrentPageAC = (currentPage: number):  SET_CURRENT_PAGE => {
    return {type: 'SET-CURRENT-PAGE',currentPage }
}