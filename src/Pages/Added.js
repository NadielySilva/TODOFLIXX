import React, { Component } from "react";
import styled from "styled-components";

//IMPORTING ASSETS
import mySearchIcon from "../Assets/Search.svg"

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


export default class Added extends Component{

  render() {
    return (
      <Container>
        <SearchBox>
          <SearchIcon><img src={mySearchIcon} alt="Botão buscar" /></SearchIcon>
          <Search type="search" placeholder="Busque aqui" />
        </SearchBox>
        <p>ESTA É A ADDED</p>
      </Container>
    )
  }
}