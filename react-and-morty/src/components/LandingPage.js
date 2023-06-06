import React from "react";
import Buttons from "./Buttons";

document.getElementById("root").style.height = "100%";

const LandingPage = () => {
  return (
    <>
      <div className="" style={{ height: "80%" }}>
        <div
          className="mx-1 d-flex flex-column"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="mb-0 mb-md-5 mb-sm-3">
            <h1 className="text-center fw-bold fs-2 my-4">
              React And <span className="text-primary">Morty</span>
            </h1>
          </div>
          <div>
            <p className="card-text fs-5 text-center fw-semibold mb-4 mb-md-5 mb-sm-3">
              Rick and Morty is the Emmy award-winning half-hour animated hit
              comedy series on Adult Swim that follows a sociopathic genius
              scientist who drags his inherently timid grandson on insanely
              dangerous adventures across the universe.
            </p>
            <p className="card-text fs-5 text-center fw-semibold mb-4 mb-md-5 mb-sm-3">
              Rick Sanchez is living with his daughter Beth’s family and
              constantly bringing her, his son-in-law Jerry, granddaughter
              Summer, and grandson Morty into intergalactic escapades.
            </p>
            <p className="card-text fs-5 text-center fw-semibold mb-4 mb-md-5 mb-sm-3">
              Rick and Morty stars Justin Roiland (Adventure Time), Sarah Chalke
              (Scrubs), Chris Parnell (Saturday Night Live), and Spencer Grammer
              (Greek). The series is created by Dan Harmon (Community) and
              Roiland, who also serve as executive producers.
            </p>
            <div className="mb-5 mt-0 mt-md-5 mt-sm-3">
              <Buttons />
            </div>
          </div>
        </div>
        <footer
          className="position-fixed fixed-bottom text-center text-lg-start bg-info"
          style={{ opacity: 0.6 }}
        >
          <div className="text-center p-2 fw-bold">© A Rickle In Time</div>
        </footer>
      </div>
      {/* <div className="d-flex card text-center bg-transparent">
        <div className="card-header fs-3 fw-bold">React and Morty</div>
        <div className="card-body">
          <br />
          <p className="card-text fs-5">
            Rick and Morty is the Emmy award-winning half-hour animated hit
            comedy series on Adult Swim that follows a sociopathic genius
            scientist who drags his inherently timid grandson on insanely
            dangerous adventures across the universe.
          </p>
          <br />{" "}
          <p className="card-text fs-5">
            {" "}
            Rick Sanchez is living with his daughter Beth’s family and
            constantly bringing her, his son-in-law Jerry, granddaughter Summer,
            and grandson Morty into intergalactic escapades.
          </p>
          <br />{" "}
          <p className="card-text fs-5">
            {" "}
            Rick and Morty stars Justin Roiland (Adventure Time), Sarah Chalke
            (Scrubs), Chris Parnell (Saturday Night Live), and Spencer Grammer
            (Greek). The series is created by Dan Harmon (Community) and
            Roiland, who also serve as executive producers.
          </p>
          <Buttons />
          <div className={`card-footer text-muted text-center`}>
            A Rickle in Time
          </div>
        </div>
      </div> */}
    </>
  );
};

export default LandingPage;
