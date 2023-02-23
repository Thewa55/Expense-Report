import './ExpenseItem.css'

const ExpenseItem = (props) =>{
    
    const month = props.initData.date.toLocaleString('en-US', {month: 'long'});
    const day = props.initData.date.toLocaleString('en-US', {day: '2-digit'});
    const year = props.initData.date.getFullYear();

    return(
        <div className="expense-item">
            <div>
                <div>{month}</div>
                <div>{day}</div>
                <div>{year}</div>
            </div>
            <div className="expense-item__description">
                <h2 >{props.initData.title}</h2>
                <div className="expense-item__price">${props.initData.amount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;