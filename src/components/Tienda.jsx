import React from "react";
import Card from './sections/Card'
import { obtener_productos , buscar_producto_por} from "../tools/peticiones";
import { useState, useEffect } from "react"
import Aside from "./sections/Aside";
// import { useLocation } from "react-router-dom";
import { useSearchParams } from "react-router-dom";


export default function Tienda (){
  // const location = useLocation()
  const [params] = useSearchParams()
  const [data, setData] = useState([])
  const [page, setPage] = useState(0)

  useEffect(() => {
    buscar_producto_por().then((res) => setData(res) )
  }, [])

  useEffect(() => {
    buscar_producto_por(params.get('nombre')).then((res) =>{ 
      setData(res)
      console.log(res)
    })
  }, [params])

  const ver = (val) => {
    if(val == 'prev'){
      if(Math.sign(page) !== 1){
        setPage(0) 
        alert('no hay mas pagninas previas')
      }else setPage(page - 1)
    }else if('next'){
      if(data.length - 1 == page ) alert('no hay mas paginas') 
      else setPage(page + 1)
    }
  }

    return(
        <>
        <Aside/>
  <main style={{marginLeft: '250px'}}>
    <div class="page-section">
      <div class="container">
        <div class="row">

          {data[page]?.map((e) => <Card props={e} />)}
{/* ------------------------botones---------------------- */}
          <div class="col-12 mt-5">
            <nav aria-label="Page Navigation">
              <ul class="pagination justify-content-center">
                <li class="page-item ">
                  <a class="page-link" tabindex="-1" aria-disabled="true"  onClick={(e) => ver('prev')}>Previous</a>
                </li>
                {data.map((e, index) => <li class={index == page ? "page-item active" : "page-item"} onClick={() => setPage(index)}><a class="page-link">{index+ 1} </a></li>)}
                
                <li class="page-item">
                  <a class="page-link" onClick={(e) => ver('next')}>Next</a>
                </li>
              </ul>
            </nav>
          </div>

        </div>
  
      </div>
    </div>
  </main>

        </>
    )
}