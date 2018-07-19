import React, { Component } from "react";
import CatCards from '../../components/CatCards';
import Wrapper from "../../components/Wrapper";
import Title from "../../components/Title";
import cats from './cats.json';



class homebase extends Component {
  // Setting this.state.cats to the cats json array
  state = {
    cats
  };

  render() {
    return (
      <Wrapper>
        <Title>Cat Cards</Title>
        {this.state.cats.map(cat => (
          <CatCards
            id={cat.id}
            key={cat.id}
            name={cat.name}
            image={cat.image}
          />
        ))}
      </Wrapper>
    );
  }

}

  export default homebase;