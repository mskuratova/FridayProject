import React, {ChangeEvent, useState} from "react";
import {TableComponent} from "./TableComponent";
import {useDispatch, useSelector} from "react-redux";
import {CardsPackDataType, getPackInfoTC} from "../../Redux/table-reducer";
import {storeType} from "../../Redux/reduxStore";
import {tableAPI} from "../../API/table-api";
import PriceRange from "../SearchComponents/PriceRange";
import {Pagination} from "@mui/material";


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
    let min = useSelector<storeType, number>(state => state.tableReducer.cardsPackData.minCardsCount)
    let max = useSelector<storeType, number>(state => state.tableReducer.cardsPackData.maxCardsCount)
    let page = packInfo.page
    let cardPacksTotalCount = packInfo.cardPacksTotalCount
    let pageSize = packInfo.pageCount
    let pagesCount = Math.ceil(cardPacksTotalCount / pageSize)


    const addNewPack = () => {
        tableAPI.addPack()
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }
    const onChangeCurrentPage = (page: number) => {
        dispatch(getPackInfoTC(page))
        console.log(page)
    }

    const deletePack = (id: string) => {
        tableAPI.deletePack(id)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }
    const searchByName = (packName: string) => {
            dispatch(getPackInfoTC(page, 10, min, max, "", packName));
    }


    return (
        <div>
            <PriceRange/>
            <TableComponent
                tableInfoRowNames={tableInfoRowNames}
                packInfo={packInfo}
                myID={mydID}
                addNewPack={addNewPack}
                deletePack={deletePack}
                searchByName={searchByName}
            />
            <Pagination
                count={pagesCount}     //The total number of pages.
                variant="outlined"
                page={page}  //The current page.
                boundaryCount={1}   //Number of always visible pages at the beginning and end.
                defaultPage={1}
                onChange={(e: ChangeEvent<any>, p: number) => onChangeCurrentPage(p)} //event: The event source of the callback.
                //page: The page selected.
            />
        </div>
    )
}