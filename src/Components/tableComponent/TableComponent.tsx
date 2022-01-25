import React from "react"
import s from './tableComponent.module.css'
import {CardsPackDataType} from "../../Redux/table-reducer";

type PropsType = {
    tableInfoRowNames: string[]
    packInfo: CardsPackDataType
    myID: number
    addNewPack: () => void
    deletePack: (id: string) => void
}

export const TableComponent = ({tableInfoRowNames, packInfo, myID, addNewPack, deletePack}: PropsType) => {
    return (
        <div className={s.tableInfoRowContainer}>
            <button onClick={() => addNewPack()}>Add New Pack</button>

            <ul className={s.tableComponentList}>
                <li className={`${s.tableComponentItem} ${s.tableHead}`}>
                    <div className={s.firstColumn}>
                        {tableInfoRowNames[0]}
                    </div>
                    <div className={s.secondColumn}>
                        {tableInfoRowNames[1]}
                    </div>
                    <div className={s.thirdColumn}>
                        {tableInfoRowNames[2]}
                    </div>
                    <div className={s.fourthColumn}>
                        {tableInfoRowNames[3]}
                    </div>
                    <div className={s.fifthColumn}>
                        {tableInfoRowNames[4]}
                    </div>
                </li>
                {packInfo.cardPacks.map((item, index) => {
                    return (
                        <li className={`${s.tableComponentItem} ${s.tableItem}`} key={item._id}>
                            <div className={s.firstColumn}>
                                {item.name}
                            </div>
                            <div className={s.secondColumn}>
                                {item.cardsCount}
                            </div>
                            <div className={s.thirdColumn}>
                                {item.updated}
                            </div>
                            <div className={s.fourthColumn}>
                                {item.user_name}
                            </div>
                            <div className={s.fifthColumn}>
                                <div className={s.actionButtons}
                                     style={{display: item.user_id === myID.toString() ? 'block' : 'none'}}>
                                    <button onClick={() => deletePack(item._id)}>Delete</button>
                                    <button>Edit</button>
                                </div>
                                <button>Learn</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}