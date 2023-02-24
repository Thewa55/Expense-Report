import React, {useState, useRef} from 'react';
import './NewExpense.css';

const NewExpense = () => {

    const expenseTitle = useRef();
    const expenseAmount = useRef();
    const expenseDate = useRef();

    const submitExpense = (event) => {
        event.preventDefault();
        let expense = { 
            title: expenseTitle.current.value,
            amount: expenseAmount.current.value,
            date: expenseDate.current.value
        }
        console.log(expense);

        expenseTitle.current.value = ''
    }


    const [userInput, setUserInput] = useState({
        title: '',
        amount: '',
        date: ''
    })

    const updateField = (event) => {
        console.log(event.target.dataset.field)
        setUserInput({
            ...userInput,
            
        })
    }

    return (
        <div class="new-expense">
            <form>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>Title</label>
                        <input type="text" ref={expenseTitle}/>
                    </div>
                    <div className="new-expense__control">
                        <label>Amount</label>
                        <input type="number" min="0.01" step="0.01" ref={expenseAmount}/>
                    </div>
                    <div className="new-expense__control">
                        <label>Date</label>
                        <input type="date" ref={expenseDate}/>
                    </div>
                </div>
                {/* <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>Title</label>
                        <input type="text" onChange={updateField} data-field="title"/>
                    </div>
                    <div className="new-expense__control">
                        <label>Amount</label>
                        <input type="number" min="0.01" step="0.01" onChange={updateField} data-field="amount"/>
                    </div>
                    <div className="new-expense__control">
                        <label>Date</label>
                        <input type="date" data-field="date" onChange={updateField}/>
                    </div>
                </div> */}
                <div className="new-expense__actions">
                    <button type="submit" onClick={submitExpense}>Add Expense</button>
                </div>
            </form>
        </div>
    )
}

export default NewExpense;