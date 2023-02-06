import { FC, useState } from "react";
import Gentleman from "../../data/data.model";
import "./Gentlemen.css";

interface GentlemenProps {
  gentleman: Gentleman;
}

const Card: FC<GentlemenProps> = ({ gentleman }) => {
  const [select, setSelect] = useState(gentleman.selected);
  return (
    <li
      onClick={(event) => {
        setSelect(select === true ? false : true);
        console.log(select);
      }}
      className="gentleman"
    >
      <div className="gentleman__avatar-container">
        <img
          className="gentleman__avatar"
          src={gentleman.picture}
          alt={`${gentleman.name} pointing at you`}
        />
        <span className="gentleman__initial">F</span>
      </div>
      <div className="gentleman__data-container">
        <h2 className="gentleman__name">{gentleman.name}</h2>
        <ul className="gentleman__data-list">
          <li className="gentleman__data">
            <span className="gentleman__data-label">Profession:</span>
            {gentleman.profession}
          </li>
          <li className="gentleman__data">
            <span className="gentleman__data-label">Status:</span>{" "}
            {gentleman.status}
          </li>
          <li className="gentleman__data">
            <span className="gentleman__data-label">Twitter:</span>{" "}
            {gentleman.twitter}
          </li>
        </ul>
      </div>
      <i className="icon gentleman__icon fas fa-regular fa-check"></i>
      <i className="icon gentleman__icon gentleman__icon--delete fas fa-regular fa-times"></i>
    </li>
  );
};

export default Card;
