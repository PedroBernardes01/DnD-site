import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personagens',
  templateUrl: './personagens.component.html',
  styleUrls: ['./personagens.component.css']
})
export class PersonagensComponent implements OnInit {
  //CAMINHO PRIMITIVOA fúria queima no coração de cada bárbaro, umaqueimação que leva-os a grandeza. Bárbaros diferentes,no entanto, atribuem suas fúrias a fontes diferentes. Paraalguns, é um reservatório interno onde a dor, aflição eraiva são forjados numa fúria dura como aço. Outrosveem-na como uma bênção espiritual, uma dadiva de umtotem animal.CAMINHO DO FURIOSOPara alguns bárbaros, a fúria é um meio para um fim –esse fim é a violência. O Caminho do Furioso é umcaminho de fúria livre, entumecido em sangue. A medidaque você entra na fúria de um furioso, você vibra no caosda batalha, despreocupado com a sua própria saúde oubem-estar.FRENESIComeçando no momento que você escolhe esse caminho no3° nível, você pode entrar num frenesi quando estiver emfúria. Se você desejar, pela duração da sua fúria, vocêpode realizar um único ataque corpo-a-corpo com arma,com uma ação bônus, em cada um de seus turnos apósesse. Quando sua fúria acabar, você sofrerá um nível deexaustão (como descrito no apêndice A).FÚRIA INCONSCIENTEA partir do 6° nível, você não pode ser enfeitiçado ouamedrontado enquanto estiver em fúria. Se você estavaenfeitiçado ou amedrontado quando entrou em fúria, oefeito é suspenso pela duração da fúria.PRESENÇA INTIMIDANTEA partir do 10° nível, você pode usar sua ação paraamedrontar alguém com sua presença intimidante.Quando o fizer, escolha uma criatura que você possa ver a9 metros. Se a criatura puder ver ou ouvir você, ela deveser bem sucedida num teste de resistência de Sabedoria(CD igual a 8 + seu bônus de proficiência + seumodificador de Carisma) ou ficara com medo de você até ofim do seu próximo turno. Nos turnos seguintes, vocêpode usar sua ação para estender a duração desse efeitona criatura amedrontada até o início do seu próximoturno. Esse efeito termina se a criatura terminar seuturno fora da sua linha de visão ao a mais de 18 metrosde você. Se a criatura for bem sucedida no teste de resistência,você não poderá usar essa característica nessa criaturanovamente por 24 horas.RETALIAÇÃOA partir do 14° nível, quando você sofrer dano de umacriatura que esteja a até 1,5 metro de você, você pode usarsua reação para realizar um ataque corpo-a-corpo comarma contra essa criatura.CAMINHO DO GUERREIRO TOTÊMICOO Caminho do Guerreiro Totêmico é uma jornadaespiritual, à partir do momento que o bárbaro aceita umespirito animal como seu guia, protetor e inspiração. Embatalha, seu espirito totêmico preenche você com forçasobrenatural, adicionando combustível mágico a sua fúriabárbara.A maioria das tribos bárbaras consideram que umanimal totêmico possui parentesco a um clã emparticular. Em tais casos, é incomum a um indivíduopossuir mais de um espirito animal totêmico, apesar deexistirem exceções.CONSELHEIRO ESPIRITUALSeu caminho é buscar a sintonia com o mundo natural,concedendo a você uma afinidade com as bestas. A partirdo 3° nível, quando você toma esse caminho, você recebe ahabilidade de conjurar as magias sentido bestial e falarcom animais, mas apenas na forma de rituais, comodescrito no capítulo 10.TOTEM ESPIRITUALA partir do 3° nível, quando você adota esse caminho,você escolhe um totem espiritual e ganha suascaracterísticas. Você deve fazer ou adquirir um objetofísico como totem – um amuleto ou adorno similar – queincorpora o pelo ou penas, garras, dente ou ossos doanimal totêmico. Se você quiser, você também adquirepequenos atributos físicos que o assemelham ao seu totemespiritual. Por exemplo, se você tiver o totem espiritual dourso, você seria incomumente peludo e de pele grossa, ouse o seu totem for a águia, seu olhos teriam um brilhoamarelado.Seu totem animal deve ser um animal relacionado aoslistados aqui, mas pode ser um mais apropriado a suaterra natal. Por exemplo, você poderia escolher falcão ouabutre ao invés de águia.Águia. Quando estiver em fúria e não estiver vestindouma armadura pesada, as outras criaturas terãodesvantagem nas jogadas de ataque de oportunidadecontra você e você pode usar a ação de Disparada comouma ação bônus no seu turno. O espirito da águia tornavocê um predador que pode vagar pelo meio da briga comfacilidade.Lobo. Quando estiver em fúria, seus amigos temvantagem nas jogadas de ataque corpo-a-corpo realizadascontra qualquer criatura a 1,5 metro de você que sejahostil a você. O espirito do lobo transforma você em umlíder de caça.Urso. Quando em fúria, você adquire resistência atodos os tipos de dano, exceto dano psíquico. O espirito dourso torna você vigoroso o suficiente para permanecer depé diante de qualquer castigo.ASPECTO DA BESTANo 6° nível, você adquire um benefício místico baseado nototem que você escolheu. Você pode escolher o mesmoanimal que selecionou no 3° nível ou um diferente.Águia. Você ganha a visão aguçada de uma águia.Você pode ver a até 1,6 km sem dificuldade, sendo capazde discernir até os menores detalhes quando estiverolhando para algo a menos de 30 metros de você. Alémdisso, penumbra não impõem desvantagem nos seustestes de Sabedoria (Percepção).Lobo. Você ganha a sensibilidade predatória de umlobo. Você pode rastrear outras criaturas quando estiverviajando a passo rápido e você pode se moverfurtivamente quando estiver viajando a passo normal(veja o capítulo 8 para as regras de passo de viagem).Urso. Você ganha a força de um urso. Sua capacidadede carga (incluindo carga máxima e capacidade de erguer)é dobrada e você tem vantagem em testes de Forçarealizados para empurrar, puxar, erguer ou quebrarobjetos.ANDARILHO ESPIRITUALNo 10° nível, você pode conjurar a magia comunhão com anatureza, mas apenas como um ritual. Quando o fizer,uma versão espiritual de um dos animais que vocêescolheu como Totem Espiritual ou Aspecto da Bestaaparece para você para transmitir a informação que vocêbusca.SINTONIA TOTÊMICANo 14° nível, você ganha um benefício magico baseado emum totem animal, à sua escolha. Você pode escolher omesmo animal que selecionou anteriormente ou umdiferente.Águia. Quando estiver em fúria, você adquire umdeslocamento de voo igual ao seu deslocamento decaminhada. Esse benefício funciona apenas em pequenosexplosões: você cai se terminar seu turno no ar e não tivernada em que possa se agarrar.Lobo. Quando estiver em fúria, você pode usar umaação bônus no seu turno para derrubar uma criaturaGrande ou menor no chão quando você atingi-la com umataque corpo-a-corpo com arma.Urso. Quando estiver em fúria, qualquer criatura aaté 1,5 metro de você que for hostil a você terádesvantagem nas jogadas de ataque contra outros alvosalém de você ou outro personagem com essacaracterística. Um inimigo é imune a esse efeito se elenão puder ver ou ouvir você ou caso ele não possa seramedrontado.
  //objetos
  classes = [
    {
      id: 1,
      class: 0, //0 tank, 1 dps, 2 support
      vida: [0,0,0,0,1,0],
      nome: 'Bárbaro',
      vantagem: [1,3],
      quantproef: 2,
      proef: [42,11,53,34,44,45],
      carac: [
        {
          id: 1,
          nome: 'FÚRIA',
          nvl: 1,
          desc:'Em batalha, você luta com uma ferocidade primitiva. Noseu turno, você pode entrar em fúria com uma açãobônus.Enquanto estiver em fúria, você recebe os seguintes benefícios se você não estiver vestindo uma armadura pesada: 1. Você tem vantagem em testes de Força e testes de resistência de Força.2. Quando você desferir um ataque com arma corpo-a-corpo usando Força, você recebe um bônus nas jogadas de dano que aumenta à medida que você adquire níveis de bárbaro, como mostrado na coluna Dano de Fúria na tabela O Bárbaro.3.  Você possui resistência contra dano de concussão,cortante e perfurante. Se você for capaz de conjurar magias, você não poderá conjurá-las ou se concentrar nelas enquanto estiver em fúria. Sua fúria dura por 1 minuto. Ela termina prematuramente se você cair inconsciente ou se seu turno acabar e você não tiver atacado nenhuma criatura hostil desde seu último turno ou não tiver sofrido dano nesse período. Você também pode terminar sua fúria no seu turno com uma ação bônus. Quando você tiver usado a quantidade de fúrias mostrada para o seu nível de bárbaro na coluna Fúrias da tabela O Bárbaro, você precisará terminar um descanso longo antes de poder entrar em fúria novamente.',
          req: null,
        },
        {
          id: 2,
          nome: 'DEFESA SEM ARMADURA',
          nvl: 1,
          desc:'Quando você não estiver vestindo qualquer armadura,sua Classe de Armadura será 10 + seu modificador de Destreza + seu modificador de Constituição. Você pode usar um escudo e continuar a receber esse benefício.',
          req: null,
        },
        {
          id: 3,
          nome: 'ATAQUE DESCUIDADOA',
          nvl: 2,
          desc:'partir do 2° nível, você pode desistir de toda preocupação com sua defesa para atacar com umdesespero feroz. Quando você fizer o seu primeiro ataqueno turno, você pode decidir atacar descuidadamente.Fazer isso lhe concede vantagem nas jogadas de ataque com armas corpo-a-corpo usando Força durante seu turno,porém, as jogadas de ataques feitas contra você possuem vantagem até o início do seu próximo turno.',
          req: null,
        },
        {
          id: 4,
          nome: 'SENTIDO DE PERIGO',
          nvl: 2,
          desc:'No 2° nível, você adquire um sentido sobrenatural dequando as coisas próximas não estão como deveriam,concedendo a você uma chance maior quando estiver evitando perigos.Você possui vantagem em testes de resistência de Destreza contra efeitos que você possa ver, como armadilhas e magias. Para receber esse benefício você não pode estar cego, surdo ou incapacitado.',
          req: null,
        },
        {
          id: 5,
          nome: 'CAMINHO PRIMITIVO',
          nvl: 3,
          desc:'No 3° nível, você escolhe um caminho que molda a natureza da sua fúria. Escolha o Caminho do Furioso ou o Caminho do Guerreiro Totêmico, ambos detalhados nofinal da descrição de classe. Sua escolha lhe concederá características no 3° nível e novamente no 6°, 10° e 14° níveis.',
          req: null,
        },
        {
          id: 6,
          nome: 'INCREMENTO NO VALOR DE HABILIDADE',
          nvl: 4,
          desc:'Quando você atinge o 4° nível e novamente no 8°, 12°, 16° e 19° nível, você pode aumentar um valor de habilidade, àsua escolha, em 2 ou você pode aumentar dois valores de habilidade, à sua escolha em 1. Como padrão, você não pode elevar um valor de habilidade acima de 20 com essa característica.',
          req: null,
        },
        {
          id: 7,
          nome: 'ATAQUE EXTRA',
          nvl: 5,
          desc:'A partir do 5° nível, você pode atacar duas vezes, ao invés de uma, sempre que você realizar a ação de Ataque no seu turno.',
          req: null,
        },
        {
          id: 8,
          nome: 'MOVIMENTO RÁPIDO',
          nvl: 5,
          desc:'Começando no 5° nível, seu deslocamento aumenta em 3 metros enquanto você não estiver vestindo uma armadura pesada.',
          req: null,
        },
        {
          id: 9,
          nome: 'INSTINTO SELVAGEM',
          nvl: 7,
          desc:'No 7° nível, seu instinto está tão apurado que você recebe vantagem nas jogadas de iniciativa. Além disso, se você estiver surpreso no começo de um combate e não estiver incapacitado, você pode agir normalmente no seu primeiro turno, mas apenas se você entrar em fúria antes de realizar qualquer outra coisa neste turno.',
          req: null,
        },
        {
          id: 10,
          nome: 'CRÍTICO BRUTALA',
          nvl: 9,
          desc:'partir do 9° nível, você pode rolar um dado de dano de arma adicional quando estiver determinando o dano extra de um acerto crítico com uma arma corpo-a-corpo. Isso aumenta para dois dados adicionais no 13° nível e três dados adicionais no 17° nível.',
          req: null,
        },
        {
          id: 11,
          nome: 'FÚRIA IMPLACÁVELA',
          nvl: 11,
          desc:'a partir do 11° nível, sua fúria pode manter você lutando independente da gravidade dos seus ferimentos. Se você cair para 0 pontos de vida enquanto estiver em fúria e não morrer, você pode realizar um teste de resistência de Constituição CD 10. Se você for bem sucedido, você volta para 1 ponto de vida ao invés disso.Cada vez que você utilizar essa característica após a primeira, a CD aumenta em 5. Assim que você terminar um descanso curto ou longo a CD volta para 10.',
          req: null,
        },
        {
          id: 12,
          nome: 'FÚRIA PERSISTENTEA',
          nvl: 15,
          desc:'partir do 15° nível, sua fúria é tão brutal que ela só termina prematuramente se você cair inconsciente ou se você decidir terminá-la.',
          req: null,
        },
        {
          id: 13,
          nome: 'FORÇA INDOMÁVELA',
          nvl: 18,
          desc:' partir do 18° nível, se o total de um teste de Força seu for menor que o seu valor de Força, você pode usar esse valor no lugar do resultado.',
          req: null,
        },
        {
          id: 14,
          nome: 'CAMPEÃO PRIMITIVO',
          nvl: 20,
          desc:'No 20° nível, você incorpora os poderes da natureza. Seusvalores de Força e Constituição aumentam em 4. Seumáximo para esses valores agora é 24.',
          req: null,
        }
      ],
      Arma1: [0],
      Arma2: [1],
    }
  ]

