import * as React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    const activeStyle = { color: "#F15B2A" };
    return (
        <nav>
            <NavLink to="/" activeStyle={activeStyle} exact>
                Home
            </NavLink>
            {" | "}
            <NavLink to="/createNewQuiz" activeStyle={activeStyle}>
                Create New Quiz
            </NavLink>
            {" | "}
            <NavLink to="/answerQuiz" activeStyle={activeStyle}>
                AnswerQuiz
            </NavLink>
        </nav>
    );
};

export default Header;
