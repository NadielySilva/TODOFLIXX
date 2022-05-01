import React, { Component } from "react";
import styled from "styled-components"


//IMPORTING ASSETS
import myFavIcon from "../Assets/FavoriteIcon.svg"
import myLikeIcon from "../Assets/ThumbsUp.svg"
import myRagnarokPoster from "../Assets/RagnarokPoster.jpg"
import myUsAgainPoster from "../Assets/Us Again.jpg"
import myMumiaPoster from "../Assets/A-Mumia.jpg"
import myHobbitPoster from "../Assets/O Hobbit.jpg"
import myOnePiecePoster from "../Assets/One Piece Stampede.jpg"
import myWiFiRalphPoster from "../Assets/WiFi Ralph.jpg"
import myComePlayPoster from "../Assets/Come Play.jpg"
import myWarofWorldsPoster from "../Assets/A Guerra dos Mundos.jpg"
import myHulk from "../Assets/Hulk.jpg"
import myLucas from "../Assets/Lucas Ant Bully.jpg"
import myHomem from "../Assets/O Homem Que Desafiou o Diabo.jpg"
import myDragonBall from "../Assets/Dragon Ball.jpg"
import myLolita from "../Assets/Lolita.jpg"
import myDoisIrmaos from "../Assets/Dois Irmaõs.jpg"
import myMateOuMorra from "../Assets/Mate ou Morra.jpeg"
import myGuardioesdaGalacia from "../Assets/Guardiões da Galáxia Vol 2.jpg"


const Container = styled.div`
  font-family: 'Poppins', sans-serif;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-right: 18px;
  padding-left: 18px;
  padding-top: 18px;
`;

const Card = styled.div`
  width: 22vw;
  height: 48vh;
  display: flex;
  flex-direction: column;
  margin-bottom: 18px;

  &:hover{
    cursor: pointer;
  }
`;

const PosterContainer = styled.div`
  width: 22vw;
  height: 25vh;
`;

const ReactionBtn = styled.button`
  width: 3vw;
  height: 4vh;
  border: none;
  display: flex;
  flex-direction: column;  
  position: relative;
  top: 4.5vh;
  left: 19vw;
  background-color: transparent;

  &:hover{
    cursor: pointer;
  }
`;

const Poster = styled.img`
  width: 22vw;
  height: 25vh;
  object-fit: fill;
  border-radius: 10px;
`;

const RatingContainer = styled.div`
  width: 22vw;
  height: 8vh;
  display: flex;
  flex-direction: row;
  margin-top: 3vh;
`;

const MovieTitle = styled.h3`
  font-size: 16px;
  line-height: 8vh;
  width: 14vw;
  height: 8vh;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const RatingStatus = styled.div`
  font-size: 14px;
  line-height: 8vh;
  width: 9vw;
  height: 8vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  p{
    line-height: 8vh;
    width: 4vw;
    height: 8vh;
  }
`;

const Like = styled.img`
  width: 4vw;
  height: 4vh;
  object-fit: fill;
  display: flex;
  align-self: center;
`;

const Overview = styled.div`
  font-size: 12px;
  width: 22vw;
  height: 14vh;
  overflow: hidden;
