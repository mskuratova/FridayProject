import React from "react"
import s from './tableComponent.module.css'

type PropsType = {
    tableInfoRowNames: string[]
}

export const TableComponent = ({tableInfoRowNames}: PropsType) => {
    return (
        <div className={s.tableInfoRowContainer}>
            <ul className={s.tableInfoRowList}>
                {tableInfoRowNames.map((nameItem, index) => {
                    return (
                        <li className={s.tableInfoRowItem} key={index}>
                            {nameItem}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}