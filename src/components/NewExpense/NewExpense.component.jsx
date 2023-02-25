import React, {useState, useRef, useReducer, useEffect} from 'react';
import './NewExpense.css';

const NewExpense = (props) => {

    // const expenseTitle = useRef();
    // const expenseAmount = useRef();
    // const expenseDate = useRef();

    // const submitExpense = (event) => {
    //     event.preventDefault();
    //     let expense = { 
    //         title: expenseTitle.current.value,
    //         amount: expenseAmount.current.value,
    //         date: expenseDate.current.value
    //     }
    //     console.log(expense);

    //     expenseTitle.current.value = ''
    // }

    const initialState = {};

    const reducer = (state, action) => {
        switch(action.field){
            case 'title':
                return {...state, title: action.value}
            case 'amount':
                return {...state, amount: parseInt(action.value)}
            case 'date':
                return {...state, date: new Date(action.value.replaceAll('-','/')) , fieldDate: action.value}
            case 'id':
                return {id: action.value}
                //return {id: action.value, title: '', amount: 0, date: '', fieldDate: ''}
            default:
                return ''
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

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


    const submitExpense = (event) => {
        event.preventDefault();
        console.log('On submit clicked: ',state);
        props.submit(state);
        document.getElementById("expense-form").reset();
        dispatch({field: 'id', value: (Math.floor(Math.random() * 1000) + '')})
    }

    useEffect(() => {
        initialState.id = Math.floor(Math.random() * 1000) + '';
        console.log(state)
    }, [state])

    return (
        <div class="new-expense">
            <form onSubmit={submitExpense} id="expense-form">
                {/* <div className="new-expense__controls">
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
                </div> */}

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

                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>Title</label>
                        <input type="text" onChange={(e) => dispatch({field: 'title', value: e.target.value})} value={state.title}/>
                    </div>
                    <div className="new-expense__control">
                        <label>Amount</label>
                        <input type="number" min="0.01" step="0.01" onChange={(e) => dispatch({field: 'amount', value: e.target.value})} value={state.amount}/>
                    </div>
                    <div className="new-expense__control">
                        <label>Date</label>
                        <input type="date" onChange={(e) => dispatch({field: 'date', value: e.target.value})} value={state.fieldDate}/>
                    </div>
                </div>

                <div className="new-expense__actions">
                    <button type="submit" >Add Expense</button>
                </div>
            </form>
        </div>
    )
}

export default NewExpense;