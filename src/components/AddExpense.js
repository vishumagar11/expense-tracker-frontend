import axios from "axios"
import { useState } from "react"

import '../styles/AddExpense.css';
function AddExpense() {

    const [title, setTitle] = useState("")
    const [amount, setAmount] = useState("")
    const [category, setCategory] = useState("")
    const [date, setDate] = useState("")


    const submit = () => {

    axios.post(
        "https://expense-tracker-backend-4v2m.onrender.com/api/expenses/",
        {
            title: title,
            amount: amount,
            category: category,
            date: date
        }
    )
    .then(res => {

        alert("Expense Added Successfully")

        // refresh list
        window.location.reload()

    })
    .catch(error => {

        console.log(error)

        alert("Error Adding Expense")

    })

}

    return (

        <div className="formBox">
            <h3>Add Expense</h3>

            <input placeholder="Title"
                onChange={e => setTitle(e.target.value)}
            />

            <input placeholder="Amount"
                onChange={e => setAmount(e.target.value)}
            />

            <input placeholder="Category"
                onChange={e => setCategory(e.target.value)}
            />

            <input type="date"
                onChange={e => setDate(e.target.value)}
            />

            <button className="addBtn" onClick={submit}>
                Submit
            </button>

        </div>

    )

}

export default AddExpense