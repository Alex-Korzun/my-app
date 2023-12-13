import './app-filter.css';

const AppFilter = () => {
    return (
        <div className="btn-group">
            <button className="btn btn-light" 
                    type="button">
                        All Employees
            </button>
            <button className="btn btn-outline-light" 
                    type="button">
                        Employees for reward
            </button>
            <button className="btn btn-outline-light" 
                    type="button">
                        More than 1000$ salary
            </button>
        </div>
    );
}

export default AppFilter;
