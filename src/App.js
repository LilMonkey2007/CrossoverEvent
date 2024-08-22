import './App.css';
import logo from './logo.svg'; 
import { useState } from 'react';

const products = [
    { title: 'Cabbage', isFruit: false, id: 1 },
    { title: 'Garlic', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 },
];

function MyButton() {
    const [count, setCount] = useState(0);
    function handleClick() {
        alert('You clicked me!');
        setCount(count + 1);
    }
    return (
        <button onClick={handleClick}>Clicked {count} times</button>
    );
}
function AboutPage() {
    return (
        <>
            <h1>About</h1>
            <p>Hello there.<br />How do you do?</p>
        </>
    );
}

export default function MyApp() {
    const listItems = products.map(product =>
        <li
            key={product.id}
            style={{
                color: product.isFruit ? 'magenta' : 'darkgreen'
            }}
        >
            {product.title}
        </li>
    );
    return (
        <div>
            <img src={logo} className="App-logo" alt="logo" />
            <AboutPage></AboutPage>
            <h1>
                Welcome to my app
            </h1>
            <MyButton></MyButton>

            <ul>{listItems}</ul>
        </div>
    );
}
