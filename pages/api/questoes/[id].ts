import questions from '../bancoDeQuestoes'
export default function questoesProId(req, res) {
    const idSelecionado = req.query.id

    const unicaQuestaoOuNada = questions.filter(questao => questao.id === idSelecionado)

    if (unicaQuestaoOuNada.length === 1) {
        const questaoSelecionada = unicaQuestaoOuNada[0].embaralharRespostas()
        res.status(200).json(questaoSelecionada.paraObjeto())
    } else {
        res.status(204).send()
    }
}