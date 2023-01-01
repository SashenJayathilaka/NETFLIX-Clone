import React from "react";

type Props = {};

function DownloadShows({}: Props) {
  return (
    <section className="section-dowload text-white border-b-8 border-gray-800 xl:px-28 items-center">
      <div className="container flex">
        <div className="grid">
          <div className="hidden  md:flex flex-col text-info pl-24">
            <h1>Download your shows to watch offline</h1>
            <p>
              Save your favorites easily and always have something to watch.
            </p>
          </div>
          <div className="config-img relative">
            <img
              src="https://github.com/deviego/Netflix-Template/blob/main/img/el.jpg?raw=true"
              alt="tv Netflix"
            />
            <div className="cardanimation absolute">
              <div className="cardanimation-img">
                <img
                  src="https://github.com/deviego/Netflix-Template/blob/main/img/boxshot.png?raw=true"
                  alt="stranger things"
                />
              </div>
              <div className="cardanimation-text">
                <h2>Stranger Things</h2>
                <p>Downloading...</p>
              </div>
              <div className="animation-icon"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DownloadShows;
