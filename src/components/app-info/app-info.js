import './app-info.css';

const AppInfo = ({data}) => {
    return (
        <div className="app-info">
            <h1>Employees Accounting</h1>
            <h2>Total employees number: {data.length}</h2>
            <h2>Employees for reward: {data.filter(item => item.increase).length}</h2>
        </div>
    )
}

export default AppInfo;
