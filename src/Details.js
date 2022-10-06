import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "./axios";

const Details = () => {
  const { id } = useParams();
  const [movies, setMovies] = useState([]);

  const getMovies = () => {
    try {
      async function fetchPosts() {
        const response = await axios.get("/v2/posts");

        response.data.map((data) => {
          if (data._id === id) {
            setMovies(data);
          }
        });

        return response;
      }
      fetchPosts();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  console.log(movies);
  return (
    <Container style={{ overflow: "hidden" }}>
      <Background>
        <img src={movies.poster} alt="" />
      </Background>
      <div
        style={{ display: "flex", justifyContent: "start", marginTop: "200px" }}
      >
        <h1
          style={{
            fontFamily: "monospace",
            fontSize: "70px",
            color: "#fff",
            fontWeight: "600",
          }}
        >
          {movies.name}
        </h1>
      </div>

      <ContentMeta>
        <Controls>
          <a href={movies.url} style={{ textDecoration: "none" }}>
            <Player>
              <img
                src="https://drive.google.com/uc?id=10gmBaDack0_qDMe1umbWWoEDsGKkkVj6"
                alt=""
              />
              <span>PLAY</span>
            </Player>
          </a>
          <a href={movies.url} style={{ textDecoration: "none" }}>
            <Trailer>
              <img
                src="https://drive.google.com/uc?id=1iD6VqHIyaeBe2V-c3o2U5YKl5K5n37Zi"
                alt=""
              />
              <span>Trailer</span>
            </Trailer>
          </a>

          <a href={movies.url} style={{ textDecoration: "none" }}>
            <AddList>
              <span />
              <span />
            </AddList>
          </a>

          {/*           <GroupWatch>
            <div>
              <img
                src="https://drive.google.com/uc?id=1SeWZegP9sjTt1AHd536Xmk1iWsGzsUsQ"
                alt=""
              />
            </div>
          </GroupWatch> */}
        </Controls>
        <SubTitle>{movies.scrapedAt}</SubTitle>

        <SubTitle>{movies.genre}</SubTitle>
        <br />
        <SubTitle>Rating {movies.contentRating}</SubTitle>
        <Description>{movies.description}</Description>
      </ContentMeta>
    </Container>
  );
};

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  opacity: 0.8;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImageTitle = styled.div`
  align-items: flex-end;
  display: flex;
  -webkit-box-pack: start;
  justify-content: flex-start;
  margin: 0px auto;
  height: 30vw;
  min-height: 170px;
  padding-bottom: 24px;
  width: 100%;
  img {
    max-width: 600px;
    min-width: 200px;
    width: 35vw;
  }
`;

const ContentMeta = styled.div`
  max-width: 874px;
`;

const Controls = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  margin: 24px 0px;
  min-height: 56px;
`;

const Player = styled.button`
  font-size: 15px;
  margin: 0px 22px 0px 0px;
  padding: 0px 24px;
  height: 56px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 1.8px;
  text-align: center;
  text-transform: uppercase;
  background: rgb (249, 249, 249);
  border: none;
  color: rgb(0, 0, 0);
  img {
    width: 32px;
  }
  &:hover {
    background: rgb(198, 198, 198);
  }
  @media (max-width: 768px) {
    height: 45px;
    padding: 0px 12px;
    font-size: 12px;
    margin: 0px 10px 0px 0px;
    img {
      width: 25px;
    }
  }
`;

const Trailer = styled(Player)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
`;

const AddList = styled.div`
  margin-right: 16px;
  height: 44px;
  width: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  border: 2px solid white;
  cursor: pointer;
  span {
    background-color: rgb(249, 249, 249);
    display: inline-block;
    &:first-child {
      height: 2px;
      transform: translate(1px, 0px) rotate(0deg);
      width: 16px;
    }
    &:nth-child(2) {
      height: 16px;
      transform: translateX(-8px) rotate(0deg);
      width: 2px;
    }
  }
`;

const GroupWatch = styled.div`
  height: 44px;
  width: 44px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: white;
  div {
    height: 40px;
    width: 40px;
    background: rgb(0, 0, 0);
    border-radius: 50%;
    img {
      width: 100%;
    }
  }
`;

const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  padding: 16px 0px;
  color: rgb(249, 249, 249);
  padding-bottom: 5%;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export default Details;
