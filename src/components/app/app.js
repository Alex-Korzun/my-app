import { Component } from 'react';
import nextId from "react-id-generator";

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'Brad P.', salary: 800, isRewarded: false, id: 1},
                {name: 'Keanu R.', salary: 1000, isRewarded: true, id: 2},
                {name: 'Bruce W.', salary: 2000, isRewarded: false, id: 3}
            ]
        }
    }

    deleteItemById = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem = (name, salary) => {
        this.setState(({data}) => {
            let newArr = data.slice();
            newArr.push({name, salary, isRewarded: false, id: nextId()})
            return {
                data: newArr
            }
        })
    }

    render() {
        const {data} = this.state;

        return (
            <div className="app">
                <AppInfo />
    
                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>
    
                <EmployeesList 
                    data={data}
                    onDelete={this.deleteItemById} />
                <EmployeesAddForm
                    onAdd={this.addItem} />
            </div>
        );
    }
}

export default App;
