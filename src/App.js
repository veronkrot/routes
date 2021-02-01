import React, { useState } from 'react';
import {
    Switch,
    Route,
    Link,
    useParams,
    useLocation, useHistory
} from "react-router-dom";
import './App.css';

export default function App() {
    const [inputValue, setInputValue] = useState('');
    const history = useHistory();

    const setCheckboxChecked = (checked) => {
        if (checked) {
            history.push("/subtask4");
        } else {
            history.push("/");
        }
    }

    return (
        <div className="App">
            <h1>React Marathon</h1>
            <h2>The topic 'Routes'</h2>
            <Link to={(inputValue % 2 !== 0) ? "/subtask3" :  "/"}>Show protected information if</Link>
            <span>&nbsp;</span>
            <input size="5" onChange={event => setInputValue(event.target.value)} /> is odd
            <div className="mainClass">
                Go to the component programmatically, by checking the box:{" "}
                <input type="checkbox" onChange={event => setCheckboxChecked(event.target.checked)}/>
            </div>
            <Switch>
                <Route path="/subtask1/:param" children={<Subtask1/>}/>
                <Route path="/subtask2" children={<Subtask2/>}/>
                <Route path="/subtask3" children={<Subtask3/>}/>;
                <Route path={"/subtask4"} children={<Subtask4/>}/>;
            </Switch>
        </div>
    );
}

const Subtask1 = () => {
    let {param} = useParams();
    return <div>Subtask1, parameter: {param}</div>
}

const Subtask2 = () => {
    const {search} = useLocation();
    const queryParamsString = search.replace('?', '');
    const paramValues = queryParamsString.split('&');
    const finalString = paramValues.join(', ');
    return (
        <div>Subtask2, query parameters: {finalString}</div>
    )
}

const Subtask3 = () => {
    return <div>Subtask3, protected information</div>
}

const Subtask4 = () => {
    return <div>Subtask4, navigated programmatically</div>
}