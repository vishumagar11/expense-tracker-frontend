import axios from "axios"
import { useEffect, useState } from "react"
import '../styles/Currency.css';
function Currency() {
    const [rates, setRates] = useState({})

    useEffect(() => {
        axios.get(
            "http://localhost:8000/api/currency/").then(res => setRates(res.data.rates))}, [])
    return (
        <div className="currencyValue">
            <h3>Currency Rates</h3>
            INR : {rates.INR}
            <br />
            EUR : {rates.EUR}
        </div>
    )

}

export default Currency