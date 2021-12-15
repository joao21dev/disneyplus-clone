import React from "react";
import styled from "styled-components";

function Movies() {
  return (
    <Container>
      <h4>Recomendado para Você</h4>
      <Content>
        <Wrap>
          <img src="/images/slider-scale.jpg" alt="" />
        </Wrap>

        <Wrap>
          <img src="/images/slider-scale.jpg" alt="" />
        </Wrap>

        <Wrap>
          <img src="/images/slider-scale.jpg" alt="" />
        </Wrap>

        <Wrap>
          <img src="/images/slider-scale.jpg" alt="" />
        </Wrap>

        <Wrap>
          <img src="/images/slider-scale.jpg" alt="" />
        </Wrap>

        <Wrap>
          <img src="/images/slider-scale.jpg" alt="" />
        </Wrap>

        <Wrap>
          <img src="/images/slider-scale.jpg" alt="" />
        </Wrap>

        <Wrap>
          <img src="/images/slider-scale.jpg" alt="" />
        </Wrap>
      </Content>
    </Container>
  );
}

export default Movies;

const Container = styled.div``;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  overflow: hidden;
`;

const Wrap = styled.div`
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
  border: solid 3px rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    border-color: rgba(249, 249, 249, 0.8);
    transform: scaleX(1.05) scaleY(1.05);
  }
`;
