
import { useState } from 'react'
import './App.css'
import ExpenseList from './components/ExpenseList'
import ExpenseFilter from './components/ExpenseFilter'
import ExpenseForm from './components/ExpenseForm';



function App() {
  // to filter categories
  const [selectedCategory, setSelectedCategory] = useState('');

  const [expenses, setExpenses] = useState([
    {id: 1, description: "TV", amount: 50, category: "Utilities"},
    {id: 2, description: "Snacks", amount: 5, category: "Groceries"},
    {id: 3, description: "Movies", amount: 15, category: "Entertainment"},
    {id: 4, description: "Food Deliveries", amount: 40, category: "Entertainment"},
  ])

    // expenses that will be shown after filtering
    const visibleExpenses = selectedCategory ? expenses.filter(e => e.category === selectedCategory) : expenses;

  return (
    <>
    <div className="mb-5">
      <ExpenseForm onSubmit={expense => setExpenses([...expenses, {...expense, id: expenses.length + 1}])} />
    </div>
    <div className="mb-3">
    <ExpenseFilter onSelectCategory={category => setSelectedCategory(category)}/>
    </div>
    {/* we need to filter through expenses and delete expense, which id is the same as id onDelete */}
      <ExpenseList expenses={visibleExpenses} onDelete={(id) => setExpenses(expenses.filter(e => e.id !== id))}/> 
    </>
  )
}

export default App