  races = [
    {
      id: 1,
      nome: 'Anão',
      atributs: [0,0,2,0,0,0],
      carac: [
        {
          id: 1,
          nome: 'Aumento no Valor de Habilidade',
          desc: 'Seu valor de Constituição aumenta em 2.' 
        },
        {
          id: 2,
          nome: 'Idade',
          desc: 'Anões tornam-se maduros na mesma proporção que os humanos, mas são considerados jovens até atingirem a idade de 50 anos. Em média, eles vivem 350 anos.' 
        },
        {
          id: 3,
          nome: 'Tendência',
          desc: 'A maioria dos anões é leal, pois acreditam firmemente nos benefícios de uma sociedade bem organizada. Eles tendem para o bem, com um forte senso de honestidade e uma crença de que todos merecem compartilhar os benefícios de uma ordem social justa.' 
        },
        {
          id: 4,
          nome: 'Tamanho',
          desc: 'Anões estão entre 1,20 e 1,50 metro de altura e pesam cerca de 75 kg. Seu tamanho é Médio.' 
        },
        {
          id: 5,
          nome: 'Deslocamento',
          desc: 'Seu deslocamento base de caminhada é de 7,5 metros. Seu deslocamento não é reduzido quando estiver usando armadura pesada.' 
        },
        {
          id: 6,
          nome: 'Visão no Escuro',
          desc: 'Acostumado à vida subterrânea, você tem uma visão superior no escuro e na penumbra. Você enxerga na penumbra a até 18 metros como se fosse luz plena, e no escuro como se fosse na penumbra. Você não pode discernir cores no escuro, apenas tons de cinza.' 
        },
        {
          id: 7,
          nome: 'Resiliência Anã',
          desc: 'Você possui vantagem em testes de resistência contra venenos e resistência contra dano de veneno (explicado no capítulo 9).' 
        },
        {
          id: 8,
          nome: 'Treinamento Anão em Combate',
          desc: 'Você tem proficiência com machados de batalha, machadinhas, martelos leves e martelos de guerra.' 
        },
        {
          id: 9,
          nome: 'Proficiência com Ferramentas',
          desc: 'Você tem proficiência em uma ferramenta de artesão à sua escolha entre: ferramentas de ferreiro, suprimentos de cervejeiro ou ferramentas de pedreiro.' 
        },
        {
          id: 10,
          nome: 'Especialização em Rochas',
          desc: 'Sempre que você realizar um teste de Inteligência (História) relacionado à origem de um trabalho em pedra, você é considerado proficiente na perícia História e adiciona o dobro do seu bônus de proficiência ao teste, ao invés do seu bônus de proficiência normal.' 
        },
        {
          id: 11,
          nome: 'Idiomas',
          desc: 'Você pode falar, ler e escrever Comum e Anão. O idioma Anão é repleto de consoantes duras e sons guturais, e essa característica influencia, como um sotaque, qualquer outro idioma que o anão falar.' 
        },
      ]
    },
    {
      id: 2,
      nome: 'Elfo',
      atributs: [0,2,0,0,0,0],
      carac: [
        {
          id: 1,
          nome: 'Aumento no Valor de Habilidade',
          desc: 'Seu valor de Destreza aumenta em 2.' 
        },
        {
          id: 2,
          nome: 'Idade',
          desc: 'Embora os elfos atinjam a maturidade física com praticamente a mesma idade dos humanos, a compreensão élfica da idade adulta vai além da maturidade física, abrangendo sua experiência sobre o mundo. Um elfo tipicamente assume a idade adulta e um nome adulto com cerca de 100 anos de idade e pode viver 750 anos.' 
        },
        {
          id: 3,
          nome: 'Tendência',
          desc: 'Elfos amam a liberdade, a diversidade e a expressão pessoal, então eles inclinam-se forte e suavemente para aspectos do caos. Eles valorizam e protegem a liberdade dos outros como a sua própria, e são geralmente mais bondosos que o contrário. Os drow são exceção. Seu exílio no Subterrâneo fez deles perversos e perigosos. Drow são geralmente mais maus que o contrário.' 
        },
        {
          id: 4,
          nome: 'Tamanho',
          desc: 'Elfos medem entre 1,50 a 1,80 metro de altura e possuem constituição delgada. Seu tamanho é Médio.' 
        },
        {
          id: 5,
          nome: 'Deslocamento',
          desc: 'Seu deslocamento base de caminhada é 9 metros.' 
        },
        {
          id: 6,
          nome: 'Visão no Escuro',
          desc: 'Acostumado às florestas crepusculares e ao céu noturno, você possui uma visão superior em condições de escuridão e na penumbra. Você pode enxergar na penumbra a até 18 metros como se fosse na luz plena, e no escuro como se fosse na  penumbra. Você não pode discernir cores no escuro, apenas tons de cinza.' 
        },
        {
          id: 7,
          nome: 'Sentidos Aguçados Você tem proficiência na perícia Percepção.',
          desc: '' 
        },
        {
          id: 8,
          nome: 'Ancestral Feérico Você tem vantagem nos testes de resistência para resistir a ser enfeitiçado e magias não podem colocá-lo para dormir.',
          desc: '' 
        },
        {
          id: 9,
          nome: 'Transe Elfos não precisam dormir. Ao invés disso, eles meditam profundamente, permanecendo semiconscientes, durante 4 horas por dia. (A palavra em idioma comum para tal meditação é "transe".) Enquanto medita, um elfo é capaz de sonhar de certo modo. Esses sonhos na verdade são exercícios mentais que se tornam reflexos através de anos de prática. Depois de descansar dessa forma, você ganha os mesmos benefícios que um humano depois de 8 horas de sono.',
          desc: '' 
        },
        {
          id: 10,
          nome: 'Idiomas ',
          desc: 'Você pode falar, ler e escrever Comum e Élfico. O Élfico é um idioma fluido, com entonações sutis e gramática complexa. A literatura élfica é rica e diversa, e suas canções e poemas são famosos entre outras raças. Muitos bardos aprendem essa língua para que possam adicionar canções élficas ao seu repertório.' 
        },
      ]
    },
  ]
  equipamentos = [
    {
      id: 0,
      nome: 'Machado Grande',
      desc: '',
      preco: [30, 3],
      peso: 3.5,
      qunat: 1,
      type: 0, //type 0: Arma, type 1: Armadura, type 2: Escudo, type 3: equipamento
      //type 0 - Arma
      tipoArm: 'Cortante',
      PropriedArm: 'Pesada, duas mãos',
      dadDAnoArm: [0,0,0,0,1,0],
      bonusDanArm: 0,
      //type 1 - Armadura 
      CA: 0,
      forcMin: 0,
      desvFurt: 0,
      //atributo
      atrib: 0,
    },
    {
      id: 1,
      nome: 'Machadinha',
      desc: '',
      preco: [5, 3],
      peso: 1.0,
      qunat: 1,
      type: 0,
      //type 0 - Arma
      tipoArm: 'Cortante',
      PropriedArm: 'Leve, arremesso (distância 6/18)',
      dadDAnoArm: [0,1,0,0,0,0],
      bonusDanArm: 0,
      //type 1 - Aramdura 
      CA: 0,
      forcMin: 0,
      desvFurt: 0,
      //atributo
      atrib: 0,
    },
  ]
  Personagem = {
      name: '',
      clas: null,
      race: null,
      tendency: '',
      modprin: [0, 0, 0, 0, 0, 0,],
      modsec: [0, 0, 0, 0, 0, 0,],
  }
  //variaveis
  nome!: string
  sel = 0
  modifc: number[]|null[] = [null, null, null, null, null, null]
  carcN: number[]|null[] = [null, null, null]
  carcS: string[]|null[] = [null, null, null]
  idClass = 0
  tendency!:string
  enable = true
  eq1 = []
  eq2 = []

