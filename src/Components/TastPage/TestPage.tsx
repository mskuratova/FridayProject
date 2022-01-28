import React, {useState} from "react";
import SuperInputText from "../Common/c1-SuperInputText/SuperInputText";
import SuperButton from "../Common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../Common/c3-SuperCheckbox/SuperCheckbox";
import SuperEditableSpan from "../Common/c4-SuperEditableSpan/SuperEditableSpan";
import SuperSelect from "../Common/c5-SuperSelect/SuperSelect";
import SuperRange from "../Common/c7-SuperRange/SuperRange";
import SuperRadio from "../Common/c6-SuperRadio/SuperRadio";
import SuperDoubleRange from "../Common/c8-SuperDoubleRange/SuperDoubleRange";

export const TestPage = ()=>{
    const [isChecked,setIsChecked] = useState<boolean>(true);
    const [superText,setSuperText] =useState<string>("Super text");
    const arrayOfOptions = ["one","two","three"];
    const [option,setOption] = useState<string>("one");
    const [minValue,setMinValue] = useState<number>(0);
    const [maxValue,setMaxValue] = useState<number>(50);
    const setDoubleRange = (value:number[])=>{
        setMinValue(value[0]);
        setMaxValue(value[1]);
    }
    return(
        <div>
            <hr/>
            <hr/>
                <SuperInputText value={superText} onChangeText={setSuperText}/>
            <hr/>
            <hr/>
            <SuperButton>Click on me</SuperButton>
            <hr/>
            <hr/>
                <SuperCheckbox checked={isChecked} onChangeChecked={setIsChecked}/>
            <hr/>
            <hr/>
                <SuperEditableSpan value={superText} onChangeText={setSuperText}/>
            <hr/>
            <hr/>
                <SuperSelect value={option} options={arrayOfOptions} onChangeOption={setOption} />
            <hr/>
            <hr/>
                <SuperRadio value={option} options={arrayOfOptions} onChangeOption={setOption}/>
            <hr/>
            <hr/>
                <SuperRange value={minValue} onChangeRange={setMinValue}/>
            <hr/>
            <hr/>
              <SuperDoubleRange value={[minValue,maxValue]} onChangeRange={setDoubleRange}/>
            <hr/>
            <hr/>
        </div>
    )
}