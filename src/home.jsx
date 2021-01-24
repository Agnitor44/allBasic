import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
  } from "react-router-dom";
  
export default function home() {
    return (
        <div className = 'appCont'>
        <div className="game">
        <div className = 'zdj1'></div>
        <div className = 'wrap'>
        <NavLink to = '/note'><h1>Notatnik</h1></NavLink>
        <article>
          <p>
          Pozwala pisać małe notatki możliwe do powiększenia.
          </p>
        </article>
        </div>
        </div>
  

        <div className="game">
        <div className = 'zdj2'></div>
        <div className = 'wrap'>
        <NavLink to = '/memory'><h1>Gra w memory</h1></NavLink>
        <article>
          <p>
          Dobierz dwie karty o identycznym humorze.
          </p>
        </article>
        </div>
        </div>

        <div className="game">
        <div className = 'zdj3'></div>
        <div className = 'wrap'>
        <NavLink to = '/list'><h1>ToDoList</h1></NavLink>
        <article>
          <p>
            Wpisz co masz zrobhić i zrób!
          </p>
        </article>
        </div>
        </div>


        <div className="game">
        <div className = 'zdj4'></div>
        <div className = 'wrap'>
        <NavLink to = '/weather'><h1>Pogoda</h1></NavLink>
        <article>
          <p>
        Wpisz miasto i ciesz się probnozą pogody.
          </p>
        </article>
        </div>
        </div>


        <div className="game">
        <div className = 'zdj5'></div>
        <div className = 'wrap'>
        <NavLink to = '/currency'><h1>Waluty</h1></NavLink>
        <article>
          <p>
         Wymień walute na walute (Niedziałą przez Api)
          </p>
        </article>
        </div>
        </div>
       
        </div>
      
    )
}
