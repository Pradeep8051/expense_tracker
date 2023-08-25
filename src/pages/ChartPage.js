import React, { useState } from "react";
import Chart from "react-apexcharts";
// import { useLocation } from 'react-router-dom';
import { useSelector } from "react-redux";
import moment from 'moment';
import Naavbar from "../components/navbar/Naavbar";
function ChartPage() {
    const count = useSelector((state) => state.expenses)
    let inAmounts = [];
    let Time = [];
    if (count.income) {
        inAmounts = count.income.map((item) => item.amount);
        Time = count.income.map((item) => moment(item.timestamp).format('YYYY-MM-DD HH:mm:ss'));
    }

    let exAmounts = [];
    if (count.expense) {
        exAmounts = count.expense.map((item) => item.amount);
        Time = count.expense.map((item) => moment(item.timestamp).format('YYYY-MM-DD HH:mm:ss'));
    }
    const [state, setState] = useState({

        options: {
            colors: ["green", "red"],
            chart: {
                id: "basic-bar",
            },
            xaxis: {
                categories: Time,

            },
        },
        series: [
            {
                name: "Income",
                data: inAmounts,

            },
            {
                name: "Expense",
                data: exAmounts,
            },
        ],
    });

    return (
        <>
            <Naavbar />
            <div className="App" style={{ marginTop: "100px" }}>
                <h1>
                    Transaction Charts <i className="fas fa-user"></i>{" "}
                </h1>
                <div className="container">
                    <div className="w-90%">
                        <Chart
                            options={state.options}
                            series={state.series}
                            type="area"
                            width="95%"
                            height="600"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default ChartPage;
