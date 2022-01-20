import React, {useEffect} from "react";
import {TableComponent} from "./TableComponent";
import {useDispatch} from "react-redux";
import {getPackInfoTC} from "../../Redux/table-reducer";

export const TableComponentContainer = () => {

    const tableInfoRowNames = ['Name', 'Cards', 'Last Updated', 'Created by', 'Actions'];
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPackInfoTC(3))
    }, [])

    return (
        <TableComponent
            tableInfoRowNames={tableInfoRowNames}
        />
    )
}