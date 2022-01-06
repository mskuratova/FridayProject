import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent, useState} from 'react'
import s from "./SuperSelect.module.css"


type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const mappedOptions: any[] = options ? options.map((o, i) => {
        return (
            <div key={`${o + "-" + i}`}
                 className={s.SuperSelectItem}
                 onClick={(e) => onClickCallback(o)}>{o}</div>
        )
    }) : []; // map options with key

    // const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
    //     onChange && onChange(e)
    //     onChangeOption && onChangeOption(e.currentTarget.value)
    //     // onChange, onChangeOption
    // }
    const [isSelect, setIsSelect] = useState<boolean>(false)
    const onClickCallback = (value: string) => {
        onChangeOption && onChangeOption(value)
        SuperSelectSwitch()
        // onChange, onChangeOption
    }



    const SuperSelectSwitch = () => {
        switch (isSelect) {
            case true:
                setIsSelect(false)
                break;
            case false:
                setIsSelect(true)
                break;
        }

    }





    return (
        <div>
            {isSelect &&  <div className={s.helpDiv} onClick={SuperSelectSwitch}>

            </div>}
            <label onClick={SuperSelectSwitch} className={s.SuperSelect}>
                <span onBlur={SuperSelectSwitch} className={s.inputSelect}>{restProps.value}</span>

                <img src="https://img.icons8.com/material-rounded/24/000000/circled-up.png" alt={""}
                     className={isSelect ? s.selectImg : ""}/>
            </label>
            <div id={"options"} className={`${isSelect && s.select}  ${s.SuperSelectItems}`}>
                {mappedOptions}
            </div>

        </div>

    )
}

export default SuperSelect