  constructor() {}

  ngOnInit(): void {
  }

  girarNvezes(nmaior: number, nmenor: number = 1, nvezes: number = 1): number[]{
    let n: number[] = []
    if(nmaior > nmenor){
      for(let I=0; I<nvezes; I++){
        n = n.concat(this.girar(nmaior, nmenor))
      }
      return n
    }
    else{
      return [0]
    }
  }
  girar(nmaior: number, nmenor: number = 1): number{
    if(nmaior > nmenor){
      let n: number
      do{
        n = Math.floor(Math.random() * nmaior)
      }while(n < nmenor)
      return n;
    }
    else{
      return 0
    }
  }

  Move(id: number){
    if (id == 0 && this.sel <=1){
      this.sel++
    }
    if (id == 1 && this.sel >= 0){
      this.sel--
    }
  }

  recmod(id: number): void{
    switch (id){
      case 1:
        this.modifc = [14, 10, 15, 12, 13, 8]
        break;
    }
  }
  reccarc(id: number): void{
    let nomes: string[] = ['roberto', 'geisiane', 'carlos']
    let tendencias: string[] = ['Leal Bom', 'Neutro Bom', 'Caótico Bom', 'Leal Neutro', 'Neutro', 'Caótico Neutro', 'Leal Mal', 'Mal', 'Caótico Mal']
    let strings: string[] = ['','',''];
    let olhos: string[] = ['Castanho','Verde','Azul'];
    let cabelos: string[] = ['Preto','Loiro','Ruivo','Careca'];
    let pele: string[] = ['Branco','Pardo','Negro'];
    strings = [olhos[Math.floor(Math.random() * olhos.length)],pele[Math.floor(Math.random() * pele.length)],cabelos[Math.floor(Math.random() * cabelos.length)]]
    this.carcS = strings
    switch (id){
      case 1:
        tendencias = ['Leal Bom', 'Leal Neutro', 'Leal Mal']
        nomes = ['Adrik', 'Alberich', 'Baern', 'Barendd',
          'Brottor', 'Bruenor', 'Dain', 'Darrak', 'Delg', 'Eberk', 'Einkil',
          'Fargrim', 'Flint', 'Gardain', 'Harbek', 'Kildrak', 'Morgran',
          'Orsik', 'Oskar', 'Rangrim', 'Rurik', 'Taklinn', 'Thoradin',
          'Thorin', 'Tordek', 'Traubon', 'Travok', 'Ulfgar', 'Veit',
          'Vondal', 'Amber', 'Artin', 'Audhild', 'Bardryn',
          'Dagnal', 'Diesa', 'Eldeth', 'Falkrunn', 'Gunnloda', 'Gurdis',
          'Helja', 'Hlin', 'Kathra', 'Kristryd', 'Ilde', 'Liftrasa', 'Mardred',
          'Riswynn', 'Sannl', 'Torbera', 'Torgga', 'Vistra']
        this.carcN = [this.girar(750, 50),1.30,0.75]
        break;
        case 2:
        tendencias = ['Leal Bom', 'Neutro Bom', 'Caótico Bom']
        nomes = ['Adrie', 'Althaea',
          'Anastrianna', 'Andraste', 'Antinua', 'Bethrynna', 'Birel',
          'Caelynn', 'Drusilia', 'Enna', 'Felosial', 'Ielenia', 'Jelenneth',
          'Keyleth', 'Leshanna', 'Lia', 'Meriele', 'Mialee', 'Naivara',
          'Quelenna', 'Quillathe', 'Sariel', 'Shanairra', 'Shava',
          'Silaqui', 'Theirastra', 'Thia', 'Vadania', 'Valanthe',
          'Xanaphia', 'Adran', 'Aelar', 'Aramil',
          'Arannis', 'Aust', 'Beiro', 'Berrian', 'Carric', 'Enialis', 'Erdan',
          'Erevan', 'Galinndan', 'Hadarai', 'Heian', 'Himo', 'Immeral',
          'Ivellios', 'Laucian', 'Mindartis', 'Paelias', 'Peren', 'Quarion',
          'Riardon', 'Rolen', 'Soveliss', 'Thamior', 'Tharivol', 'Theren',
          'Varis']
        this.carcN = [this.girar(350, 50),1.70,1.90]
        break;
    }
    this.tendency = tendencias[this.girar(tendencias.length, 0)]
    this.nome = nomes[this.girar(nomes.length, 0)]
  }
  cadas(): void{
    let q1 = this.class.filter(el => el.id == )
    this.Move(0)
  }
}
