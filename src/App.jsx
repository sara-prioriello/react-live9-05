import { useState } from 'react'
import { useEffect } from 'react';
// Supports weights 100-900
import '@fontsource-variable/outfit/wght.css';
import '@fontsource/bebas-neue';
import * as bootstrap from 'bootstrap'
import AppHeader from './components/AppHeader';
import CharacterData from './components/CharacterData';
import CharacterList from './components/CharacterList';
import AppBanner from './components/AppBanner.jsx';

import { logo_text, main_menu, banner_data, api_url } from '../src/data/app_data.js'

function App() {
  const [charactersData, setCharactersData] = useState([])




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

        <AppBanner banner_data={banner_data}>

          <button className="btn btn-primary btn-lg" type="button" onClick={() => fetchData(api_url)}>
            Example button
          </button>

        </AppBanner>



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
