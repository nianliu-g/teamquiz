import * as React from "react";
import {useState} from "react";
import QuestionInput from "../CreateNewQuiz/QuestionInput";
import LinkButton from "../Common/LinkButton";
import {Link} from "react-router-dom";

interface SubmitQuizAnswers {
    [x: string]: any;
    history: any;
    location: any;
    match: any;
    staticContext: any;
    to: any;
    onClick: any;
}

const SubmitQuizAnswers = (props: SubmitQuizAnswers) => {
    const [answers, setAnswers] = useState([""]);

    function retrieveQuizQuestions() {
        //TODO hook up backend to retrieve quiz questions
        const quizId = 'jD58Wd';
        const questions = [
            "What's your name",
            "What's your favorite color",
            "What's your favorite animal",
            "What's your favorite artist",
        ];
        return questions
    }
    const onAnswerInputChange = (newAnswer: string, index: number) => {
        const newAnswers = answers.slice();
        newAnswers[index] = newAnswer;
        setAnswers(newAnswers);
    }
    
    const questionAnswerInputList = retrieveQuizQuestions().map((question, index) => {
        return (
            <div key={index}>
                <QuestionInput
                    index={index}
                    name={index.toString()}
                    label={question}
                    value={""}
                    onChange={onAnswerInputChange}
                    placeholder={"Please put your answer here"}
                    error={""}
                />
            </div>)
    })

    function submitAnswers() {
        //TODO hook up backend submission
        props.history.push(`/quizAnswerStatus`);
    }
    
    return <div>
        <h1>You're answering the team quiz created by: {props.match.params.quizId}</h1>
        {questionAnswerInputList}
        <button
            onClick={submitAnswers}
        >Submit answers</button>
    </div>;
}

export default SubmitQuizAnswers;
