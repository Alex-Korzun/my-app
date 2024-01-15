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
                {name: 'Brad P.', salary: 800, increase: false, raise: false, id: 1},
                {name: 'Keanu R.', salary: 1000, increase: true, raise: false, id: 2},
                {name: 'Bruce W.', salary: 2000, increase: false, raise: false, id: 3}
            ]}
    }

    deleteItemById = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem = (name, salary) => {
        if (name && salary) {
            this.setState(({data}) => {
                let newArr = data.slice();
                newArr.push({name, salary, increase: false, raise: false, id: nextId()})
                return {
                    data: newArr
                }
            })
        }
    }

    onToggleProp = (id, prop) => {
        // this.setState(({data}) => {
        //     const index = data.findIndex(elem => elem.id === id);

        //     const old = data[index];
        //     const newItem = {...old, increase: !old.increase};
        //     const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

        //     return {
        //         data: newArr
        //     }
        // })

        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop] : !item[prop]}
                }
                return item;
            })
        }))
    }

    render() {
        const {data} = this.state;

        return (
            <div className="app">
                <AppInfo 
                    data={data} />
    
                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>
    
                <EmployeesList 
                    data={data}
                    onDelete={this.deleteItemById}
                    onToggleProp={this.onToggleProp} />
                <EmployeesAddForm
                    onAdd={this.addItem} />
            </div>
        );
    }
}

export default App;
