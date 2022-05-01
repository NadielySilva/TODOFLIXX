import React, { Component } from "react";
import ReactModal from 'react-modal';
import styled from "styled-components";

//IMPORTING ASSETS
import myCloseIcon from "../Assets/+.svg"
import myImageIcon from "../Assets/Mask Group 1.svg"

const Container = styled.div`
    font-family: 'Poppins', sans-serif;
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

  &:hover{
    cursor:pointer;
  }
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
    background-color: purple;
`;

const MediaLabel = styled.label`
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
    width: 100%;
    height: 38%;
    margin-top: 10px;
    background-color: purple;
`;

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
    }

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
                            <MediaLabel>
                                Imagem de Capa
                            </MediaLabel>
                            <Poster src={myImageIcon} alt="Escolha um poster" />
                            <InputFile type="file"  accept="image/*, video/*" />
                        </Media>
                        <Status>

                        </Status>
                    </Container>
                </ReactModal>
            </>
        )
    }
}