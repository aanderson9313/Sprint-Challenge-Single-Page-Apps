import React from "react";
import { Link } from "react-router-dom";
import "./CharacterList.css";
import styled from "styled-components";





export default function WelcomePage() {

const Header = styled.header`
display: flex;
flex-direction: column;
margin-left: 15%;
margin-right: 15%;
`
const Img = styled.img`
border: 5px dotted white;
padding: 5px;
margin-bottom: 2%;
`

const Button = styled.div`
display: flex;
justify-content: space-between;

`
  return (

    <section className="welcome-page">

      <Header>

        <h1>Welcome to the ultimate fan site!</h1>
        <Img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      <Button>
        <Link to = "/Characters"><button className = "Buttons">Characters</button></Link>
        <Link to = "/Search"><button className = "Buttons">Search</button></Link>
      </Button>
      </Header>
    </section>
  );
}
