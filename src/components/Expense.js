import React from 'react';
const Expense = ({data}) => {
    // console.log(data,"datarer");
    return (
        <div>
            <h4 className='d-flex'>Name: <p style={{color:"orangered",paddingLeft:"15px"}}>{data?.name}</p></h4>
            <h4 className='d-flex'>Amount: Rs. <p style={{color:"white",paddingLeft:"15px"}}>{data?.amount.toFixed(2)}</p></h4>
            <h4 className='d-flex'>Timestamp: <p style={{color:"green",paddingLeft:"15px"}}>{new Date(data?.timestamp).toLocaleString()}</p></h4>
        </div>
    );
};

export default Expense;
    