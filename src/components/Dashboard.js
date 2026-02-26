import axios from "axios"
import { useEffect, useState } from "react"

import { Bar } from "react-chartjs-2"
import '../styles/Dashboard.css';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement
} from "chart.js"

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement
)

function Dashboard() {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get(
            "http://localhost:8000/api/summary/"
        )
            .then(res => setData(res.data.categories))
    }, [])
    const chartData = {
        labels: data.map(d => d.category),
        datasets: [{
            label: "Expenses",
            data: data.map(d => d.total)
        }]
    }
    return (
        <div className="dashboardBox">
            <h3>Dashboard</h3>
            <Bar data={chartData} />
        </div>

    )

}

export default Dashboard