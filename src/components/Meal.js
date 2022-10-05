import React, { useEffect, useState }  from "react";
import MealItem from "./MealItem";
import RecipeIndex from "./RecipeIndex";

const Meal=() =>{
    const [url, setUrl] = useState("https://www.themealdb.com/api/json/v1/1/search.php?f=a");
    const [item, setItem]= useState();
    const [show, setShow]= useState(false);
    const [search, setSearch]= useState("");
    
    useEffect(()=>{
      fetch(url)
        .then(response=>response.json())
        .then(data=> {
            console.log(data.meals);
            setItem(data.meals);
            setShow(true);
        })
    },[url]);

    const setIndex=(alpha)=>{
        setUrl(
            `https://www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`
            );
    }
    
    const searchRecipe=(e)=>{
        if(e.key==="Enter"){
            setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        }
    }

    return(
    <>
     <div className="main">
            <div className="heading">
                <h1><span>Mama's</span>-Recipe</h1>
                <h2>Type your Food Recipe and Search</h2>
            </div>
            <div className="searchBox">
                <input type="search recipe" className="searchBar" 
                onChange={e=>setSearch(e.target.value)} onKeyPress={searchRecipe}/>
            </div>
            <div className="container">
                {
                    show ? <MealItem data={item}/>:"Unavailable"
                }
            </div>
            <div className="indexContainer">
                <RecipeIndex alphaIndex={(alpha)=>setIndex(alpha)}/>
            </div>
        </div>
    </>
    );
}

export default Meal;