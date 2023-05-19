function UI() {
    this.btn_start = document.querySelector(".btn_start");
    this.btn_next = document.querySelector('.next-btn');
    this.btn_replay = document.querySelector('.btn_replay');
    this.btn_quit = document.querySelector('.btn_quit');
    this.quiz_box = document.querySelector(".quiz_box");
    this.score_box = document.querySelector(".score_box");
    this.option_list = document.querySelector('.option_list');
    this.question_text = document.querySelector('.question_text');
    this.correct_icon = `<div class="icon"><i class="fas fa-check"></i></div>`;
    this.incorrect_icon = `<div class="icon"><i class="fas fa-times"></i></div>`;
    this.time_second = document.querySelector('.time_second');
    this.time_text = document.querySelector('.time_text');
    this.time_line = document.querySelector('.time_line');
}

UI.prototype.showQuestion = (question) => {
    ui.btn_next.classList.remove("show");
    let questionText = '<span>' + question.questionText + '</span>';
    let option = '';
    for (let answer in question.answerOptions) {
        option += `
        <div class='option'>
        <span><b>${answer}</b> :${question.answerOptions[answer]}</span>
      </div>`;
    }
    ui.question_text.innerHTML = questionText;
    option_list.innerHTML = option;

    const options = option_list.querySelectorAll('.option');
    for (let opt of options) {
        opt.setAttribute("onClick", "optionSelected(this)");
    }
}

UI.prototype.showQuestionCount = (questionOrder, totalQuestion) => {
    let tag = `<span class="badge bg-warning">${questionOrder} / ${totalQuestion}</span>`;
    document.querySelector('.quiz_box .question_index').innerHTML = tag;
}

UI.prototype.showScore = (totalQuestion,trueAnswer) => {
  let tag = `Toplam ${totalQuestion} sorudan ${trueAnswer} doğru cevap verdiniz.`;
  document.querySelector('.score_box .score_text').innerHTML = tag;
};