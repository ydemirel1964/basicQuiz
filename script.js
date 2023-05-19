const quiz = new Quiz(questions);
const ui = new UI();

ui.btn_start.addEventListener('click', function () {
    ui.quiz_box.classList.add("active");
    startTimer(5);
    startTimerLine();
    ui.showQuestion(quiz.getQuestion());
    ui.showQuestionCount(quiz.index + 1, quiz.questions.length);
    ui.btn_next.classList.remove("show");
});

const option_list = ui.option_list;

ui.btn_next.addEventListener('click', function () {
    if (quiz.questions.length !== quiz.index + 1) {
        quiz.index += 1;
        clearInterval(counter);
        clearInterval(counterLine);
        startTimer(5);
        startTimerLine()
        ui.showQuestion(quiz.getQuestion());
        ui.showQuestionCount(quiz.index + 1, quiz.questions.length);
    }
    else {
        clearInterval(counter);
        clearInterval(counterLine);
        ui.score_box.classList.add("active");
        ui.quiz_box.classList.remove("active");
        ui.showScore(quiz.questions.length, quiz.trueAnswerCount);
    }
});

function optionSelected(opt) {
    clearInterval(counter);
    clearInterval(counterLine);
    let answer = opt.querySelector('span b').textContent;
    let question = quiz.getQuestion();
    if (question.answerControl(answer)) {
        quiz.trueAnswerCount += 1;
        opt.classList.add('correct');
        opt.insertAdjacentHTML("beforeend", ui.correct_icon);
    } else {
        opt.classList.add('incorrect');
        opt.insertAdjacentHTML("beforeend", ui.incorrect_icon);
    }
    for (let index = 0; index < option_list.children.length; index++) {
        option_list.children[index].classList.add('disabled');
    }

    ui.btn_next.classList.add("show");
}

ui.btn_quit.addEventListener('click', () => {
    window.location.reload();
});

ui.btn_replay.addEventListener('click', () => {
    ui.score_box.classList.remove("active");
    quiz.index = 0;
    quiz.trueAnswerCount = 0;
    ui.btn_start.click();
});

let counter;
function startTimer(time) {
    counter = setInterval(timer, "1000");
    function timer() {
        ui.time_second.textContent = time;
        time--;
        if (time < 0) {
            clearInterval(counter);
            ui.time_text.textContent = "Süre Bitti";
            ui.time_second.textContent = "";
            let answer = quiz.getQuestion().correctAnswer;
            for (let option of ui.option_list.children) {
                if (option.querySelector("span b").textContent == answer) {
                    option.classList.add('correct');
                }
                option.classList.add('disabled');
            }
            ui.btn_next.classList.add("show");
        }
    }
}

let counterLine;
function startTimerLine(time) {
    let line_width = 0;
    counterLine = setInterval(timer, 10);
    function timer() {

        line_width += 1;
        ui.time_line.style.width = line_width + "px";
        if (line_width >= 549) {
            clearInterval(counterLine)
        }
    }
}