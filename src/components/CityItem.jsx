import React from "react";
import styles from "./CityItem.module.css";
import { Link } from "react-router-dom";
import { useProvider } from "../contexts/CitiesContext";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));
function CityItem({ city }) {
  const { currentCity, deleteCity } = useProvider();
  const { cityName, date, id, position } = city;
  function deleteHandler(e) {
    e.preventDefault();
    deleteCity(id);
  }
  return (
    <li>
      <Link
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
        className={`${styles.cityItem} ${
          id === currentCity ? styles["cityItem--active"] : ""
        }`}
      >
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>{formatDate(date)}</time>
        <button className={styles.deleteBtn} onClick={deleteHandler}>
          &times;
        </button>
      </Link>
    </li>
  );
}

export default CityItem;
