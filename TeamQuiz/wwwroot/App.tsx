import * as React from "react";
import Header from "./Common/Header";
import { Route, Switch } from "react-router-dom";
import PageNotFound from "./Common/PageNotFound";
import HomePage from "./Home/HomePage";
import CreateNewQuizPage from "./CreateNewQuiz/CreateNewQuizPage";
import QuizCreationStatusPage from "./CreateNewQuiz/QuizCreationStatusPage";
import SubmitQuizAnswers from "./SubmitAnswers/SubmitQuizAnswers";
import QuizAnswerStatusPage from "./SubmitAnswers/QuizAnswerStatusPage";

function App() {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/createNewQuiz" component={CreateNewQuizPage} />
                <Route exact path="/quizCreationStatus/:quizId" component={QuizCreationStatusPage} />
                <Route exact path="/answerQuiz/:quizId" component={SubmitQuizAnswers} />
                <Route exact path="/quizAnswerStatus" component={QuizAnswerStatusPage} />
                <Route component={PageNotFound} />
            </Switch>
        </div>
    );
}

export default App;
