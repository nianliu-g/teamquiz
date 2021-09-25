import * as React from "react";
import {useState} from "react";
import QuestionInput from "./QuestionInput";
import LinkButton from "../Common/LinkButton";
import {Link} from "react-router-dom";

interface QuizCreationStatusPage {
    [x: string]: any;
    history: any;
    location: any;
    match: any;
    staticContext: any;
    to: any;
    onClick: any;
}

const QuizCreationStatusPage = (props: QuizCreationStatusPage) => {
    const [questions, setQuestions] = useState([""]);

    return <div>
        <h1>Your Quiz Has Been Created: {props.match.params.quizId}</h1>
    </div>;
}

export default QuizCreationStatusPage;
