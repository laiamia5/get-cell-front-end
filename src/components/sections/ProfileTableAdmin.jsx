import React, { useEffect , useState} from "react";
import '../../styles/profiletableadmin.css'
import { obtener_compras } from "../../tools/peticiones";

export default function ProfileTableAdmin (){
    const [compras, setCompras] = useState([])
    useEffect(() => {
        obtener_compras().then((res) => {
            setCompras(res)
            console.log(res.length)
        })
    }, [])
    return(
        <div>
        {/* <div style={{display: "flex" , flexDirection: "column"}}>
            <h1 style={{marginBottom: "50px"}}>Reporte de pedidos</h1>

            <div class="filters-container">
                <input id="begin_date" type="date" text="Rango de inicio" class="date-picker" />
                <input id="end_date" type="date" text="Rango de fin" class="date-picker" />
                <button id="filter_button" class="filter-button">Filtrar</button>
            </div>
        </div> */}

        <table id="report_ordes_table" class="display" style={{width: "90%"}}>
                <thead>
                    <tr>
                        <th>Nombre del cliente</th>
                        <th>Fecha de documento</th>
                        <th>Estatus de pedido</th>
                        <th>Guía de rastreo</th>
                        <th>Total de documento</th>
                        <th>Detalles</th>
                    </tr>
                </thead>
                <tbody>
                    { compras?.map((element, index) => {
                        return(
                            <tr role="row" class="odd table_profile_admin">
                                <td class="sorting_1">{element?.usuario?.nombre +' '+ element?.usuario?.apellido}</td>
                                <td>{element?.createdAt.split('T')[0]}</td>
                                <td >
                                    <a onMouseMove={(event) => console.log(event.target.value)}> {element?.entrega} </a>
                                </td>
                                <td>345263774</td>
                                <td>$ {element?.monto_final}</td>
                                <td>
                                    <a>Abrir detalle
                                        <p></p>
                                    </a>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
        </table>

        <div id="detail_modal" class="modal">
            <table id="detail_table_modal" class="display" style={{width: "100%"}}>
                <thead>
                    <tr>
                        <th>Clave de artículo</th>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Almacén</th>
                        <th>Precio por unidad</th>
                        <th>Precio total</th>
                        <th>Subtotal</th>
                        <th>Impuesto</th>
                        <th>Total</th>
                    </tr>
                </thead>
            </table>
            <a href="#" rel="modal:close">Close</a>
        </div>
        </div>
    )
}