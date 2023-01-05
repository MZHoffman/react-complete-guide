import React, { useState } from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {
  const [visable, setVisable] = useState(false)
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = { ...enteredExpenseData, id: Math.random().toString() }
    props.onAddExpanse(expenseData)
    setVisable(false)
  }
  const hideForm = () => {
    setVisable(false)
  }
  return (
    <div className='new-expense'>
      {!visable && (
        <button onClick={() => setVisable(true)}>Add New Expense</button>
      )}
      {visable && (
        <ExpenseForm
          changeVisibility={hideForm}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  )
}

export default NewExpense
