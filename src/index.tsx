import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Header } from './header';
import { CustomDate } from './custom-date';
import { FruitLoops } from './fruit-loops';

let fruit =[
    "red",
    "blue",
    "orange",
    "green"
]

ReactDOM.render(
    <div>
        <Header text= "You are great but I am the best "/>
        <CustomDate />
        <FruitLoops  fruits ={fruit}/>
        <p>
            This is a paragraph
        </p>
        <a href="https://www.typescriptlang.org/"> Click me </a>
    </div>,
    document.querySelector('#root')
)