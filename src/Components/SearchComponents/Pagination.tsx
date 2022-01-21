import React from 'react'
import {state} from "../PristPange/TestTable";
import {useSelector} from "react-redux";
import {storeType} from "../../Redux/reduxStore";


const Pagination = () => {
    let pageSize = 5
        // useSelector((store: storeType) => store.searchReducer.pageSize)
    let totalUserCount = useSelector((store: storeType) => store.searchReducer)
    let currentPage = useSelector((store: storeType) => store.searchReducer)
    let pagesCount = Math.ceil(state.productTotalCount / pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
console.log(state.productTotalCount)
    return (
        <div>

            {pages.map(p=> {
                return <span>{p}</span>
            })}
            {/*<Pagination*/}
            {/*    count={pagesCount}     //The total number of pages.*/}
            {/*    variant="outlined"*/}
            {/*    page={currentPage}  //The current page.*/}
            {/*    boundaryCount={1}   //Number of always visible pages at the beginning and end.*/}
            {/*    defaultPage={1}*/}
            {/*    onChange={(e: ChangeEvent<any>, p: number) => onChangeCurrentPage(p)} //event: The event source of the callback.*/}
            {/*    //page: The page selected.*/}
            {/*/>*/}
        </div>
    )
}


export default Pagination