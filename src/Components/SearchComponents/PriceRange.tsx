import React, {useEffect, useState} from 'react';
import {Range, getTrackBackground} from 'react-range';
import {state} from "../TastTable/TestTable";
import {useDispatch, useSelector} from "react-redux";
import {getPackInfoAC, getPackInfoTC, tableReducer} from "../../Redux/table-reducer";
import {useDebounce} from "../hooks/useDebounce";

interface IPriceRangeProps {
    // loading: boolean;
    // error?: string;
    // name?: string;
    // priceRangeCallback: ( ) => void;
}

const PriceRange: React.FC<IPriceRangeProps> = () => {
    let minCardsCount = useSelector<any, number >(state => state.tableReducer.cardsPackData.minCardsCount)
    let maxCardsCount = useSelector<any, number>(state => state.tableReducer.cardsPackData.maxCardsCount)
    let cardsPackData = useSelector<any, any>(state => state.tableReducer.cardsPackData.cardPacks)

    const [values, setValues] = useState([minCardsCount, maxCardsCount]);
    let dispatch = useDispatch();

    useEffect(() => {
        console.log(minCardsCount, maxCardsCount)
        dispatch(getPackInfoTC(minCardsCount, maxCardsCount))
    }, [minCardsCount,maxCardsCount, values]);

    const searchPriceRange = (values:Array<number>) => {
        // useDebounce (setValues(values),4000)
        // let newArrayPR = cardsPackData.filter((n: { cardsCount: number; }) => n.cardsCount > values[0] && n.cardsCount < values[1]);
        console.log(values)
    }

    return (
        <div>
            <Range
                values={values}
                step={1}
                min={minCardsCount}
                max={maxCardsCount}
                onChange={values => setValues(values)}
                renderTrack={({props, children}) => (
                    <div
                        onMouseDown={props.onMouseDown}
                        onTouchStart={props.onTouchStart}
                        style={{
                            ...props.style,
                            height: '36px',
                            display: 'flex',
                            width: '50%',
                            margin: '30px',
                        }}
                    >
                        <div
                            ref={props.ref}
                            style={{
                                height: '5px',
                                width: '100%',
                                borderRadius: '4px',
                                background: getTrackBackground({
                                    values: values,
                                    colors: ['#ccc', '#548BF4', '#ccc'],
                                    min: 3000,
                                    max: 1000
                                }),
                                alignSelf: 'center'
                            }}
                        >
                            {children}
                        </div>
                    </div>
                )}
                renderThumb={({index, props, isDragged}) => (
                    <div
                        {...props}
                        style={{
                            ...props.style,
                            height: '12px',
                            width: '12px',
                            borderRadius: '1px',
                            backgroundColor: '#FFF',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            boxShadow: '0px 2px 6px #AAA',
                        }}
                    >
                        <div
                            style={{
                                position: 'absolute',
                                top: '-28px',
                                color: '#fff',
                                fontWeight: 'bold',
                                fontSize: '14px',
                                fontFamily: 'Arial,Helvetica Neue,Helvetica,sans-serif',
                                padding: '4px',
                                borderRadius: '4px',
                                backgroundColor: '#548BF4'
                            }}
                        >
                            {values[index].toFixed(0)}
                            {/*// 10.12345 => 10; (1) => 10.1; (2) > 10.12; ...*/}
                        </div>
                        <div
                            style={{
                                height: '16px',
                                width: '5px',
                                backgroundColor: isDragged ? '#548BF4' : '#CCC'
                            }}
                        />
                    </div>
                )}
            />
            <button
                onClick={()=>searchPriceRange(values)}>Search</button>
        </div>
    );
};

export default PriceRange;