import * as React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
    <div className="jumbotron">
        <h1>Team Quiz</h1>
        <p>A fun way to stay connected with your team.</p>
        <Link to="createNewQuiz">
            Create New Quiz Now
        </Link>
    </div>
);

export default HomePage;