`;

export default class All extends Component {

  state = {
    allMovies: [
      {
        title: "Thor: Ragnarok",
        overview: "Após anos afastado, Thor retorna para casa e descobre que seu pai, Odin, rei de Asgard, está desaparecido. Após encontrá-lo, ele toma conhecimento de sua irmã mais velha, Hela, a poderosa e implacável deusa da morte. Com o auxílio de Loki, ele enfrenta Hela, mas durante a batalha, Thor acaba preso em Sakaar, um planeta do outro lado do universo. Agora, ele precisa correr contra o tempo para voltar a Asgard e impedir o Ragnarok, a destruição de seu mundo.",
        poster: myRagnarokPoster,
        parental_rating: true,
        rating: "8.6",
        run_time: "2h 10m"
      },
      {
        title: "Juntos Novamente",
        overview: "Traduzido do inglês-Us Again é um curta-metragem de animação 3D americano de 2021 dirigido e escrito por Zach Parrish e distribuído pela Walt Disney Studios Motion Pictures. Segue Art, um velho rabugento, e Dot, sua enérgica esposa, em uma vibrante cidade de dança.",
        poster: myUsAgainPoster,
        parental_rating: false,
        rating: "6.2",
        run_time: "7m"
      },
      {
        title: "A Múmia",
        overview: "Na Mesopotâmia, séculos atrás, Ahmanet tem seus planos interrompidos quando estava prestes a invocar Set, o deus da morte, para que juntos pudessem governar o mundo. Mumificada, ela é aprisionada dentro de uma tumba. Nos dias atuais, o local é descoberto por acidente por Nick Morton e Chris Vail, saqueadores de artefatos antigos que estavam na região em busca de raridades. Ao lado da pesquisadora Jenny Halsey, eles investigam a tumba recém-descoberta e, acidentalmente, despertam Ahmanet.",
        poster: myMumiaPoster,
        parental_rating: true,
        rating: "7.3",
        run_time: "1h 50m"
      },
      {
        title: "O Hobbit: A Desolação de Smaug",
        overview: "Ao lado de um grupo de anões e de Gandalf, Bilbo segue em direção à Montanha Solitária, onde deverá ajudar seus companheiros a retomar a Pedra de Arken. O problema é que o artefato está perdido em meio a um tesouro protegido pelo temido dragão Smaug.",
        poster: myHobbitPoster,
        parental_rating: true,
        rating: "7.9",
        run_time: "2h 41m"
      },
      {
        title: "One Piece: Stampede",
        overview: "One Piece: Stampede é um filme japonês de animação e aventura de 2019 dirigido por Takashi Otsuka e produzido pela Toei Animation. É o décimo quarto longa-metragem da série One Piece, baseado no manga de mesmo nome escrito e ilustrado por Eiichiro Oda, e comemora os 20 anos do anime.",
        poster: myOnePiecePoster,
        parental_rating: false,
        rating: "9.1",
        run_time: "1h 41m"
      },
      {
        title: "WiFi Ralph: Quebrando a Internet",
        overview: "Ralph, o mais famoso vilão dos videogames, e Vanellope, sua companheira atrapalhada, iniciam mais uma arriscada aventura. Após a gloriosa vitória no Fliperama Litwak, a dupla viaja para a world wide web, no universo expansivo e desconhecido da internet. Dessa vez, a missão é achar uma peça reserva para salvar o videogame Corrida Doce, de Vanellope. Para isso, eles contam com a ajuda dos cidadãos da Internet e de Yess, a alma por trás do Buzzztube, um famoso website que dita tendências.",
        poster: myWiFiRalphPoster,
        parental_rating: false,
        rating: "8.1",
        run_time: "1h 52m"
      },
      {
        title: "Vem Brincar",
        overview: "Uma família é atormentada por uma criatura que se manifesta em nosso mundo através de dispositivos eletrônicos.",
        poster: myComePlayPoster,
        parental_rating: true,
        rating: "7.6",
        run_time: "1h 36m"
      },
      {
        title: "A Guerra dos Mundos",
        overview: "Os cientistas Clayton Forrester e Sylvia Van Buren são os primeiros a chegar no local onde caiu um meteorito. Logo depois, uma máquina alienígena aparece e começa uma matança aleatória. Fuzileiros navais são enviados para o local, porém as forças de ataque deles não está a altura da força de ataque dos alienígenas.",
        poster: myWarofWorldsPoster,
        parental_rating: false,
        rating: "7.7",
        run_time: "1h 25m"
      },
      {
        title: "Hulk",
        overview: "Hulk é um filme norte-americano de 2003 de super-herói baseado no personagem homônimo da Marvel Comics. Dirigido por Ang Lee e distribuído pela Universal Pictures, o filme é estrelado por Eric Bana, Jennifer Connelly, Sam Elliott, Josh Lucas, e Nick Nolte.",
        poster: myHulk,
        parental_rating: false,
        rating: "6.4",
        run_time: "2h 18m"
      },
      {
        title: "Lucas - Um Intruso no Formigueiro",
        overview: "Neste desenho animado, as formigas estão cansadas de sofrer ataques constantes a seu formigueiro e encolhem um menino destruidor chamado Lucas, que é condenado a viver entre elas até que perceba seus erros. Ajudado pelos insetos guardiões, Lucas descobre um mundo que nunca soube que existia e logo junta forças com seus novos amigos para combater um exterminador que ameaça o formigueiro.",
        poster: myLucas,
        parental_rating: false,
        rating: "5.9",
        run_time: "1h 30m"
      },
      {
        title: "O Homem Que Desafiou o Diabo",
        overview: "Zé Araújo é um viajante recém-chegado em Jardim dos Caiacós. Ele seduz a filha de um comerciante e é obrigado a se casar com ela. Araújo torna-se um escravo do sogro e da mulher. Percebendo que vira motivo de piada na cidade, ele resolve mudar de vida e começar uma nova.",
        poster: myHomem,
        parental_rating: true,
        rating: "6.4",
        run_time: "1h 46m"
      },
      {
        title: "Dragon Ball Z Filme 10 - A Volta do Guerreiro Lendário",
        overview: "Após sete anos, Gohan cresce no período perto do nascimento de Goten. Broly recupera a sua vida e os Guerreiros Z devem impedi-lo novamente.",
        poster: myDragonBall,
        parental_rating: false,
        rating: "8.6",
        run_time: "48m"
      },
      {
        title: "Lolita",
        overview: "Humbert é um professor europeu que muda para os Estados Unidos e aluga um quarto da viúva Charlotte, com quem acaba de casando. Porém, se apaixona pela filha sedutora de sua esposa, Lolita, de 12 anos, na esperança de tê-la só para si.",
        poster: myLolita,
        parental_rating: true,
        rating: "7.7",
        run_time: "2h 33m"
      },
      {
        title: "Dois Irmãos: Uma Jornada Fantástica",
        overview: "Em um mundo transformado, no qual as criaturas não dependiam mais da magia para viver, dois irmãos elfos recebem um cajado de bruxo de seu falecido pai, capaz de trazê-lo de volta à vida. Inexperientes com qualquer tipo de magia, Ian e Barley não conseguem executar o feitiço e acabam gerando uma criatura sem cabeça. Para passar mais um dia com seu pai, eles embarcam em uma jornada fantástica. Ao perceber a ausência dos filhos, sua mãe se une à uma lendária manticora para encontrá-los.",
        poster: myDoisIrmaos,
        parental_rating: false,
        rating: "8.0",
        run_time: "1h 42m"
      },
      {
        title: "Mate ou Morra",
        overview: "Roy Pulver é um ex-agente das forças especiais que se vê forçado a reviver o dia de sua morte inúmeras vezes. Ele acorda sendo perseguido por assassinos e, de uma forma ou de outra, acaba sempre morrendo no final. Enquanto luta para chegar ao fim do dia com vida, Roy descobre uma mensagem de sua ex-esposa revelando o envolvimento do cientista Ventor nesse ciclo mortal e percebe que a sua família também corre perigo.",
        poster: myMateOuMorra,
        parental_rating: true,
        rating: "7.3",
        run_time: "1h 40m"
      },
      {
        title: "Guardiões da Galáxia Vol. 2",
        overview: "Os Guardiões da Galáxia lutam para manter sua nova família unida enquanto desvendam os mistérios sobre o verdadeiro pai de Peter Quill.",
        poster: myGuardioesdaGalacia,
        parental_rating: true,
        rating: "8.8",
        run_time: "2h 17m"
      },
      // {
      //   title: "",
      //   overview: "",
      //   poster: ,
      //   parental_rating: ,
      //   rating: "",
      //   run_time: ""
      // },
    ], 
  };

  render() {
    return (
      <Container>
        {this.state.allMovies.map((item) => (
          <Card>
            <PosterContainer>
              <ReactionBtn><img src={myFavIcon} alt="Botão marcar como favorito" /></ReactionBtn>
              <Poster src={item.poster} alt={`Poster do filme ${item.title}`} />
            </PosterContainer>
            <RatingContainer>
              <MovieTitle>{item.title}</MovieTitle>
              <RatingStatus>
                <p>{`${item.rating}/10.0`}</p>
                <Like src={myLikeIcon} alt="" />
              </RatingStatus>
            </RatingContainer>
            <Overview>
              <p>{item.overview}</p>
            </Overview>
          </Card>
        ))}
      </Container>
    )
  }
}