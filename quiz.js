function Quiz(questions) {
    this.questions = questions;
    this.index = 0;
    this.trueAnswerCount = 0;
};

Quiz.prototype.getQuestion = function () {
    return this.questions[this.index];
};
