import styles from "./Netflix.module.css";

// Import styled components in React.js
import style from "styled-components";

// const SeriesCard = (props) => {
const SeriesCard = ({ currElem }) => {
  //console.log(props.key) //undefined
  //We can't access the key using props.key
  const { img_url, name, rating, description, genre, cast, watch_url } =
    currElem;

  const btn_style = {
    padding: "1.2rem 2.4rem",
    border: "none",
    fontSize: "1.6rem",
    backgroundColor: `${rating >= 8.5 ? "#7dcea0" : "#f7dc6f"}`,
    color: "var(--bg-color)",
    fontWeight: "bold",
    cursor: "pointer",
  };

  const ratingClass = rating >= 8.5 ? styles.super_hit : styles.average;

  return (
    <li className={styles.card}>
      <div>
        <img src={img_url} alt="Poster Image" width="40%" height="40%" />
      </div>
      {/* <div className={styles["card-content"]}> */}
      <div className="flex flex-col gap-6 p-6">
        <h2>Name: {name}</h2>
        {/* <h3 style={{margin:'1.2rem 0'}}>Rating: {rating}</h3> ... This is for inline CSS*/}

        <h3>
          Rating: <span className={`${styles.rating} ${ratingClass}`}>{rating}</span>{" "}
        </h3>
        <p className="text-3xl font-bold underline text-cyan-300">Summary: {description}</p>
        <p>Genre: {genre}</p>
        <p>Cast: {cast}</p>
        <a href={watch_url} target="_blank">
          <button style={btn_style}>Watch Now</button>
        </a>
      </div>
    </li>
  );
};

export default SeriesCard;
