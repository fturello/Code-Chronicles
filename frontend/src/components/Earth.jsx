import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import styles from "../styles/Earth.module.css";

function Earth({ setPeriod }) {
  const [showPeriods, setShowPeriods] = useState(false);

  const onPressPlanet = () => {
    setShowPeriods(!showPeriods);
  };

  const onPressLink = () => {
    setShowPeriods(!showPeriods);
  };

  const onPressPeriod = (e) => {
    console.log(e.target.textContent);
    setPeriod(e.target.textContent);
  };

  return (
    <div>
      <div
        className={styles.earth}
        onClick={onPressPlanet}
        onKeyDown={onPressPlanet}
        role="button"
        tabIndex="0"
      >
        {" "}
      </div>
      <div
        className={`${styles.periods} ${
          showPeriods ? "" : styles["show-periods"]
        }`}
      >
        <ul onClick={onPressLink}>
          <li>
            <Link onClick={(e) => onPressPeriod(e)} to="/">
              Prehistoire
            </Link>
          </li>
          <li>
            <Link onClick={(e) => onPressPeriod(e)} to="/">
              Antiquitée
            </Link>
          </li>
          <li>
            <Link onClick={(e) => onPressPeriod(e)} to="/">
              Moyen Âge
            </Link>
          </li>
          <li>
            <Link onClick={(e) => onPressPeriod(e)} to="/">
              Renaissance
            </Link>
          </li>
          <li>
            <Link onClick={(e) => onPressPeriod(e)} to="/">
              Temps Moderne
            </Link>
          </li>
          <li>
            <Link onClick={(e) => onPressPeriod(e)} to="/">
              Future
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

Earth.propTypes = {
  setPeriod: PropTypes.func.isRequired,
};

Earth.defaultProps = {
  isPlanetName: false,
};

export default Earth;
