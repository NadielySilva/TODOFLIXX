import React, { Component } from "react";
import styled from "styled-components";
import Carousel from "nuka-carousel";

//IMPORTING ASSETS
import mySearchIcon from "../Assets/Search.svg"
import myFavIcon from "../Assets/FavoriteIcon.svg"
import myLikeIcon from "../Assets/ThumbsUp.svg"
import myRagnarokPoster from "../Assets/RagnarokPoster.jpg"
import myUsAgainPoster from "../Assets/Us Again.jpg"
import myMumiaPoster from "../Assets/A-Mumia.jpg"
import myHobbitPoster from "../Assets/O Hobbit.jpg"
import myOnePiecePoster from "../Assets/One Piece Stampede.jpg"
import myWarofWorldsPoster from "../Assets/A Guerra dos Mundos.jpg"



const Container = styled.div`
  font-family: 'Poppins', sans-serif;
  width: 100%;
  padding-right: 18px;
  padding-left: 18px;
`;
const SearchBox = styled.label`
  width: 32vw;
  height: 4.5vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: absolute;
  top: 1.75vh;
  left: 58vw;
  border-radius: 5px;
  background-color: #2C2C2C;
`;

const SearchIcon = styled.button`
  width: 3vw;
  height: 4vh;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: transparent;

  &:hover{
    cursor: pointer;
  }
`;

const Search = styled.input`
  color: #fff;
  placeholder: #fff;
  width: 28vw;
  height: 4vh;
  border: none;
  background-color: transparent;
`;

const StandAlone = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const CarouselContainer = styled.div`

`;

const ReactionBtn = styled.button`
  width: 2.5vw;
  height: 2.5vh;
  border: none;
  background-color: transparent;

  &:hover{
    cursor: pointer;
  }
`;

const SAimg = styled.img`
  width: 40vw;
  height: auto;
  object-fit: contain;
  border-radius: 10px;
`;

const SAInfo = styled.div`
  width: 40vw;
  height: 45vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding-left: 12px;
`;

const SATitle = styled.h2`
  font-size: 30px;
  width: 35vw;
  height: 6vh;
`;

const SAOverview = styled.div`
  font-size: 13px;
  text-align: justify;
  width: 100%;
  height: 25vh;
  overflow-y: auto;

  ::-webkit-scrollbar{
    width: 10px;
    background: #2C2C2C;
  }
`;

const SARating = styled.div`
  width: 7vw;
  height: 4vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  p{
    font-size: 12px;
    text-align: left;
    line-height: 4vh;
    width: 32vw;
    height: 4vh;
  }
`;

const ThumbsUp = styled.img`
  width: 4vw;
  height: 4vh;
  display: flex;
  align-items: center;
  align-self: center;
  justify-content: center;
`;

const CarouselItem = styled.div`
  width: 25vw;
  heigh: 63vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover{
    cursor: pointer;
  }
`;

const CarouselPoster = styled.div`
  width: 25vw;
  height: 30vh;
`;

const CarouselFav = styled.button`
  width: 2.5vw;
  height: 2.5vh;
  position: absolute;
  top: 0.5vh;
  left: 22vw;
  border: none;
  background-color: transparent;

  &:hover{
    cursor: pointer;
  }
`;

const CarouselPosterImg = styled.img`
  width: 25vw;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

const CarouselRating = styled.div`
  width: 25vw;
  height: 8vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const CarouselMovieTitle = styled.h3`
  font-size: 16px;
  line-height: 8vh;
  width: 14vw;
  height: 8vh;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const CRSubcontainer = styled.div`
  width: 9vw;
  height: 8vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  p{
    font-size: 16px;
    line-height: 8vh;
    width: 3vw;
    height: 8vh;
  }
