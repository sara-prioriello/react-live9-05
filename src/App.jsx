import { useState } from 'react'
import { useEffect } from 'react';
// Supports weights 100-900
import '@fontsource-variable/outfit/wght.css';
import '@fontsource/bebas-neue';
import * as bootstrap from 'bootstrap'
import AppHeader from './components/AppHeader';
import CharacterData from './components/CharacterData';
import CharacterList from './components/CharacterList';

import { logo_text, main_menu } from '../src/data/app_data.js'

function App() {
  const [charactersData, setCharactersData] = useState([])
  const api_url = 'https://rickandmortyapi.com/api/character';

  function fetchData(url) {

    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setCharactersData(data)
        console.log(url)
      })
  }

  useEffect(() => fetchData(api_url), [])

  return (
    <>
      <AppHeader logo_text={logo_text} menu={main_menu}></AppHeader>

      <main>
        <div className="p-5 mb-4 bg-light rounded-3">
          <div className="container-fluid py-5">
            <h1 className="display-5 fw-bold">Custom hero section</h1>
            <p className="col-md-8 fs-4">
              Using a series of utilities, you can create this highlighted hero
              section. Check out the examples below for how you can remix and
              restyle it to your liking.
            </p>
            <button className="btn btn-primary btn-lg" type="button" onClick={() => fetchData(api_url)}>
              Example button
            </button>
          </div>
        </div>

        <nav aria-label="Page navigation">
          <ul
            className="pagination  justify-content-center">

            {charactersData?.info?.prev &&
              <li className="page-item ">
                <button className="page-link" type='button' aria-label="Previous" onClick={() => fetchData(charactersData?.info?.prev)}>
                  <span aria-hidden="true">&laquo;</span>
                </button>
              </li>
            }




            {charactersData?.info?.next &&
              <li className="page-item">
                <button className="page-link" type='button' aria-label="Next" onClick={() => fetchData(charactersData?.info?.next)}>
                  <span aria-hidden="true">&raquo;</span>
                </button>
              </li>
            }

          </ul>
        </nav>


        <CharacterList charactersData={charactersData}></CharacterList>



      </main>
    </>
  )
}

export default App
