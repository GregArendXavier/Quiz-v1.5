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
    new QuestaoModel(3, 'Qual número é primo', [
        RespostaModel.errada('21'),
        RespostaModel.errada('15'),
        RespostaModel.errada('10'),
        RespostaModel.certa('7'),
    ], 'matematica'),
    new QuestaoModel(4, 'Qual o MMC de 21 e 12 ', [
        RespostaModel.errada('82'),
        RespostaModel.errada('48'),
        RespostaModel.errada('210'),
        RespostaModel.certa('84'),
    ], 'matematica'),
    new QuestaoModel(5, 'Qual a do delta na fórmula do Bhaskara?', [
        RespostaModel.errada('B² + 4 x A x C'),
        RespostaModel.errada('B² x 4 x A x C'),
        RespostaModel.errada('B² x A x C - 4'),
        RespostaModel.certa('B² - 4 x A x C'),
    ], 'matematica'),
    new QuestaoModel(6, 'Qual o MDC de 21 e 12 ', [
        RespostaModel.errada('2'),
        RespostaModel.errada('5'),
        RespostaModel.errada('7'),
        RespostaModel.certa('36'),
    ], 'matematica'),
    new QuestaoModel(7, 'Quanto é 8 + 8 x 8?', [
        RespostaModel.errada('x = 8'),
        RespostaModel.errada('x = 12'),
        RespostaModel.errada('x = 6'),
        RespostaModel.certa('72'),
    ], 'matematica'),
    new QuestaoModel(8, 'Qual valor é maior que 3?', [
        RespostaModel.errada('8/5'),
        RespostaModel.errada('15/30'),
        RespostaModel.errada('4/3'),
        RespostaModel.certa('20/6'),
    ], 'matematica'),
    new QuestaoModel(9, 'Quanto é o menor valor?', [
        RespostaModel.errada('1/2'),
        RespostaModel.errada('2/6'),
        RespostaModel.errada('3/10'),
        RespostaModel.certa('25/100'),
    ], 'matematica'),
    new QuestaoModel(10, 'Qual o resultado de: (8 + 6) x (3 + 5)', [
        RespostaModel.errada('128'),
        RespostaModel.errada('104'),
        RespostaModel.errada('120'),
        RespostaModel.certa('112'),
    ], 'matematica'),
    new QuestaoModel(11, 'O valor de Pi é considerado ...', [
        RespostaModel.errada('uma lei matemática'),
        RespostaModel.errada('um valor abstrato'),
        RespostaModel.errada('um conceito teórico'),
        RespostaModel.certa('uma dizima periódica'),
    ], 'matematica'),
    new QuestaoModel(12, 'Informe o equivalente a 2x² - 2x - 15', [
        RespostaModel.errada('(4x - 15).(2x - 1)'),
        RespostaModel.errada('(x + 3).(x - 5)'),
        RespostaModel.errada('(2x + 15).(x + 1)'),
        RespostaModel.certa('(2x + 5).(x - 3)'),
    ], 'matematica'),
    new QuestaoModel(13, 'Quanto é 2 + 4! ?', [
        RespostaModel.errada('30'),
        RespostaModel.errada('22'),
        RespostaModel.errada('6'),
        RespostaModel.certa('26'),
    ], 'matematica'),
    new QuestaoModel(14, 'Qual o primeiro número primeo do conjunto dos naturais?', [
        RespostaModel.errada('7'),
        RespostaModel.errada('5'),
        RespostaModel.errada('2'),
        RespostaModel.certa('1'),
    ], 'matematica'),
    new QuestaoModel(15, 'Qual a equação resultande de (a + b).(a + b)', [
        RespostaModel.errada('a + ab + b'),
        RespostaModel.errada('a² + b'),
        RespostaModel.errada('a² + b²'),
        RespostaModel.certa('a² + 2ab + b²'),
    ], 'matematica'),
    new QuestaoModel(16, 'Qual a pacital dos EUA?', [
        RespostaModel.errada(''),
        RespostaModel.errada('Los Angeles'),
        RespostaModel.errada('Nova York'),
        RespostaModel.certa('Washington'),
    ], 'geografia'),
    new QuestaoModel(17, 'Qual a capital da Australia', [
        RespostaModel.errada('Brisbane'),
        RespostaModel.errada('Melbourne'),
        RespostaModel.errada('Sidney'),
        RespostaModel.certa('Camberra'),
    ], 'geografia'),
    new QuestaoModel(18, 'Qual a capital da Espanha?', [
        RespostaModel.errada('Monaco'),
        RespostaModel.errada('Milão'),
        RespostaModel.errada('Barcelona'),
        RespostaModel.certa('Madrid'),
    ], 'geografia'),
    new QuestaoModel(19, 'Qual a capital do Piauí?', [
        RespostaModel.errada('Parnaíba'),
        RespostaModel.errada('Belém'),
        RespostaModel.errada('Natal'),
        RespostaModel.certa('Teresina'),
    ], 'geografia'),
    new QuestaoModel(20, 'Qual a capital do Equador', [
        RespostaModel.errada('Santiago'),
        RespostaModel.errada('Lima'),
        RespostaModel.errada('Guaiaquil'),
        RespostaModel.certa('Quito'),
    ], 'geografia'),
    new QuestaoModel(21, 'Em que estado está localizada a cidade de Bufalo?', [
        RespostaModel.errada('Ohio'),
        RespostaModel.errada('Nebraska'),
        RespostaModel.errada('Texas'),
        RespostaModel.certa('New York'),
    ], 'geografia'),
    new QuestaoModel(22, 'Em que estado fica a localizada a cidade de New Orleans?', [
        RespostaModel.errada('Florida'),
        RespostaModel.errada('Alabama'),
        RespostaModel.errada('Texas'),
        RespostaModel.certa('Louisiana'),
    ], 'geografia'),
    new QuestaoModel(23, 'Qual estado dos EUA fazia parte do México?', [
        RespostaModel.errada('Virginia'),
        RespostaModel.errada('New York'),
        RespostaModel.errada('Alabama'),
        RespostaModel.certa('California'),
    ], 'geografia'),
    new QuestaoModel(24, 'Qual estado dos EUA era um pais independente?', [
        RespostaModel.errada('Michigan'),
        RespostaModel.errada('Oregon'),
        RespostaModel.errada('Nebraska'),
        RespostaModel.certa('Hawai'),
    ], 'geografia'),
    new QuestaoModel(25, 'O fuso horário que define o horários de Brasilia é', [
        RespostaModel.errada('-1'),
        RespostaModel.errada('-5'),
        RespostaModel.errada('0'),
        RespostaModel.certa('-4'),
    ], 'geografia'),
    new QuestaoModel(26, 'Em qual continente fica localizada a Nova Zelandia?', [
        RespostaModel.errada('Africa'),
        RespostaModel.errada('Europa'),
        RespostaModel.errada('Ásia'),
        RespostaModel.certa('Oceania'),
    ], 'geografia'),
    new QuestaoModel(27, 'O México faz parte da ...', [
        RespostaModel.errada('América Central'),
        RespostaModel.errada('América do Sul'),
        RespostaModel.errada('Europa'),
        RespostaModel.certa('América do norte'),
    ], 'geografia'),
    new QuestaoModel(28, 'O estado do Pará faz parte da Região', [
        RespostaModel.errada('Sul do Brasil'),
        RespostaModel.errada('Nordeste do Brasil'),
        RespostaModel.errada('Cento-oeste do Brasil'),
        RespostaModel.certa('Norte do Brasil'),
    ], 'geografia'),
    new QuestaoModel(29, 'Qual pais recentemente saiu da União Europeia?', [
        RespostaModel.errada('Rússia'),
        RespostaModel.errada('Alemanha'),
        RespostaModel.errada('Inglaterra'),
        RespostaModel.certa('Reino Unido'),
    ], 'geografia'),
    new QuestaoModel(30, 'Qual o estado mais novo do Brasil?', [
        RespostaModel.errada('Rondonia'),
        RespostaModel.errada('Mato Grosso do Sul'),
        RespostaModel.errada('Acre'),
        RespostaModel.certa('Tocantins'),
    ], 'geografia'),
    new QuestaoModel(31, 'Qual estado dos EUA fazia parte do México?', [
        RespostaModel.errada('Virginia'),
        RespostaModel.errada('New York'),
        RespostaModel.errada('Alabama'),
        RespostaModel.certa('California'),
    ], 'historia'),
    new QuestaoModel(32, 'Em qual ano os primeiro portugueses chegram ao Brasil?', [
        RespostaModel.errada('1532'),
        RespostaModel.errada('1300'),
        RespostaModel.errada('1492'),
        RespostaModel.certa('1500'),
    ], 'historia'),
    new QuestaoModel(33, 'Em qual ano a América foi descoberta?', [
        RespostaModel.errada('1386'),
        RespostaModel.errada('1500'),
        RespostaModel.errada('1300'),
        RespostaModel.certa('1492'),
    ], 'historia'),
    new QuestaoModel(34, 'Em qual ano encerrou a ditadura militar do Brasil?', [
        RespostaModel.errada('2000'),
        RespostaModel.errada('1980'),
        RespostaModel.errada('1964'),
        RespostaModel.certa('1985'),
    ], 'historia'),
    new QuestaoModel(35, 'Em que ano foi implementado o plano Real?', [
        RespostaModel.errada('2008'),
        RespostaModel.errada('2000'),
        RespostaModel.errada('1950'),
        RespostaModel.certa('1994'),
    ], 'historia'),
    new QuestaoModel(36, 'Em que ano inicou a revolução francesa?', [
        RespostaModel.errada('1788'),
        RespostaModel.errada('1687'),
        RespostaModel.errada('1799'),
        RespostaModel.certa('1789'),
    ], 'historia'),
    new QuestaoModel(37, 'Em que ano inicou a Segunda Guerra nundial?', [
        RespostaModel.errada('1935'),
        RespostaModel.errada('1940'),
        RespostaModel.errada('1945'),
        RespostaModel.certa('1939'),
    ], 'historia'),
    new QuestaoModel(38, 'Em que ano inicou a Primeira Guerra nundial?', [
        RespostaModel.errada('1920'),
        RespostaModel.errada('1912'),
        RespostaModel.errada('1918'),
        RespostaModel.certa('1914'),
    ], 'historia'),
    new QuestaoModel(39, 'Em que ano iniciou a Guerra Civil americana?', [
        RespostaModel.errada('1850'),
        RespostaModel.errada('1860'),
        RespostaModel.errada('1865'),
        RespostaModel.certa('1861'),
    ], 'historia'),
    new QuestaoModel(40, 'Em que ano iniciou a Guerra dos farrapos?', [
        RespostaModel.errada('1810'),
        RespostaModel.errada('1820'),
        RespostaModel.errada('1845'),
        RespostaModel.certa('1835'),
    ], 'historia'),
    new QuestaoModel(41, 'Em que ano iniciou a Guerra dos farrapos?', [
        RespostaModel.errada('1936'),
        RespostaModel.errada('1939'),
        RespostaModel.errada('1930'),
        RespostaModel.certa('1947'),
    ], 'historia'),
    new QuestaoModel(42, 'Em que ano o homem chegou a lua?', [
        RespostaModel.errada('1965'),
        RespostaModel.errada('1984'),
        RespostaModel.errada('1958'),
        RespostaModel.certa('1969'),
    ], 'historia'),
    new QuestaoModel(43, 'Em que ano foi proclamada a independencia do Brasil?', [
        RespostaModel.errada('1835'),
        RespostaModel.errada('1840'),
        RespostaModel.errada('1811'),
        RespostaModel.certa('1822'),
    ], 'historia'),
    new QuestaoModel(44, 'Qual o maior império da história?', [
        RespostaModel.errada('Egípcio'),
        RespostaModel.errada('Persa'),
        RespostaModel.errada('Romano'),
        RespostaModel.certa('Mongol'),
    ], 'historia'),
    new QuestaoModel(45, 'Qual império  mais duradouro da história?', [
        RespostaModel.errada('Mongol'),
        RespostaModel.errada('Romano'),
        RespostaModel.errada('Egípcio'),
        RespostaModel.certa('Chinês'),
    ], 'historia'),
    new QuestaoModel(46, 'A dupla Grenal é composta por que times?', [
        RespostaModel.errada('Palmeiras e São Paulo'),
        RespostaModel.errada('Juventude e Gremio'),
        RespostaModel.errada('Juventude e Inter'),
        RespostaModel.certa('Gremio e inter'),
    ], 'esportes'),
    new QuestaoModel(47, 'Qual seleção foi campeã da primeira Copa do Mundo?', [
        RespostaModel.errada('Estados Unidos'),
        RespostaModel.errada('Italia'),
        RespostaModel.errada('Brasil'),
        RespostaModel.certa('Uruguai'),
    ], 'esportes'),
    new QuestaoModel(48, 'Qual seleção venceu a última Copa do Mundo (2018)?', [
        RespostaModel.errada('Brasil'),
        RespostaModel.errada('Inglaterra'),
        RespostaModel.errada('Alemanha'),
        RespostaModel.certa('França'),
    ], 'esportes'),
    new QuestaoModel(49, 'Qual a seleção mais vitoriosa em Copas do Mundo?', [
        RespostaModel.errada('França'),
        RespostaModel.errada('Italia'),
        RespostaModel.errada('Alemanha'),
        RespostaModel.certa('Brasil'),
    ], 'esportes'),
    new QuestaoModel(50, 'Quem é o atual melhor jogador do mundo(2021)?', [
        RespostaModel.errada('Neymar'),
        RespostaModel.errada('Lewandowski'),
        RespostaModel.errada('CR7'),
        RespostaModel.certa('Messi'),
    ], 'esportes'),
    new QuestaoModel(51, 'Qual time da NFL possui maior quantidade de Super Bowls?', [
        RespostaModel.errada('Ind. Colts'),
        RespostaModel.errada('PT Steelers'),
        RespostaModel.errada('GB Packers'),
        RespostaModel.certa('NE Patriots'),
    ], 'esportes'),
    new QuestaoModel(52, 'Quantos titulos do Super Bowl Tom Brady venceu?', [
        RespostaModel.errada('6'),
        RespostaModel.errada('7'),
        RespostaModel.errada('5'),
        RespostaModel.certa('8'),
    ], 'esportes'),
    new QuestaoModel(54, 'Qual time junto ao Celtics é o maior vencedor da NBA?', [
        RespostaModel.errada('Warriors'),
        RespostaModel.errada('Heat'),
        RespostaModel.errada('Bulls'),
        RespostaModel.certa('Lakers'),
    ], 'esportes'),
    new QuestaoModel(54, 'Quantas derrotas Pelé e Garricha tem juntos pela seleção?', [
        RespostaModel.errada('5'),
        RespostaModel.errada('3'),
        RespostaModel.errada('1'),
        RespostaModel.certa('0'),
    ], 'esportes'),
    new QuestaoModel(55, 'Quem derrotou o Brasil no jogo conhecido como Maracanaço?', [
        RespostaModel.errada('Italia'),
        RespostaModel.errada('Alemanha'),
        RespostaModel.errada('Argentina'),
        RespostaModel.certa('Uruguai'),
    ], 'esportes'),
    new QuestaoModel(56, 'Quem é o maior artilheiro de Copas do Mundo?', [
        RespostaModel.errada('Maradona'),
        RespostaModel.errada('Pelé'),
        RespostaModel.errada('Ronaldo'),
        RespostaModel.certa('Klose'),
    ], 'esportes'),
    new QuestaoModel(57, 'Em que país foi sediada a primeira Copa do Mundo?', [
        RespostaModel.errada('Argentina'),
        RespostaModel.errada('EUA'),
        RespostaModel.errada('Inglaterra'),
        RespostaModel.certa('Uruguai'),
    ], 'esportes'),
    new QuestaoModel(58, 'Em quantos jogos são definidos os playoffs da NBA?', [
        RespostaModel.errada('2'),
        RespostaModel.errada('1'),
        RespostaModel.errada('5'),
        RespostaModel.certa('7'),
    ], 'esportes'),
    new QuestaoModel(59, 'Quantos jogos cada time tem na temporada regular da NFL?', [
        RespostaModel.errada('13'),
        RespostaModel.errada('12'),
        RespostaModel.errada('16'),
        RespostaModel.certa('17'),
    ], 'esportes'),
    new QuestaoModel(60, 'Quantos innings compõe um jogo na MLB?', [
        RespostaModel.errada('15'),
        RespostaModel.errada('6'),
        RespostaModel.errada('12'),
        RespostaModel.certa('9'),
    ], 'esportes'),
    new QuestaoModel(61, 'A termodinâmia é composta por quantas leis?', [
        RespostaModel.errada('10'),
        RespostaModel.errada('5'),
        RespostaModel.errada('3'),
        RespostaModel.certa('4'),
    ], 'ciencias'),
    new QuestaoModel(62, 'Quantos ligações um átomo de carbono faz?', [
        RespostaModel.errada('12'),
        RespostaModel.errada('5'),
        RespostaModel.errada('3'),
        RespostaModel.certa('4'),
    ], 'ciencias'),
    new QuestaoModel(63, 'Fe²O³ é a composição do que?', [
        RespostaModel.errada('Titânio'),
        RespostaModel.errada('Ferro fundido'),
        RespostaModel.errada('Aço'),
        RespostaModel.certa('Ferrugem'),
    ], 'ciencias'),
    new QuestaoModel(64, 'Qual a diferença de composição do aço e ferro fundido?', [
        RespostaModel.errada('Modo de fabricação'),
        RespostaModel.errada('Elementos'),
        RespostaModel.errada('Quantidade de ferro'),
        RespostaModel.certa('Quantidade de carbono'),
    ], 'ciencias'),
    new QuestaoModel(65, 'As tartarugas fazem parte de qual subclasse dos animais?', [
        RespostaModel.errada('Ave'),
        RespostaModel.errada('Mamífero'),
        RespostaModel.errada('Anfíbio'),
        RespostaModel.certa('Reptil'),
    ], 'ciencias'),
    new QuestaoModel(66, 'As baleias fazem parte de qual subclasse dos animais?', [
        RespostaModel.errada('Ave'),
        RespostaModel.errada('Anfíbio'),
        RespostaModel.errada('Reptil'),
        RespostaModel.certa('Mamífero'),
    ], 'ciencias'),
    new QuestaoModel(67, 'As baleias fazem parte de qual subclasse dos animais?', [
        RespostaModel.errada('Ave'),
        RespostaModel.errada('Anfíbio'),
        RespostaModel.errada('Reptil'),
        RespostaModel.certa('Mamífero'),
    ], 'ciencias'),
    new QuestaoModel(68, 'Qual material é utilizado como combustível de estrelas?', [
        RespostaModel.errada('Carbono'),
        RespostaModel.errada('Enxofre'),
        RespostaModel.errada('Oxigênio'),
        RespostaModel.certa('Hidrogênio'),
    ], 'ciencias'),
    new QuestaoModel(69, 'Como se chama o movimento que a Terra em torno do Sol?', [
        RespostaModel.errada('Giro anual'),
        RespostaModel.errada('Volta universal'),
        RespostaModel.errada('Rotação'),
        RespostaModel.certa('Translação'),
    ], 'ciencias'),
    new QuestaoModel(70, 'Qual a forma da órbita que a terra faz ao redor do sol?', [
        RespostaModel.errada('Quadrada'),
        RespostaModel.errada('Oval'),
        RespostaModel.errada('Circular'),
        RespostaModel.certa('Elíptica'),
    ], 'ciencias'),
    new QuestaoModel(71, 'O que causa as auroras boreal e austral?', [
        RespostaModel.errada('Não exitem'),
        RespostaModel.errada('Poluição da atmosfera'),
        RespostaModel.errada('Baixas temperaturas dos polos'),
        RespostaModel.certa('Campos magnéticos da Terra'),
    ], 'ciencias'),
    new QuestaoModel(72, 'Onde podemos avistar a aurora boreal?', [
        RespostaModel.errada('Espaço'),
        RespostaModel.errada('Qualquer lugar'),
        RespostaModel.errada('Pólo sul'),
        RespostaModel.certa('Pólo norte'),
    ], 'ciencias'),
    new QuestaoModel(73, 'Onde podemos avistar a aurora austral?', [
        RespostaModel.errada('Espaço'),
        RespostaModel.errada('Qualquer lugar'),
        RespostaModel.errada('Pólo norte'),
        RespostaModel.certa('Pólo sul'),
    ], 'ciencias'),
    new QuestaoModel(74, 'Um ano luz é uma medida de ', [
        RespostaModel.errada('Peso'),
        RespostaModel.errada('Velocidade'),
        RespostaModel.errada('Temppo'),
        RespostaModel.certa('Distância'),
    ], 'ciencias'),
    new QuestaoModel(75, 'Candela é uma unidade de medida de?', [
        RespostaModel.errada('Velocidade'),
        RespostaModel.errada('Tempo'),
        RespostaModel.errada('Espaço'),
        RespostaModel.certa('Luminosidade'),
    ], 'ciencias'),
]

export default questions