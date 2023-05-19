let questions = [
    new Question("question1", { a: "answer1", b: "answer1", c: "correctAnswer" }, "c"),
   new Question("question2", { a: "answer1", b: "correctAnswer", c: "answer1" }, "b"),/*
    new Question("question3", { a: "answer1", b: "answer1", c: "correctAnswer" }, "c"), 
    new Question("question4", { a: "answer1", b: "correctAnswer", c: "answer1" }, "b"),
    new Question("question5", { a: "answer1", b: "answer1", c: "correctAnswer" }, "c"),
    new Question("question6", { a: "answer1", b: "correctAnswer", c: "answer1" }, "b"),
    new Question("question7", { a: "answer1", b: "answer1", c: "correctAnswer" }, "c"),
    new Question("question8", { a: "answer1", b: "correctAnswer", c: "answer1" }, "b"),
    new Question("question9", { a: "answer1", b: "answer1", c: "correctAnswer" }, "c"),
    new Question("question10", { a: "answer1", b: "correctAnswer", c: "answer1" }, "b"),*/
];

function Question(questionText, answerOptions, correctAnswer) {
    this.questionText = questionText;
    this.answerOptions = answerOptions;
    this.correctAnswer = correctAnswer;
};

Question.prototype.answerControl = function (answer) {
    return answer === this.correctAnswer;
};