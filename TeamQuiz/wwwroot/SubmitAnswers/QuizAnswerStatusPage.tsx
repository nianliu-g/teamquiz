import * as React from "react";
import {useState} from "react";
import LinkButton from "../Common/LinkButton";
import {Link} from "react-router-dom";

interface QuizAnswerStatusPage {
    [x: string]: any;
    history: any;
    location: any;
    match: any;
    staticContext: any;
    to: any;
    onClick: any;
}

const QuizAnswerStatusPage = (props: QuizAnswerStatusPage) => {
    const [questions, setQuestions] = useState([""]);

    return <div>
        <h1>Your Answers Have Been Created.</h1>
    </div>;
}

export default QuizAnswerStatusPage;
