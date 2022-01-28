import React, {ChangeEvent, useEffect, useState} from "react"
import s from './tableComponent.module.css'
import {CardsPackDataType} from "../../Redux/table-reducer";
import {useDebounce} from "../hooks/useDebounce";

type PropsType = {
    tableInfoRowNames: string[]
    packInfo: CardsPackDataType
    myID: number
    addNewPack: () => void
    deletePack: (id: string) => void
    searchByName: (packName:string) => void
}

export const TableComponent = ({
                                   tableInfoRowNames,
                                   packInfo,
                                   myID,
                                   addNewPack,
                                   deletePack,
                                   searchByName
                               }: PropsType) => {

    const [packName, setPackName] = useState("");
    let debouncedValue = useDebounce(packName, 4000);

    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        let newPackName = e.currentTarget.value
        setPackName(newPackName)

    }
    useEffect(() => {
        searchByName(debouncedValue)
    }, [debouncedValue])

    return (
        <div className={s.tableInfoRowContainer}>
            <div><input type="text" id="myInput"
                        value={packName}
                        onChange={onChangeHandler}
                        placeholder="Поиск по именам.." title="Введите имя"/>
            </div>
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