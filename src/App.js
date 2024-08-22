import './App.css';
import logo from './logo.svg'; 

import { AboutPage } from './Components/AboutPage';
import { MyButton } from './Components/MyButton';

const products = [
    { title: 'Cabbage', isFruit: false, id: 1 },
    { title: 'Garlic', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 },
];


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
            <AboutPage/>
            <h1>
                Welcome to my app
            </h1>
            <MyButton/>

            <ul>{listItems}</ul>
        </div>
    );
}
