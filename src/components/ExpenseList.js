import axios from "axios"
import { useEffect, useState } from "react"
import '../styles/ExpenseList.css';

function ExpenseList() {

    const [data, setData] = useState([])
    useEffect(() => {
        axios.get("http://localhost:8000/api/expenses/")
            .then(res => setData(res.data))
    }, [])


    const del = (id) => {

        axios.delete(
            "http://localhost:8000/api/expenses/" + id + "/"
        )

        window.location.reload()

    }


    return (

        <div className="tableBox">

            <h3>Expenses</h3>
            {
                data.map(e => (
                    <div key={e.id}>
                        {e.title} - {e.amount}
                        <button  className="deleteBtn" onClick={() => del(e.id)}>Delete
                        </button>
                        <a href={"/edit/"+e.id}>Edit</a>
                    </div>
                ))

            }

        </div>

    )

}

export default ExpenseList