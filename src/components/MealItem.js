import React from "react";
import { useNavigate } from "react-router-dom";

const MealItem = ({ data }) => {
  console.log(data);
  let navigate=useNavigate();
  return (
    <>
      {!data ? "OOPS! Sorry seems we don't have that meal!" : data.map((item) => {
            return (
              <div className="card" key={item.idMeal} onClick={()=>{navigate(`/${item.idMeal}`)}} >
                <img src={item.strMealThumb} alt=""></img>
                  <h3>{item.strMeal}</h3>
              </div>
            );
          })
        }
    </>
  );
};

export default MealItem;