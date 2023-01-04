import React, { useState } from 'react'

import ExpenseItem from './ExpenseItem'
import ExpensesFilter from './ExpensesFilter'
import Card from '../UI/Card'
import './Expenses.css'

const Expenses = (props) => {
  const [dropdownYear, setDropdownYear] = useState('2020')
  const selectedYear = (year) => {
    // let test
    setDropdownYear(year)
    //test = dropdownYear
    //console.log(test)
  }
  const filteredExpanses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === dropdownYear
  })

  let expensesContent = <p>No expenses found.</p>

  if (filteredExpanses.length > 0) {
    expensesContent = filteredExpanses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))
  }
  return (
    <Card className='expenses'>
      <ExpensesFilter selected={dropdownYear} onSelectedYear={selectedYear} />
      {expensesContent}
    </Card>
  )
}
export default Expenses
