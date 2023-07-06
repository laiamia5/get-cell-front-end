import React from "react";
import '../../styles/aside.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Aside (){
    return(
        
    <aside class="sidebar" style={{display: 'block'}}>
    <div id="leftside-navigation" class="nano">
      <ul class="nano-content">
        <li class="sub-menu">
          <a href="index.html"><FontAwesomeIcon icon="fa-solid fa-store" className="anim" style={{marginRight: '5px'}}/><span>Todo</span></a>
        </li>
        <li class="sub-menu">
          <a href="javascript:void(0);"> <FontAwesomeIcon icon="fa-solid fa-mobile" className="anim"/> <span>Celulares nuevos</span><FontAwesomeIcon icon="fa-solid fa-angle-right" style={{marginLeft: '5px'}} /></a>
          <ul>
  
            <li><a href="ui-alerts-notifications.html">Alerts &amp; Notifications</a>
            </li>
            <li><a href="ui-panels.html">Panels</a>
            </li>
            <li><a href="ui-buttons.html">Buttons</a>
            </li>
            <li><a href="ui-slider-progress.html">Sliders &amp; Progress</a>
            </li>
            <li><a href="ui-modals-popups.html">Modals &amp; Popups</a>
            </li>
            <li><a href="ui-icons.html">Icons</a>
            </li>
            <li><a href="ui-grid.html">Grid</a>
            </li>
            <li><a href="ui-tabs-accordions.html">Tabs &amp; Accordions</a>
            </li>
            <li><a href="ui-nestable-list.html">Nestable Lists</a>
            </li>
          </ul>
        </li>
        <li class="sub-menu">
          <a href="javascript:void(0);"> <FontAwesomeIcon icon="fa-solid fa-mobile-screen-button" className="anim"/> <span>Celulares Reacondicionados</span><FontAwesomeIcon icon="fa-solid fa-angle-right" style={{marginLeft: '5px'}} /></a>
          <ul>
            <li><a href="tables-basic.html">Basic Tables</a>
            </li>
  
            <li><a href="tables-data.html">Data Tables</a>
            </li>
          </ul>
        </li>
        <li class="sub-menu">
          <a href="javascript:void(0);"><FontAwesomeIcon icon="fa-solid fa-rectangle-wide" /><span>Fundas</span><FontAwesomeIcon icon="fa-solid fa-angle-right" style={{marginLeft: '5px'}} /></a>
          <ul>
            <li><a href="forms-components.html">Components</a>
            </li>
            <li><a href="forms-validation.html">Validation</a>
            </li>
            <li><a href="forms-mask.html">Mask</a>
            </li>
            <li><a href="forms-wizard.html">Wizard</a>
            </li>
            <li><a href="forms-multiple-file.html">Multiple File Upload</a>
            </li>
            <li><a href="forms-wysiwyg.html">WYSIWYG Editor</a>
            </li>
          </ul>
        </li>
        <li class="sub-menu "> {/*active para deslizarlo*/ }
          <a href="javascript:void(0);"><FontAwesomeIcon icon="fa-solid fa-hammer-crash" /><span>Templados</span><i class="arrow fa fa-angle-right pull-right"></i></a>
          <ul>
            <li class="active"><a href="mail-inbox.html">Inbox</a>
            </li>
            <li><a href="mail-compose.html">Compose Mail</a>
            </li>
          </ul>
        </li>
        <li class="sub-menu">
          <a href="javascript:void(0);"><i class="fa fa-bar-chart-o"></i><span>Repuestos</span><i class="arrow fa fa-angle-right pull-right"></i></a>
          <ul>
            <li><a href="charts-chartjs.html">Chartjs</a>
            </li>
            <li><a href="charts-morris.html">Morris</a>
            </li>
            <li><a href="charts-c3.html">C3 Charts</a></li>
          </ul>
        </li>
        <li class="sub-menu">
          <a href="javascript:void(0);"><i class="fa fa-map-marker"></i><span>Otros accesorios</span><i class="arrow fa fa-angle-right pull-right"></i></a>
          <ul>
            <li><a href="map-google.html">Google Map</a>
            </li>
            <li><a href="map-vector.html">Vector Map</a>
            </li>
          </ul>
        </li>
        {/* <li class="sub-menu">
          <a href="typography.html"><i class="fa fa-text-height"></i><span>Typography</span></a>
        </li>
        <li class="sub-menu">
          <a href="javascript:void(0);"><i class="fa fa-file"></i><span>Pages</span><i class="arrow fa fa-angle-right pull-right"></i></a>
          <ul>
            <li><a href="pages-blank.html">Blank Page</a>
            </li>
            <li><a href="pages-login.html">Login</a>
            </li>
            <li><a href="pages-sign-up.html">Sign Up</a>
            </li>
            <li><a href="pages-calendar.html">Calendar</a>
            </li>
            <li><a href="pages-timeline.html">Timeline</a>
            </li>
            <li><a href="pages-404.html">404</a>
            </li>
            <li><a href="pages-500.html">500</a>
            </li>
          </ul>
        </li> */}
      </ul>
    </div>
  </aside>
    )
}