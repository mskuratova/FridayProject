import {Dispatch} from "redux";
import {tableAPI} from "../API/table-api";

type InitialStateType = {
    cardsPackData: CardsPackDataType
    userID: number
}

type ActionTypes =
    GetPackInfoACType
    | GetUserIDACType

export type CardsPackDataType = {
    cardPacks: [{
        "_id": string,
        "user_id": string,
        "user_name": string,
        "private": boolean,
        "name": string,
        "path": string,
        "grade": number,
        "shots": number,
        "cardsCount": number,
        "type": string,
        "rating": number,
        "created": string,
        "updated": string,
        "more_id": string,
        "__v": number,
    }],
    "page": number,
    "pageCount": number,
    "cardPacksTotalCount": number,
    "minCardsCount": number,
    "maxCardsCount": number,
    "packName": string,
    "token": string,
    "tokenDeathTime": number
};

const InitialState: InitialStateType = {
    cardsPackData: {
        cardPacks: [
            {
                "_id": '',
                "user_id": '',
                "user_name": '',
                "private": false,
                "name": '',
                "path": '',
                "grade": 0,
                "shots": 0,
                "cardsCount": 0,
                "type": '',
                "rating": 0,
                "created": '',
                "updated": '',
                "more_id": '',
                "__v": 0,
            }
        ],
        "page": 1,
        "pageCount": 10,
        "cardPacksTotalCount": 0,
        "minCardsCount": 0,
        "maxCardsCount": 10,
        "packName": "",
        "token": '',
        "tokenDeathTime": 0
    },
    userID: 0
}

export const tableReducer = (state: InitialStateType = InitialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case "GET-PACK-INFO":
            return {
                ...state, ...action
            }
        case "GET-USER-ID":
            return {
                ...state, userID: action.userID
            }
        default:
            return state

    }

}

export type GetPackInfoACType = ReturnType<typeof getPackInfoAC>

export const getPackInfoAC = (cardsPackData: CardsPackDataType) => {
    return {
        type: 'GET-PACK-INFO',
        cardsPackData,

    } as const
}
export type GetUserIDACType = ReturnType<typeof getUserIDAC>

export const getUserIDAC = (userID: number) => {
    return {
        type: 'GET-USER-ID',
        userID,

    } as const
}

export const getPackInfoTC = (page: number | undefined = 1, pageCount: number | undefined = 10,
                              min: number | undefined = 0, max: number | undefined= 10,
                              sortPocks: string | undefined="", packName: string |undefined = "") => (dispatch: Dispatch) => {
    tableAPI.getPackInfo(page, pageCount, min, max, sortPocks, packName)
        .then(res => {
            dispatch(getPackInfoAC(res.data))
            console.log(res.data)
        }).catch(err => {
        console.log(err)
    }).finally(() => {

    })
}