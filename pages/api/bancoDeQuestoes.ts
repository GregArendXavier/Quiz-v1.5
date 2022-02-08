import QuestaoModel from "../../model/questao";
import RespostaModel from "../../model/resposta";

const questions: QuestaoModel[] = [
    new QuestaoModel(306, 'Qual bicho transmite a Doença de Chagas?', [
        RespostaModel.errada('Abelha'),
        RespostaModel.errada('Barata'),
        RespostaModel.errada('Pulga'),
        RespostaModel.certa('Barbeiro'),
    ], 'diversos'),
    new QuestaoModel(202, 'Qual fruto é conhecido no Norte e Nordeste como "jerimum"?', [
        RespostaModel.errada('Caju'),
        RespostaModel.errada('Côco'),
        RespostaModel.errada('Chuchu'),
        RespostaModel.certa('Abóbora'),
    ], 'diversos'),
    new QuestaoModel(203, 'Qual é o coletivo de cães?', [
        RespostaModel.errada('Manada'),
        RespostaModel.errada('Alcateia'),
        RespostaModel.errada('Rebanho'),
        RespostaModel.certa('Matilha'),
    ], 'diversos'),
    new QuestaoModel(204, 'Qual é o triângulo que tem todos os lados diferentes?', [
        RespostaModel.errada('Equilátero'),
        RespostaModel.errada('Isóceles'),
        RespostaModel.errada('Trapézio'),
        RespostaModel.certa('Escaleno'),
    ], 'diversos'),
    new QuestaoModel(205, 'Quem compôs o Hino da Independência?', [
        RespostaModel.errada('Castro Alves'),
        RespostaModel.errada('Manuel Bandeira'),
        RespostaModel.errada('Carlos Gomes'),
        RespostaModel.certa('Dom Pedro I'),
    ], 'diversos'),
    new QuestaoModel(206, 'Qual é o antônimo de "malograr"?', [
        RespostaModel.errada('Perder'),
        RespostaModel.errada('Fracassar'),
        RespostaModel.errada('Desprezar'),
        RespostaModel.certa('Conseguir'),
    ], 'diversos'),
    new QuestaoModel(207, 'Em que país nasceu Carmen Miranda?', [
        RespostaModel.errada('Argentina'),
        RespostaModel.errada('Espanha'),
        RespostaModel.errada('Brasil'),
        RespostaModel.certa('Portugal'),
    ], 'diversos'),
    new QuestaoModel(208, 'Qual foi o último Presidente do período da ditadura militar no Brasil?', [
        RespostaModel.errada('Costa e Silva'),
        RespostaModel.errada('Emílio Médici'),
        RespostaModel.errada('Ernesto Geisel'),
        RespostaModel.certa('João Figueiredo'),
    ], 'diversos'),
    new QuestaoModel(209, 'Seguindo a sequência do baralho, qual carta vem depois do dez?', [
        RespostaModel.errada('Ás'),
        RespostaModel.errada('Nove'),
        RespostaModel.errada('Rei'),
        RespostaModel.certa('Valete'),
    ], 'diversos'),
    new QuestaoModel(210, 'O adjetivo "venoso" está relacionado a:', [
        RespostaModel.errada('Vela'),
        RespostaModel.errada('Vento'),
        RespostaModel.errada('Vênia'),
        RespostaModel.certa('Veia'),
    ], 'diversos'),
    new QuestaoModel(211, 'Que nome se dá à purificação por meio da água?', [
        RespostaModel.errada('Abrupção'),
        RespostaModel.errada('Abolição'),
        RespostaModel.errada('Abnegação'),
        RespostaModel.certa('Ablução'),
    ], 'diversos'),
    new QuestaoModel(212, 'Qual montanha se localiza entre a fronteira do Tibet com o Nepal?', [
        RespostaModel.errada('Monte Branco'),
        RespostaModel.errada('Monte Fuji'),
        RespostaModel.errada('Monte Carlo'),
        RespostaModel.certa('Monte Everest'),
    ], 'diversos'),
    new QuestaoModel(213, 'Em que parte do corpo se encontra a epiglote?', [
        RespostaModel.errada('Estômago'),
        RespostaModel.errada('Pâncreas'),
        RespostaModel.errada('Rim'),
        RespostaModel.certa('Pescoço'),
    ], 'diversos'),
    new QuestaoModel(214, 'A compensação por perda é chamada de...', [
        RespostaModel.errada('Déficit'),
        RespostaModel.errada('Indexação'),
        RespostaModel.errada('Indébito'),
        RespostaModel.certa('Indenização'),
    ], 'diversos'),
    new QuestaoModel(215, 'Que personagem do folclore brasileiro tem uma perna só?', [
        RespostaModel.errada('Cuca'),
        RespostaModel.errada('Curupira'),
        RespostaModel.errada('Boitatá'),
        RespostaModel.certa('Saci-pererê'),
    ], 'diversos'),
    new QuestaoModel(216, 'Quem é o "patrono" do Exército Brasileiro?', [
        RespostaModel.errada('Marechal Deodoro'),
        RespostaModel.errada('Barão de Mauá'),
        RespostaModel.errada('Marquês de Pombal'),
        RespostaModel.certa('Duque de Caxias'),
    ], 'diversos'),
    new QuestaoModel(1, 'Quanto é o valor de "x" em x² - 64?', [
        RespostaModel.errada('x = 8'),
        RespostaModel.errada('x = 12'),
        RespostaModel.errada('x = 6'),
        RespostaModel.certa('x = +-8'),
    ], 'matematica'),
    new QuestaoModel(2, 'Qual conjunto numérico engloba somente os numeros positivos?', [
        RespostaModel.errada('Reais'),
        RespostaModel.errada('Inteiros'),
        RespostaModel.errada('Positivos'),
        RespostaModel.certa('Naturais'),
    ], 'matematica'),
    new QuestaoModel(3, 'Qual o conjunto de número(s', [
        RespostaModel.errada('3, 4'),
        RespostaModel.errada('2'),
        RespostaModel.errada('5'),
        RespostaModel.certa('2, 5'),
    ], 'matematica'),
    new QuestaoModel(4, 'Qual o conjunto de número(s) ', [
        RespostaModel.errada('3, 5'),
        RespostaModel.errada('2, 3'),
        RespostaModel.errada('2, 5'),
        RespostaModel.certa('3, 4'),
    ], 'matematica'),
    new QuestaoModel(5, 'Qual a do delta na fórmula do Bhaskara?', [
        RespostaModel.errada('B² + 4 x A x C'),
        RespostaModel.errada('B² x 4 x A x C'),
        RespostaModel.errada('B² x A x C - 4'),
        RespostaModel.certa('B² - 4 x A x C'),
    ], 'matematica'),
    new QuestaoModel(6, 'Quanto é o valor de "x" em x² - 64?', [
        RespostaModel.errada('x = 8'),
        RespostaModel.errada('x = 12'),
        RespostaModel.errada('x = 6'),
        RespostaModel.certa('x = +-8'),
    ], 'matematica'),
    new QuestaoModel(7, 'é o valor de "x" em x² ', [
        RespostaModel.errada('x = 8'),
        RespostaModel.errada('x = 12'),
        RespostaModel.errada('x = 6'),
        RespostaModel.certa('x = +-8'),
    ], 'matematica'),
    new QuestaoModel(8, 'Quanto é o valor de "x" em x² - 64?', [
        RespostaModel.errada('x = 8'),
        RespostaModel.errada('x = 12'),
        RespostaModel.errada('x = 6'),
        RespostaModel.certa('x = +-8'),
    ], 'matematica'),
    new QuestaoModel(9, 'Quanto é o valor de "x" em x² - 64?', [
        RespostaModel.errada('x = 8'),
        RespostaModel.errada('x = 12'),
        RespostaModel.errada('x = 6'),
        RespostaModel.certa('x = +-8'),
    ], 'matematica'),
    new QuestaoModel(10, 'Quanto é o valor de "x" em x² - 64?', [
        RespostaModel.errada('x = 8'),
        RespostaModel.errada('x = 12'),
        RespostaModel.errada('x = 6'),
        RespostaModel.certa('x = +-8'),
    ], 'matematica'),
    new QuestaoModel(11, 'Quanto é o valor de "x" em x² - 64?', [
        RespostaModel.errada('x = 8'),
        RespostaModel.errada('x = 12'),
        RespostaModel.errada('x = 6'),
        RespostaModel.certa('x = +-8'),
    ], 'matematica'),
    new QuestaoModel(12, 'Quanto é o valor de "x" em x² - 64?', [
        RespostaModel.errada('x = 8'),
        RespostaModel.errada('x = 12'),
        RespostaModel.errada('x = 6'),
        RespostaModel.certa('x = +-8'),
    ], 'matematica'),
    new QuestaoModel(13, 'Quanto é o valor de "x" em x² - 64?', [
        RespostaModel.errada('x = 8'),
        RespostaModel.errada('x = 12'),
        RespostaModel.errada('x = 6'),
        RespostaModel.certa('x = +-8'),
    ], 'matematica'),
    new QuestaoModel(14, 'Quanto é o valor de "x" em x² - 64?', [
        RespostaModel.errada('x = 8'),
        RespostaModel.errada('x = 12'),
        RespostaModel.errada('x = 6'),
        RespostaModel.certa('x = +-8'),
    ], 'matematica'),
    new QuestaoModel(15, 'Quanto é o valor de "x" em x² - 64?', [
        RespostaModel.errada('x = 8'),
        RespostaModel.errada('x = 12'),
        RespostaModel.errada('x = 6'),
        RespostaModel.certa('x = +-8'),
    ], 'matematica'),
]

export default questions