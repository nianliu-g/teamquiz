import * as React from "react";
import {useState} from "react";
import QuestionInput from "./QuestionInput";

const CreateNewQuizPage = () => {
    const [questions, setQuestions] = useState([""]);

    const onQuestionInputChange = (newQuestion: string, index: number) => {
        questions.splice(index, 1, newQuestion);
    }

    return <div>
        {questions.map((question, index) => {
            return (
                <QuestionInput
                    index={index}
                    name={index.toString()}
                    label={"Question " + index}
                    value={question}
                    onChange={onQuestionInputChange}
                    placeholder={"Please add your team quiz question"}
                    error={""}
                />)
        })}
    </div>;
}

export default CreateNewQuizPage;
