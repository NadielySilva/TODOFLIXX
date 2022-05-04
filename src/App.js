import React, { Component } from "react";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Link,
  Routes,
  Route
} from "react-router-dom"

//IMPORTING COMPONENTS
import Home from "./Pages/Home";
import All from "./Pages/All";
import Favorites from "./Pages/Favorites";
import Seen from "./Pages/Seen";
import Added from "./Pages/Added";
import ModalAdd from "./Components/Modal";

//IMPORTING ASSETS
import myDownArrow from "./Assets/Down Arrow.svg"
import myUserIcon from "./Assets/userIcon.svg"
import mySearchIcon from "./Assets/Search.svg"



//FONTS CSS RULES
// font-family: 'Bebas Neue', cursive;
// font-family: 'Poppins', sans-serif;


const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html{
    color: #fff;
    background-color: #000;
  }

  button{    
    &:hover{
      cursor: pointer;
  }
  }
`;

const Container = styled.div`
  font-family: 'Poppins', sans-serif;
`;

const Menu = styled.nav`
  width: 100%;
  height: 8vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 18px;
`;

const Features = styled.div`
  width: 32vw;
  height: 8vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const ActionContainer = styled.div`
  width: 50vw;
  height: 8vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h1`
  font-family: 'Bebas Neue', cursive;
  font-size: 32px;
  text-transform: uppercase;
  letter-spacing: 1.32px;
  color: #E71B27;
  width: 10.5vw;
  height: 8vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MenuList = styled.ul`
  width: 22vw;
  height: 8vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  list-style-type: none;
`;

const CategoriesList = styled.ul`
  visibility: hidden;
  opacity: 0;
`;

const MenuItem = styled.li`
  width: 10vw;
  height: 8vh;
  line-height: 8vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover{
    cursor: pointer;
  }

  &:hover ${CategoriesList}{
    text-align: left;
    text-decoration: none;
    color: #fff;
    width: 10vw;
    height: 35vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 1;
    visibility: visible;
    opacity: 1;
    background: black;
  }
`;

const CategoriesContainer = styled.div`
  width: 12vw;
  height: 8vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  width: 10vw;
  height: 8vh;
  display: flex;  
  justify-content: center;
  align-items: center;

  &:hover{
    cursor: pointer;
  }
`;

const BtnDown = styled.button`
  width: 2vw;
  height: 100%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;

  &:hover{
    cursor: pointer;
  }
`;

const LoginContainer = styled.div`
  width: 5vw;
  height: 8vh;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const UserBtn = styled.button`
  width: 3vw;
  height: 8vh;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;

  &:hover{
    cursor: pointer;
  }
`;

const SearchBox = styled.label`
  width: 32vw;
  height: 4.5vh;
  display: flex;
  flex-direction: row;
  align-items: center;
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

function addMovie (name) {
  alert(name);
}


export default class Todoflix extends Component {

  render() {
    return (
      <Container>
        <GlobalStyle />
        <Router>
          <Menu>
            <Features>
              <Title>Todoflix</Title>
              <MenuList>
                <MenuItem>
                  <StyledLink to="/">Início</StyledLink>
                </MenuItem>
                  <CategoriesContainer>
                    <MenuItem>Categorias
                      <CategoriesList>
                        <MenuItem>
                          <StyledLink to="All">Todos</StyledLink>
                        </MenuItem>
                        <MenuItem>
                          <StyledLink to="Favorites">Favoritos</StyledLink>
                        </MenuItem>
                        <MenuItem>
                          <StyledLink to="Seen">Vistos</StyledLink>
                        </MenuItem>
                        <MenuItem>
                          <StyledLink to="Added">Adicionados</StyledLink>
                        </MenuItem>
                      </CategoriesList>
                    </MenuItem>
                    <BtnDown><img src={myDownArrow} alt="Botão para baixo"/></BtnDown>
                  </CategoriesContainer>
              </MenuList>
            </Features>
            <ActionContainer>
              <ModalAdd addMovie={addMovie}/>
                {/* <SearchBox>
                  <SearchIcon><img src={mySearchIcon} alt="Botão buscar" />
                  <Search type = "search" placeholder="Busque aqui">
                    
                  </Search>              
                </SearchBox> */}
              <LoginContainer>
                <UserBtn>
                  <img src={myUserIcon} alt=""/>
                </UserBtn>
                <BtnDown><img src={myDownArrow} alt="Botão para baixo"/></BtnDown>
              </LoginContainer>
            </ActionContainer>
          </Menu>

          <Routes>
            <Route path="/" element={<Home />}>Início</Route>
            <Route path="All" element={<All />}>Todos</Route>
            <Route path="Favorites" element={<Favorites />}>Favoritos</Route>
            <Route path="Seen" element={<Seen />}>Vistos</Route>
            <Route path="Added" element={<Added />}>Adicionados</Route>
          </Routes>
        </Router>
      </Container>
    )
  }
}