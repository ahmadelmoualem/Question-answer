const question = [
    {   
        id: 1,
        question: 'what is your name',
        answer: 'my name is ahamd',
    },
    {
        id: 2,
        question: 'how old are you',
        answer: 'am 27 years old',
    },
    {
        id: 3,
        question: 'what your profission',
        answer: 'aw aw aw',
    },
];

module.exports = {
    getAllQuestion: function(req, res) {
        res.json(question);
        },

    getQuestionById: function(req, res) {
        question.find(function(question, index) {
            if(question.id === id) {
                foundQuestion = question;
            }
        });

    } 


}
