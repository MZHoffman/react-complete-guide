import React from 'react'
import './ExpenseForm.css'

const ExpenseFormShow = (props) => {
  return (
    <div className='new-expense__actions'>
      <button onClick={() => props.toggleForm(true)}>Add New Expense</button>
    </div>
  )
}

export default ExpenseFormShow
