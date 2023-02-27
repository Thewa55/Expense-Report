import './ExpenseItem.css'
import { Card } from '../Card/Card.component'

const ExpenseItem = (props) =>{
    
    const month = props.initData.date.toLocaleString('en-US', {month: 'short'});
    const day = props.initData.date.toLocaleString('en-US', {day: '2-digit'});
    const year = props.initData.date.getFullYear();

    return(
        <Card className="expense-item">
            <div className="expense-date">
                <div className="expense-date__month">{month}</div>
                <div className="expense-date__day">{day}</div>
                <div className="expense-date__year">{year}</div>
            </div>
            <div className="expense-item__description">
                <h2 >{props.initData.title}</h2>
                <div className="expense-item__price">${props.initData.amount}</div>
            </div>
        </Card>
    );
}

export default ExpenseItem;