import React, { useState } from 'react'

import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList'
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

  return (
    <Card className='expenses'>
      <ExpensesFilter selected={dropdownYear} onSelectedYear={selectedYear} />
      <ExpensesList items={filteredExpanses} />
    </Card>
  )
}
export default Expenses
