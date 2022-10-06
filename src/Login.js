import React from "react";
import styled from "styled-components";
import "./Login.css";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "./firebase";

function Login() {
  const [signInWithGoogle, userCred, loading, error] =
    useSignInWithGoogle(auth);

  return (
    <>
      <header className="header">
        <div
          classname="nav"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <img
            className="header__img"
            src="https://i.postimg.cc/CxTS5Pcw/pngwing-com-2.png"
            alt="Netflix"
            draggable="false"
          />
          <div
            className="login"
            onClick={() => signInWithGoogle()}
            style={{ cursor: "pointer" }}
          >
            Login
          </div>
        </div>
      </header>
      <Background>
        <Container>
          <Content>
            <div className="email-login">
              <div className="text-login">
                <h1>Unlimited movies, TV shows, and more.</h1>
                <h2>Watch anywhere. Cancel anytime.</h2>
                <p>
                  Ready to watch? Enter your email to create or restart your
                  membership.
                </p>
              </div>
              <div className="form">
                <form>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="input"
                  />
                  <button className="form__buttton">Get Started </button>
                </form>
              </div>
            </div>

            <div className="gradient"></div>
          </Content>
        </Container>
      </Background>
      <section clasName="section-tv">
        <div className="container">
          <div className="grid">
            <div className="text-info">
              <h1>Enjoy on your TV.</h1>
              <p>
                Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
                Blu-ray players, and more.
              </p>
            </div>
            <div className="config-img">
              <img
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
                alt="tv Netflix"
              />
              <video className="tv-video" autoplay playsinline muted loop>
                <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" />
              </video>
            </div>
          </div>
        </div>
      </section>
      <section className="section-dowload">
        <div className="container">
          <div className="grid">
            <div className="text-info">
              <h1>Download your shows to watch offline</h1>
              <p>
                Save your favorites easily and always have something to watch.
              </p>
            </div>
            <div className="config-img">
              <img
                src="https://github.com/deviego/Netflix-Template/blob/main/img/el.jpg?raw=true"
                alt="tv Netflix"
              />
              <div className="cardanimation">
                <div className="cardanimation-img">
                  <img
                    src="https://github.com/deviego/Netflix-Template/blob/main/img/boxshot.png?raw=true"
                    alt="stranger things"
                  />
                </div>
                <div className="cardanimation-text">
                  <h2>Stranger Things</h2>
                  <p>Download em andamento...</p>
                </div>
                <div className="animation-icon"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-portable">
        <div className="container">
          <div className="grid">
            <div className="text-info">
              <h1>Watch everywhere.</h1>
              <p>
                Stream unlimited movies and TV shows on your phone, tablet,
                laptop, and TV.
              </p>
            </div>
            <div className="config-img">
              <img
                src="https://github.com/deviego/Netflix-Template/blob/main/img/device-pile.png?raw=true"
                alt="device plataform"
              />
              <video className="portable-video" autoplay playsinline muted loop>
                <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v" />
              </video>
            </div>
          </div>
        </div>
      </section>
      <section className="section-dowload">
        <div className="container">
          <div className="grid">
            <div className="text-info">
              <h1>Create profiles for kids.</h1>
              <p>
                Send kids on adventures with their favorite characters in a
                space made just for them—free with your membership.
              </p>
            </div>
            <div className="config-img">
              <img
                src="https://occ-0-4249-1001.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABfpnX3dbgjZ-Je8Ax3xn0kXehZm_5L6-xe6YSTq_ucht9TI5jwDMqusWZKNYT8DfGudD0_wWVVTFLiN2_kaQJumz2iivUWbIbAtF.png?r=11f"
                alt="tv Netflix"
              />
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="fomr">
          <form className="">
            <input type="email" placeholder="Email Address" class="input" />
            <button className="btnFooter form__buttton">Get Started</button>
          </form>
        </div>

        <p>Copyryght-© 2022 Netflix USA</p>
      </footer>
    </>
  );
}

const Background = styled.section`
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url("https://assets.nflxext.com/ffe/siteui/vlv3/b321426e-35ae-4661-b899-d63bca17648a/462d8ff3-51d2-455f-92bc-1ef044c21528/LK-en-20220926-popsignuptwoweeks-perspective_alpha_website_medium.jpg")
      center/cover no-repeat;
  height: 100vh;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  @media screen and (min-width: 768px) and (max-width: 1200px) {
    height: 85vh;
  }

  @media screen and (min-width: 280px) and (max-width: 767px) {
    height: 75vh;
  }
`;

const Container = styled.div`
  width: 85%;
  margin: 0 auto;
`;

const Content = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 650px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  @media screen and (min-width: 768px) and (max-width: 1200px) {
    height: 550vh;
  }

  @media screen and (min-width: 280px) and (max-width: 767px) {
    max-width: 450px;
    margin-top: 13vh;
  }
  @media screen and (min-width: 375px) and (max-width: 550px) {
    max-width: 350px;
    margin-top: 13vh;
  }

  @media screen and (min-width: 280px) and (max-width: 375px) {
    max-width: auto;
    margin-top: 13vh;
  }
  h4 {
    color: #fff;
    margin: 1vh 0;
  }
  img {
    width: 100%;
    height: auto;
    display: block;
    max-width: 600px;
    object-fit: contain;
    margin-bottom: 1vh;
  }
  > .get-bundle-btn {
    outline: none;
    border: none;
    width: 100%;
    padding: 11.5px 15px;
    align-items: center;
    text-align: center;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    background: #0063e5;
    color: #f9f9f9;
    font-size: 18px;
    transition: all 0.7s ease-in-out;
    border-radius: 0.345rem;
    cursor: pointer;
    @media screen and (min-width: 550px) and (max-width: 1200px) {
      padding: 10px 0;
      font-size: 15px;
    }

    @media screen and (min-width: 280px) and (max-width: 550px) {
      padding: 5px 0;
      font-size: 14px;
    }
    &:hover {
      background: #0085ff;
    }
  }
  > .links {
    outline: none;
    border: none;
    font-size: 19px;
    background: transparent;
    color: #f9f9f9;
    margin-top: 1vh;
    cursor: pointer;
    @media screen and (min-width: 280px) and (max-width: 550px) {
      font-size: 15px;
    }
  }
  > .text-gray {
    color: gray;
  }
`;

export default Login;
