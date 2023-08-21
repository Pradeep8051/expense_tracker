import React from 'react';

const About = () => {
    return (
        <div className="about-page">
            <h1>About Expense Tracker</h1>
            <p>Welcome to the Expense Tracker application, where you can effortlessly manage your expenses and keep a close eye on your financial transactions.</p>
            
            <h2>Features</h2>
            <ul>
                <li>Record and categorize your daily expenses.</li>
                <li>View a detailed list of all your transactions.</li>
                <li>Analyze your spending patterns with insightful charts and graphs.</li>
                <li>Effortlessly track your financial goals and budgets.</li>
            </ul>
            
            <h2>How to Use</h2>
            <p>Getting started with Expense Tracker is easy:</p>
            <ol>
                <li>Register or log in to your account.</li>
                <li>Add new transactions with the date, description, amount, and category.</li>
                <li>Explore your transaction history and use filters to view specific time periods or categories.</li>
                <li>Analyze your spending habits using the visual representation of your data.</li>
                <li>Set financial goals and budgets to manage your money effectively.</li>
            </ol>
            
            <h2>Contact Us</h2>
            <p>If you have any questions, feedback, or suggestions, please feel free to reach out to our support team at support@expensetrackerapp.com.</p>
            
            <p>Thank you for choosing Expense Tracker to simplify your financial management!</p>
        </div>
    );
};

export default About;
