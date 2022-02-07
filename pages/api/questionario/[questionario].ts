import { randomQuestions } from '../../../functions/arrays'
import questions from '../bancoDeQuestoes'

export default function questionario(req, res) {
    let assunto = req.query.questionario

    const ids = questions.filter(questao => questao.assunto === assunto).map(questao => questao.id)
    res.status(200).json(randomQuestions(ids))
}