import {BrowserRouter,Routes,Route,Link} from "react-router-dom"

import AddExpense from "./components/AddExpense"
import ExpenseList from "./components/ExpenseList"
import Dashboard from "./components/Dashboard"
import Currency from "./components/Currency"
import './styles/App.css';
import EditExpense from "./components/EditExpense"
function App(){

return(

<BrowserRouter>

<div className="container">
   <h1 className="title">Expense Tracker</h1>
</div>

<Link to="/">Expenses</Link> |
<Link to="/add">Add</Link> |
<Link to="/dashboard">Dashboard</Link> |
<Link to="/currency">Currency</Link>

<Routes>

<Route path="/" element={<ExpenseList/>}/>

<Route path="/add" element={<AddExpense/>}/>

<Route path="/dashboard" element={<Dashboard/>}/>

<Route path="/currency" element={<Currency/>}/>
<Route path="/edit/:id" element={<EditExpense/>}/>

</Routes>

</BrowserRouter>

)

}

export default App