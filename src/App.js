import "./App.css";
import React, { useState } from "react";
import ReactPlaceholder from "react-placeholder";
import "react-placeholder/lib/reactPlaceholder.css";
import { TextRow, RectShape } from "react-placeholder/lib/placeholders";

function PlaceHolder() {
  return (
    <div>
      <div className="my-2">
        <RectShape color="#E0E0E0" style={{ width: 300, height: 350 }} />
      </div>
      <TextRow color="#E0E0E0" />
      <div className="my-2">
        <TextRow color="#E0E0E0" />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <hr />© 2021
    </footer>
  );
}

const awesomePlaceholder = (
  <div className="my-awesome-placeholder container m-4 text-center">
    <div className="row">
      <div className="col-md-3  my-2 mx-2 card">
        <PlaceHolder />
      </div>
      <div className="col-md-3 my-2 mx-2 card">
        <PlaceHolder />
      </div>
      <div className="col-md-3 my-2 mx-2 card">
        <PlaceHolder />
      </div>
      <div className="col-md-3 my-2 mx-2 card">
        <PlaceHolder />
      </div>
      <div className="col-md-3 my-2 mx-2 card">
        <PlaceHolder />
      </div>
    </div>
  </div>
);

function MovieInfo(props) {
  return (
    <div className="card">
      <img
        src={props.movie.Poster}
        alt="moviename"
        className="card-img-top img-fluid"
      />
      <div className="card-body">
        <h5>
          {" "}
          <b>Name:- </b> {props.movie.Title}
        </h5>
        {console.log(props.movie)}
        <p className="mt-3">
          {" "}
          <b>Release Date:- </b> {props.movie.Year}
        </p>
      </div>
    </div>
  );
}

function MainComponent(props) {
  return (
    <div className="container">
      <div className="pt-5">
        <h4 className="display-4">
          Results for
          <span className="text-capitalize">{props.searchedFor}</span>
        </h4>
      </div>
      <button className="btn btn-link" onClick={props.selectAnother()}>
        Search Another
      </button>
      <ReactPlaceholder
        type="media"
        showLoadingAnimation={true}
        rows={7}
        ready={props.movies.length > 0}
        customPlaceholder={awesomePlaceholder}
      >
        <div className="row mt-3">
          {props.movies.map((movie, key) => {
            return (
              <div className="col-md-3 my-2">
                <MovieInfo key={key} movie={movie} />
              </div>
            );
          })}
        </div>
      </ReactPlaceholder>
    </div>
  );
}

function App() {
  let [searched, setSearched] = useState(false);
  let [data, setData] = useState("");
  let [check, setCheck] = useState(false);
  let [movies, setMovies] = useState([]);

  function selectAnother() {
    console.log("I called");
    setSearched(false);
    setMovies([]);
  }

  function handleSubmission(e) {
    e.preventDefault();
    setSearched(true);
    fetch(`https://www.omdbapi.com/?apikey=2c6e7a77&s=${data}`)
      .then((res) => res.json())
      .then((resj) => {
        console.log(resj.Response);
        if (resj.Response === "True") {
          setMovies(resj.Search);
        } else {
          setSearched(false);
          setCheck(true);
        }
      });
  }

  function handleDataChange(e) {
    setCheck(false);
    console.log(e.target.value);
    setData(e.target.value);
  }

  if (searched) {
    return (
      <div className="my-bg-div">
        <MainComponent
          movies={movies}
          searchedFor={data}
          selectAnother={() => selectAnother}
        />
        {/* <Footer /> */}
      </div>
    );
    // } else if (searched == "searching") let [isDarkMode, setIsDarkMode] = useState(false);{
    //   return <p>Searching...</p>;
  } else {
    return (
      <div className="my-bg-div p-5">
        <div className=" container mt-4 main-div">
          <header class="pb-3 mb-4 border-bottom">
            <a
              href="/"
              class="d-flex align-items-center text-dark text-decoration-none"
            >
              <span class="fs-4">Search Movies for Free</span>
            </a>
          </header>
          {/* <img
            src="https://storage.googleapis.com/incind/Wavy_Ppl-05_Single-123gkLak8.jpg"
            style={{ maxWidth: "100%", width: "500px" }}
            alt="..."
          /> */}
          <div class="p-md-5 mb-4 bg-light rounded-3">
            <div class="container-fluid py-5">
              <form onSubmit={handleSubmission}>
                <div>
                  <div className="d-inline float-left">
                    <h6 className="display-4 d-inline">Movie Name:- </h6>
                  </div>
                  <input
                    type="search"
                    className="form-control my-3"
                    placeholder="Enter Movie name"
                    value={data}
                    onChange={handleDataChange}
                  />
                  {check ? (
                    <p className="alert alert-danger my-3">
                      No Movie available with this name
                    </p>
                  ) : (
                    ""
                  )}
                  <button className="btn btn-primary w-md-50">
                    Search Movie
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

// api =
export default App;
