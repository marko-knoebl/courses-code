import React, {Component, useEffect, useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Confroom } from './types';
import Room from './Room';


type AppState = {
    pollingCount: number;
    delay: number;
    confrooms: Array<Confroom>;
    searchField: string;
    expandedRows: Array<string>;
    statusImage: Array<{status: string; img_path: string}>
}

function App() {
    const [pollingCount, setPollingCount] = useState(0);
    const [delay, setDelay] = useState(4000);
    const [confrooms, setConfrooms] = useState<Array<Confroom>>([])
    const [expandedRows, setExpandedRows] = useState<Array<string>>([])
    const [searchField, setSearchField] = useState("");
    // TODO

    useEffect(() => {

        function tick() {
            setPollingCount(pollingCount + 1);
            fetch("example.json")
                .then(response => response.json())
                .then(users => setConfrooms(users));
        }

        const intervalId = setInterval(tick, delay);
        return () => clearInterval(intervalId);
    }, [delay])

    
    const handleRowClick = (rowId: string) => {
        const isRowCurrentlyExpanded = expandedRows.includes(rowId);

        const newExpandedRows = isRowCurrentlyExpanded ?
            expandedRows.filter(id => id !== rowId) :
            expandedRows.concat(rowId);

        setExpandedRows(newExpandedRows);
    }

    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchField(e.target.value)
    }

    const filteredconfrooms = confrooms.filter(person =>
        person.name.toLowerCase().includes(searchField.toLowerCase())
    )

    return (
        <div className="App" data-testid="app">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <h1>Navbar</h1>
            </nav>
            <input className='search form-control'
                   type='search'
                   placeholder='Name'
                   onChange={handleChange}
            />
            <table className='table table-stripe table-border'>
                <thead>
                <tr>
                    <th></th>
                    <th>Status</th>
                    <th>Name</th>
                    <th>Address</th>
                </tr>
                </thead>
                <tbody>
                {filteredconfrooms.map((confroom) => <Room
                  item={confroom}
                  onRowClick={handleRowClick}
                  isExpanded={expandedRows.includes(confroom.id)}/>
                )}
                </tbody>
            </table>
        </div>
    );
}

export default App;
