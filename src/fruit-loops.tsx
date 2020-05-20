import * as React from  'react';
import { render } from  'react-dom'

type FruitLoopsProps = {
    fruits : Array<string>
}

function FruitLoops(props : FruitLoopsProps)
{
    return (
        <div>
            <p>
                FruitLoops to show map fuction in JS.
            </p>
            <ul>
                { props.fruits.map((value, index) => {
                    return <li key ={index} style={{ color: value}}>{ value }</li>
                }) }
            </ul>
        </div>
    )
}

FruitLoops.displayName='Fruit_Loops';

export {
    FruitLoops
}