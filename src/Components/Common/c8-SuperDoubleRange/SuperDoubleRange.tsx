import React, {ChangeEvent} from 'react'
import {Slider} from "@mui/material";


type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value: [number, number]
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        // min, max, step, diyarnsable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки
    const onChangeMRange = (e: ChangeEvent<HTMLInputElement>) => {
        //  onChangeRange && onChangeRange([+e.currentTarget.value,value[1]])
        console.log(e.currentTarget.value)
    }


    return (
        <div style={{
            width: '200px',
        }}>
            <Slider
                value={value}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                onChange={(e, newValue1) => {
                    let newValue2: number[] = [0, 0];
                    typeof newValue1 === "number" ? newValue2[1] = newValue1 : newValue2 = newValue1
                    onChangeRange && onChangeRange([newValue2[0], newValue2[1]])
                }}
            />
        </div>
    )
}

export default SuperDoubleRange
