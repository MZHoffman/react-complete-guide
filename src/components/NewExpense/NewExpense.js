import React, { useState } from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
import ExpenseFormShow from './ExpenseFormShow'

const NewExpense = (props) => {
  const [visable, setVisable] = useState(false)
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = { ...enteredExpenseData, id: Math.random().toString() }
    props.onAddExpanse(expenseData)
    setVisable(false)
  }
  const showForm = (show) => {
    setVisable(show)
  }
  if (visable) {
    return (
      <div className='new-expense'>
        <ExpenseForm
          changeVisibility={showForm}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      </div>
    )
  }
  return (
    <div className='new-expense'>
      <ExpenseFormShow changeVisibility={showForm} />
    </div>
  )
}

export default NewExpense
