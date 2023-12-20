import { Component } from 'react';

import './employees-list-item.css';

class EmployeesListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isRewarded: false,
            haveStar: false
        }
    }

    onReward = () => {
        this.setState(({isRewarded}) => ({
            isRewarded: !isRewarded
        }))
    }

    getStar = () => {
        this.setState(({haveStar}) => ({
            haveStar: !haveStar
        }))
    }

    render() {
        const {name, salary} = this.props;
        const {isRewarded, haveStar} = this.state;

        let classNames = "list-group-item d-flex justify-content-between";
        if (isRewarded) {
            classNames += ' increase';
        }
        if (haveStar) {
            classNames += ' like';
        }

        return (
            <li className={classNames}>
                <span className='list-group-item-label'
                        onClick={this.getStar}>{name}
                </span>
                <input type="text" className="list-group-item-input" defaultValue={salary + '$'} />
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        className="btn-cookie btn-sm "
                        onClick={this.onReward}>
                        <i className="fas fa-cookie"></i>
                    </button>
    
                    <button type="button"
                            className="btn-trash btn-sm ">
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        );
    }
}

export default EmployeesListItem;
