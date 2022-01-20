import {Dispatch} from "redux";
import {tableAPI} from "../API/table-api";

type InitialStateType = {
    cardsPackData: CardsPackDataType
}

type ActionTypes =
    GetPackInfoACType

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
    "token": string,
    "tokenDeathTime": number
};

const InitialState: InitialStateType = {
    cardsPackData: {
        cardPacks: [{
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
        }],
        "page": 0,
        "pageCount": 0,
        "cardPacksTotalCount": 0,
        "minCardsCount": 0,
        "maxCardsCount": 0,
        "token": '',
        "tokenDeathTime": 0
    },
}

export const tableReducer = (state: InitialStateType = InitialState, action: ActionTypes) => {
    switch (action.type) {
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

export const getPackInfoTC = (minValue: number) => (dispatch: Dispatch) => {
    tableAPI.getPackInfo(minValue)
        .then(res => {
            dispatch(getPackInfoAC(res.data))
            console.log(res.data)
        }).catch(err => {
        console.log(err)
    }).finally(() => {

    })
}