import * as React from "react";
import {useState} from "react";
import QuestionInput from "./QuestionInput";
import LinkButton from "../Common/LinkButton";
import { Link } from "react-router-dom";

const CreateNewQuizPage = (props: { history: any; }) => {
    const [questions, setQuestions] = useState([""]);

    const onQuestionInputChange = (newQuestion: string, index: number) => {
        const newQuestions = questions.slice();
        newQuestions[index] = newQuestion;
        setQuestions(newQuestions);
    }

    function onButtonClicked() {
        setQuestions(questions.concat([""]));
    }

    function submitQuiz() {
        //TODO hook up backend submission
        const quizId = 'jD58Wd'
        props.history.push(`/quizCreationStatus/${quizId}`);
    }

    return <div>
        {questions.map((question, index) => {
            return (
                <div key={index}>
                <QuestionInput
                    index={index}
                    name={index.toString()}
                    label={"Question " + (index + 1)}
                    value={question}
                    onChange={onQuestionInputChange}
                    placeholder={"Please add your team quiz question"}
                    error={""}
                />
                </div>)
        })}
        <button
            onClick={onButtonClicked}
        >Add more question</button>
        <button
            onClick={submitQuiz}
        >Create quiz</button>
    </div>;
}

export default CreateNewQuizPage;
