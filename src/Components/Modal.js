import React, { Component } from "react";
import ReactModal from 'react-modal';
import ReactStars from "react-rating-stars-component";
import styled from "styled-components";

//IMPORTING ASSETS
import myCloseIcon from "../Assets/+.svg"
import myImageIcon from "../Assets/Mask Group 1.svg"

const Container = styled.form`
    font-family: 'Poppins', sans-serif;
    color: #fff;
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    
`;

const ModalTitle = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: space-between;
    align-items: center;

`;

const CloseBtn = styled.button`
    width: 2vw;
    height: 2.5vh;
    position: relative;
    bottom: 4vh;
    left: 1vw;
    border: none;
    background-color: transparent;

    img{
        width: 95%;
        height: 90%;
    }

`;

const AddBtn = styled.button`
  color: #fff;
  width: 10vw;
  height: 4.5vh;
  border: none;
  border-radius: 5px;
  background-color: #E71B27;
`;

const Info = styled.div`
  font-size: 0.75rem;
  width: 48%;
  height: 38%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-top: 10px;
`;

const InfoLabel = styled.label`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  input{
      color: #fff;
      width: 100%;
      height: 5vh;
      border: none;
      border-radius: 5px;
      background-color: #2C2C2C;
  }
`;

const OverviewLabel = styled(InfoLabel)`
    margin-top: 5px;

    input{
        color: #fff;
        height: 13.25vh;
    }

    p{
        text-align: right;
        width: 6vw;
        height: 5vh;
    }
`;

const Media = styled.div`
    font-size: 0.75rem;
    width: 48%;
    height: 38%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 10px;
`;

const Label = styled.label`
    width: 100%;
    height: 10%;
`;

const Poster = styled.img`
    width: 80%;
    height: 70%;    
    display: flex;
    align-self: center;
    border: 1px solid #585858;
    border-radius: 4px;

`;

const InputFile = styled.input`
    width: 15vw;
`;

const Status = styled.div`
    font-size: 0.75rem;
    width: 100%;
    height: 38%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    margin-top: 10px;
`;

const RadioContainer = styled.div`
    width: 100%;
    height: 5vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
`;

const FormControl = styled.label`
    font-size: 0.75rem;
    line-height: 0.375rem;
    width: 13vw;
    display: flex;
    align-items: center;
`;

const RadioBtn = styled.input`
    font: inherit;
    color: currentColor;
    width: 0.75em;
    height: 0.75em;
    display: grid;
    place-content: center;
    appearance: none;
    border: 0.15em solid #B1B1B1;
    border-radius: 50%;
    margin: 2%;
    transform: translateY(-0.075em);
    background-color: transparent;
    
    ::before {
        content: "";
        width: 0.65em;
        height: 0.65em;
        border-radius: 50%;
        transform: scale(0);
        transition: 120ms transform ease-in-out;
        box-shadow: inset 1em 1em #B1B1B1;
    }

    &:checked::before {
        transform: scale(1);
    }
    
    &:hover{
        cursor: pointer;
    }
    
`;

const RatingContainer = styled.div`
    width: 100%;
    height: 15vh;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
`;

const ModalBtn = styled(AddBtn)`
    margin: 0.5vh 1vw;
`;

const CancelAction = styled(AddBtn)`
    margin: 0.5vh 1vw;
    background-color: transparent;
`;

const ButtonsContainer = styled.div`
    width: 100%;
    height: 8vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ratingChanged = (newRating) => {
    console.log(newRating);
};

export default class ModalAdd extends Component {

    constructor() {
        super();
        this.state = {
            showModal: false
        };

        this.handleOpenModal = this.handleOpenModal.bind(this)
        this.handleCloseModal = this.handleCloseModal.bind(this)
    };

    handleOpenModal() {
        this.setState({ showModal: true });
    };

    handleCloseModal() {
        this.setState({ showModal: false })
    };

    render() {
        return (
            <>
                <AddBtn onClick={this.handleOpenModal}>Adicionar</AddBtn>
                <ReactModal
                    isOpen={this.state.showModal}
                    contentLabel="Modal 'adicionar'"
                    style={{
                        overlay: {
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: 'transparent'
                        },
                        content: {
                            position: 'absolute',
                            top: '8vh',
                            left: '25vw',
                            right: '25vw',
                            bottom: '8vh',
                            border: '1px solid #808080',
                            background: '#000',
                            overflow: 'auto',
                            WebkitOverflowScrolling: 'touch',
                            borderRadius: '10px',
                            outline: 'none',
                            padding: '20px'
                        }
                    }}
                >
                    <Container>
                        <ModalTitle>
                            <h3>Adicionar Filmes</h3>
                            <CloseBtn onClick={this.handleCloseModal}><img src={myCloseIcon} alt="Botão 'fechar'" /></CloseBtn>
                        </ModalTitle>
                        <Info>
                            <InfoLabel>Nome
                                <input />
                            </InfoLabel>
                            <OverviewLabel>
                                <p>Descrição</p>
                                <p>0/200</p>
                                <input />
                            </OverviewLabel>
                        </Info>
                        <Media>
                            <Label>
                                Imagem de Capa
                            </Label>
                            <Poster src={myImageIcon} alt="Escolha um poster" />
                            <InputFile type="file" accept="image/*, video/*" />
                        </Media>
                        <Status>

                            <Label>Status</Label>
                            <RadioContainer>
                                <FormControl class="form-control">
                                    <RadioBtn type="radio" name="radio" />
                                    Já assisti
                                </FormControl>

                                <FormControl class="form-control">
                                    <RadioBtn type="radio" name="radio" />
                                    Ainda não assisti
                                </FormControl>
                            </RadioContainer>
                            <RatingContainer>
                                <Label>Nota</Label>
                                <ReactStars
                                    count={5}
                                    onChange={ratingChanged}
                                    size={36}
                                    isHalf={true}
                                    char="✩"
                                    activeColor="#E71B27"
                                />
                                <p><small>(0/5)</small></p>
                            </RatingContainer>
                        </Status>
                        <ButtonsContainer>
                            <CancelAction onClick={this.handleCloseModal}>Cancelar</CancelAction>
                            <ModalBtn type="submit">Confirmar</ModalBtn>
                        </ButtonsContainer>
                    </Container>
                </ReactModal>
            </>
        )
    }
}