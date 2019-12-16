import React from "react";
import styled from "styled-components";



export default function CharacterCard(props) {

  const Card = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  text-align: center;
  background-color: turquoise;
  color: navy;
  border: 2px dotted white;
  border-radius: 20%;
  margin-left: 25%;
  margin-right: 25%;`

  const Header = styled.h2`
  font-size: 32px;
  text-shadow: 2px 2px grey;
  `
  const P = styled.p`
  color: charcoal;
  `

 
 return (

    <Card>
      <Header>{props.name}</Header>
      <P>Species: {props.species}</P>
      <P>Status: {props.status}</P>
      <P>Type: {props.type}</P>
    </Card>

 )

}
