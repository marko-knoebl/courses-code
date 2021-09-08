import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import jsonData from './config.json';

type Confroom = {
    id: string;
    name: string;
    status: string;
    uri: string;
    callId: string;
}

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

        /*var config_url = JSON.parse(JSON.stringify(jsonData));
        fetch(config_url["config_url"])
            .then(response => {
                var curr_dyn_config = response.json();
                this.setState({dyn_config: curr_dyn_config});
                return curr_dyn_config;
            })
            .then(function (data) {
*/
        //https://dummy.workbenching.com/confrooms.json
        //http://svadckrh01.bg10.bgfe.local:5000/confrooms.json

        //        fetch("http://confview-mw-service-fb.k8s.bg10.bgfe.local/confrooms")
        //            .then(response => response.json())
        //            .then(users => this.setState({confrooms: users["confrooms"]}));
        //        console.log(this.state.dyn_config);
        
        //            }
        //            .bind(this));

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


    handleRowClick(rowId: string) {
        const currentExpandedRows = this.state.expandedRows;
        const isRowCurrentlyExpanded = currentExpandedRows.includes(rowId);

        const newExpandedRows = isRowCurrentlyExpanded ?
            currentExpandedRows.filter(id => id !== rowId) :
            currentExpandedRows.concat(rowId);

        this.setState({expandedRows: newExpandedRows});
    }

    renderItem(item: Confroom) {
        const clickCallback = () => this.handleRowClick(item.id);
        let status_image;
        if (item.status === "free") {
            status_image = "https://img.icons8.com/emoji/48/000000/green-circle-emoji.png"
        } else {
            status_image = "https://img.icons8.com/emoji/48/000000/red-circle-emoji.png"
        }
        const itemRows = [
            <tr onClick={clickCallback} key={"row-data-" + item.id}>
                {/* if currentrow != colapsed -> arrow down */}
                <td className="thumbnail"><i className="arrow right"/></td>
                <td className="thumbnail"><img alt="Status Thumbnail" src={status_image}/></td>
                <td>{item.name}</td>
                <td>{item.uri}</td>
            </tr>
        ];

        if (this.state.expandedRows.includes(item.id)) {
            itemRows.push(
                <tr key={"row-expanded-" + item.id}>
                    <td colSpan={4}>
                        {item.id}<br/>
                        {item.callId}<br/>
                    </td>
                </tr>
            );
        }

        return itemRows;
    }


    render() {
        let allItemRows: Array<React.ReactNode> = [];
        const {confrooms, searchField} = this.state;
        const filteredconfrooms = confrooms.filter(person =>
            person.name.toLowerCase().includes(searchField.toLowerCase())
        )

        filteredconfrooms.forEach(item => {
            const perItemRows = this.renderItem(item);
            allItemRows = allItemRows.concat(perItemRows);
        });

        return (
            <div className="App">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <h1>Navbar</h1>
                </nav>
                <input className='search form-control'
                       type='search'
                       placeholder='Bitte Namen eingeben'
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
                    {allItemRows}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default App;
