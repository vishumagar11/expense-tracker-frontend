import axios from "axios"
import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"

function EditExpense() {

    const { id } = useParams()

    const navigate = useNavigate()

    const [title, setTitle] = useState("")
    const [amount, setAmount] = useState("")
    const [category, setCategory] = useState("")
    const [date, setDate] = useState("")


    useEffect(() => {

    axios.get(
        "https://expense-tracker-backend-4v2m.onrender.com/api/expenses/" + id + "/"
    )

    .then(res => {

        setTitle(res.data.title)
        setAmount(res.data.amount)
        setCategory(res.data.category)
        setDate(res.data.date)

    })

}, [id])


    const update = () => {

        axios.put(
            "https://expense-tracker-backend-4v2m.onrender.com/api/expenses/" + id + "/",
            {
                title,
                amount,
                category,
                date
            })

        alert("Updated")

        navigate("/")

    }


    return (

        <div>

            <h3>Edit Expense</h3>

            <input
                value={title}
                onChange={e => setTitle(e.target.value)}
            />

            <input
                value={amount}
                onChange={e => setAmount(e.target.value)}
            />

            <input
                value={category}
                onChange={e => setCategory(e.target.value)}
            />

            <input type="date"
                value={date}
                onChange={e => setDate(e.target.value)}
            />

            <button onClick={update}>
                Update
            </button>

        </div>

    )

}

export default EditExpense