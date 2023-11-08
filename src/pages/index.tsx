import Link from "next/link";
import type { NextPage } from "next";
import React from "react";
import styled from "styled-components";
// import Header from '../components/Header';

const HomePage: NextPage = () => {
  return (
    <>
      {/* <Header /> */}
      <Container>메인화면</Container>
    </>
  );
};

export default HomePage;

const Title = styled.a`
  font-size: 48px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-top: 40px;
`;

const StyledLink = styled.a`
  display: flex;
  justify-content: center;
  width: 240px;
  padding: 20px;
  border-radius: 12px;
  background-color: #222;
  color: #fff;
  font-size: 24px;

  & + & {
    margin-top: 40px;
  }
`;