import React, {useEffect} from "react";
import {TableComponent} from "./TableComponent";
import {useDispatch, useSelector} from "react-redux";
import {CardsPackDataType, getPackInfoTC, getUserIDAC} from "../../Redux/table-reducer";
import {storeType} from "../../Redux/reduxStore";
import {authAPI} from "../../API/auth-api";
import {tableAPI} from "../../API/table-api";

export const TableComponentContainer = () => {

    const tableInfoRowNames = ['Name', 'Cards', 'Last Updated', 'Created by', 'Actions'];
    const dispatch = useDispatch();


    useEffect(() => {
        authAPI.login('bizmestev@mail.ru', 'hapit123', true)
            .then(res => {
                // console.log(res.data)
            })

        setTimeout(() => {
            authAPI.authMe()
                .then(res => {
                    console.log(res.data._id)
                    dispatch(getUserIDAC(res.data._id))
                })
        }, 2000)

        setTimeout(() => {
            dispatch(getPackInfoTC(1, 10));

        }, 4000)


    }, [])


    const packInfo = useSelector<storeType, CardsPackDataType>(state => state.tableReducer.cardsPackData);
    const mydID = useSelector<storeType, number>(state => state.tableReducer.userID);

    const addNewPack = () => {
        tableAPI.addPack()
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const deletePack = (id: string) => {
        tableAPI.deletePack(id)
            .then(res => {
                console.log(res)
            })
            .catch(err =>{
                console.log(err)
            })
    }

    return (
        <TableComponent
            tableInfoRowNames={tableInfoRowNames}
            packInfo={packInfo}
            myID={mydID}
            addNewPack={addNewPack}
            deletePack={deletePack}
        />
    )
}