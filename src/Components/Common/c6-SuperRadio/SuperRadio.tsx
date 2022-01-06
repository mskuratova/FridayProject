import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react'
import s from "./SuperRadio.module.css"
import {debuglog} from "util";

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e)
        onChangeOption && onChangeOption(e.currentTarget.value)
        // onChange, onChangeOption
    }
    console.log("values — ", options)

    const mappedOptions: any[] = options ? options.map((o, i) => (
        <label key={name + '-' + i} className={value === o ? s.checkedItem : ''}>
            <input
                type={'radio'}
                name={"SuperRadio"}
                value={o}
                checked={value === o}
                onChange={onChangeCallback}
            />
            {o}
        </label>
    )) : []
    console.log(mappedOptions)
    return (
        <div className={s.SuperRadio}>

            {mappedOptions}
        </div>
    )
}

export default SuperRadio
