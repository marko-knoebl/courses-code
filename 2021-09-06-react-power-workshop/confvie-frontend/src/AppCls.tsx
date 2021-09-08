import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Confroom } from './types';
import Room from './Room';
//import jsonData from './config.json';

type AppState = {
    pollingCount: number;
    delay: number;
    confrooms: Array<Confroom>;
    searchField: string;
    expandedRows: Array<string>;
    statusImage: Array<{status: string; img_path: string}>
}

type AppProps = {}

class App extends Component<AppProps, AppState> {

    interval: any;

    constructor(props: {}) {
        super(props);

        this.state = {
            pollingCount: 0,
            delay: 4000,
            confrooms: [],
            searchField: '',
            expandedRows: [],
            statusImage: [
                {
                    status: "free",
                    img_path: ""
                }
            ]
        };
    }

    componentDidMount() {

        this.interval = setInterval(this.tick, this.state.delay) as any;

    }

    componentDidUpdate(prevProps: AppProps, prevState: AppState) {
        if (prevState.delay !== this.state.delay) {
            clearInterval(this.interval);
            this.interval = setInterval(this.tick, this.state.delay);
        }
    }

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({searchField: e.target.value})
    }

    tick = () => {
        this.setState({
            pollingCount: this.state.pollingCount + 1
        });
        console.log("ENV: " + process.env.REACT_APP_API_URL);
        fetch("example.json")
            .then(response => response.json())
            .then(users => this.setState({confrooms: users}));
        // fetch("http://confview-mw.k8s.bg10.bgfe.local/confrooms.json")
        //     .then(response => response.json())
        //     .then(users => this.setState({confrooms: users}));
    }

    handleRowClick = (rowId: string) => {
        const currentExpandedRows = this.state.expandedRows;
        const isRowCurrentlyExpanded = currentExpandedRows.includes(rowId);

        const newExpandedRows = isRowCurrentlyExpanded ?
            currentExpandedRows.filter(id => id !== rowId) :
            currentExpandedRows.concat(rowId);

        this.setState({expandedRows: newExpandedRows});
    }

    render() {
        const {confrooms, searchField} = this.state;
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
                       onChange={this.handleChange}
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
                      onRowClick={this.handleRowClick}
                      isExpanded={this.state.expandedRows.includes(confroom.id)}/>
                    )}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default App;
