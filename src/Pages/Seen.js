import React, { Component } from "react";
import styled from "styled-components";

//IMPORTING ASSETS
import mySearchIcon from "../Assets/Search.svg"


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

export default class Seen extends Component{

    render() {
      return (
        <div>
          <SearchBox>
            <SearchIcon><img src={mySearchIcon} alt="Botão buscar" /></SearchIcon>
            <Search type="search" placeholder="Busque aqui" />
          </SearchBox>
          <p>ESTA É A SEEN</p>
        </div>
      )
    }
}