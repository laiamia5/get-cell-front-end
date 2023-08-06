import '../../styles/index.css'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function NavCategorias () {
    return(
        <div className="nav-categorias" style={{background: 'rgb(108, 85, 249)', color: 'white', height: '50px'}}>
          <ul style={{display: 'flex', alignContent: 'center', flexWrap: 'wrap', height: '100%', width: '100%',justifyContent: 'center', listStyleType: 'none' }}>
            <li style={{marginLeft: '20px'}}>Celulares Nuevos
                <i className="pull-right" style={{marginLeft: '5px'}}>
                    <FontAwesomeIcon icon="fa-solid fa-angle-right"  />
                </i>
                <div class="dropdown-menu2" value="true">
                    <span class="dropdown-item1">
                        Descending
                    </span>
                    <span class="dropdown-item1">
                    Ascending</span>
                </div>
            </li>
            <li style={{marginLeft: '20px'}}>Celulares Reacondicionados
                <i className="pull-right" style={{marginLeft: '5px'}}>
                    <FontAwesomeIcon icon="fa-solid fa-angle-right"  />
                </i>
                <div class="dropdown-menu2" value="true">
                    <span class="dropdown-item1">
                        Descending
                    </span>
                    <span class="dropdown-item1">
                    Ascending</span>
                </div>
            </li>
            <li style={{marginLeft: '20px'}}>fundas
                <i className="pull-right" style={{marginLeft: '5px'}}>
                    <FontAwesomeIcon icon="fa-solid fa-angle-right"  />
                </i>
                <div class="dropdown-menu2" value="true">
                    <span class="dropdown-item1">
                        Descending
                    </span>
                    <span class="dropdown-item1">
                    Ascending</span>
                </div>
            </li>
            <li style={{marginLeft: '20px'}}>templados
                <i className="pull-right" style={{marginLeft: '5px'}}>
                    <FontAwesomeIcon icon="fa-solid fa-angle-right"  />
                </i>
                <div class="dropdown-menu2" value="true">
                    <span class="dropdown-item1">
                        Descending
                    </span>
                    <span class="dropdown-item1">
                    Ascending</span>
                </div>
            </li>
            <li style={{marginLeft: '20px'}}>accesorios
                <i className="pull-right" style={{marginLeft: '5px'}}>
                    <FontAwesomeIcon icon="fa-solid fa-angle-right"  />
                </i>
                <div class="dropdown-menu2" value="true">
                    <span class="dropdown-item1">
                        Descending
                    </span>
                    <span class="dropdown-item1">
                    Ascending</span>
                </div>
            </li>
          </ul>
        </div>
    )
}