`;

const CarouselOverview = styled.div`
  width: 25vw;
  height: 27.5vh;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export default class Home extends Component {

  state = {
    standAlone: [{
      title: "Thor: Ragnarok",
      overview: "Ap??s anos afastado, Thor retorna para casa e descobre que seu pai, Odin, rei de Asgard, est?? desaparecido. Ap??s encontr??-lo, ele toma conhecimento de sua irm?? mais velha, Hela, a poderosa e implac??vel deusa da morte. Com o aux??lio de Loki, ele enfrenta Hela, mas durante a batalha, Thor acaba preso em Sakaar, um planeta do outro lado do universo. Agora, ele precisa correr contra o tempo para voltar a Asgard e impedir o Ragnarok, a destrui????o de seu mundo.",
      poster: myRagnarokPoster,
      parental_rating: false,
      rating: "8.6",
      run_time: "2h 10m"
    }],

    movieList: [
      {
        title: "Juntos Novamente",
        overview: "Traduzido do ingl??s-Us Again ?? um curta-metragem de anima????o 3D americano de 2021 dirigido e escrito por Zach Parrish e distribu??do pela Walt Disney Studios Motion Pictures. Segue Art, um velho rabugento, e Dot, sua en??rgica esposa, em uma vibrante cidade de dan??a.",
        poster: myUsAgainPoster,
        parental_rating: false,
        rating: "6.2",
        run_time: "7m"
      },
      {
        title: "A M??mia",
        overview: "Na Mesopot??mia, s??culos atr??s, Ahmanet tem seus planos interrompidos quando estava prestes a invocar Set, o deus da morte, para que juntos pudessem governar o mundo. Mumificada, ela ?? aprisionada dentro de uma tumba. Nos dias atuais, o local ?? descoberto por acidente por Nick Morton e Chris Vail, saqueadores de artefatos antigos que estavam na regi??o em busca de raridades. Ao lado da pesquisadora Jenny Halsey, eles investigam a tumba rec??m-descoberta e, acidentalmente, despertam Ahmanet.",
        poster: myMumiaPoster,
        parental_rating: true,
        rating: "7.3",
        run_time: "1h 50m"
      },
      {
        title: "O Hobbit: A Desola????o de Smaug",
        overview: "Ao lado de um grupo de an??es e de Gandalf, Bilbo segue em dire????o ?? Montanha Solit??ria, onde dever?? ajudar seus companheiros a retomar a Pedra de Arken. O problema ?? que o artefato est?? perdido em meio a um tesouro protegido pelo temido drag??o Smaug.",
        poster: myHobbitPoster,
        parental_rating: true,
        rating: "7.9",
        run_time: "2h 41m"
      },
      {
        title: "One Piece: Stampede",
        overview: "One Piece: Stampede ?? um filme japon??s de anima????o e aventura de 2019 dirigido por Takashi Otsuka e produzido pela Toei Animation. ?? o d??cimo quarto longa-metragem da s??rie One Piece, baseado no manga de mesmo nome escrito e ilustrado por Eiichiro Oda, e comemora os 20 anos do anime.",
        poster: myOnePiecePoster,
        parental_rating: false,
        rating: "9.1",
        run_time: "1h 41m"
      },
      {
        title: "A Guerra dos Mundos",
        overview: "Os cientistas Clayton Forrester e Sylvia Van Buren s??o os primeiros a chegar no local onde caiu um meteorito. Logo depois, uma m??quina alien??gena aparece e come??a uma matan??a aleat??ria. Fuzileiros navais s??o enviados para o local, por??m as for??as de ataque deles n??o est?? a altura da for??a de ataque dos alien??genas.",
        poster: myWarofWorldsPoster,
        parental_rating: false,
        rating: "7.7",
        run_time: "1h 25m"
      },
    ]
  };

  render() {
    return (
      <Container>
        <SearchBox>
            <SearchIcon><img src={mySearchIcon} alt="Bot??o buscar" /></SearchIcon>
            <Search type="search" placeholder="Busque aqui" />
          </SearchBox>
        <StandAlone>
          {this.state.standAlone.map((item) => (
            <>
              <SAimg src={item.poster} alt={`Poster de ${item.title}`} />
              <SAInfo>
                <ReactionBtn><img src={myFavIcon} alt="Bot??o marcar como favorito" /></ReactionBtn>
                <SATitle>{item.title}</SATitle>
                <SAOverview>{item.overview}</SAOverview>
                <SARating>
                  <p>{`${item.rating}/10.0`}</p>
                  <ThumbsUp src={myLikeIcon} alt="" />
                </SARating>
              </SAInfo>
            </>
          ))}

        </StandAlone>
        <CarouselContainer>
          <Carousel
            wrapAround={true}
            slidesToShow={4}
            animation='zoom'
            autoplay="true"
            cellAlign="center"
            enableKeyboardControls="true"
            pauseOnHover="true"
            swiping="true"
          >
            {this.state.movieList.map((item) => (
              <CarouselItem>
                <CarouselPoster>
                  <CarouselFav><img src={myFavIcon} alt="Bot??o marcar como favorito" /></CarouselFav>
                  <CarouselPosterImg src={item.poster} alt={`Poster do filme ${item.title}`} />
                </CarouselPoster>
                <CarouselRating>
                  <CarouselMovieTitle>{item.title}</CarouselMovieTitle>
                  <CRSubcontainer>
                    <p>{`${item.rating}/10.0`}</p>
                    <ThumbsUp src={myLikeIcon} alt="" />
                  </CRSubcontainer>
                </CarouselRating>
                <CarouselOverview>
                  <p>{item.overview}</p>
                </CarouselOverview>
              </CarouselItem>
            ))}
          </Carousel>
        </CarouselContainer>
      </Container>
    )
  }
}
