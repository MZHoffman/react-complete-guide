import React from 'react'
import './ExpenseForm.css'

const ExpenseFormShow = (props) => {
  return (
    <div className='new-expense__actions'>
      <button onClick={() => props.changeVisibility(true)}>
        Add New Expense
      </button>
    </div>
  )
}

export default ExpenseFormShow
