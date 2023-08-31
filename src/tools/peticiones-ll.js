import axios from 'axios'
const host = process.env.REACT_APP_BACKEND_URL

//pago (pendiente o realizado), medio de pago
//('mercado pago', 'transferencia bancaria')

export let procesarCompra = (productos, usuario, medioDePago) => {
	let idDelProd = [];
	let respuesta;

  
	const realizarCompraBack = (productos, usuario) => {
	  return new Promise((resolve, reject) => {
		const promises = productos.map(async (ele) => {
		  try {
			const res = await axios.post(`${host}/realizar-pedido`, {
			  talle: ele.talle,
			  color: ele.color,
			  cantidad: ele.cantidad,
			  productoId: ele.id
			});
  
			idDelProd.push(res.data.id);
			descontarStock(ele.id, ele.cantidad);
		  } catch (err) {
			console.log(err);
		  }
		});
  
		Promise.all(promises)
		  .then(async () => {
			await realizarCompraBack2(usuario);
			resolve();
		  })
		  .catch((err) => {
			console.log(err);
			reject(err);
		  });
	  });
	};
  
	const realizarCompraBack2 = (usuario) => {

	  return new Promise((resolve, reject) => {
		axios.get(`${host}/usuarios/buscar/${usuario.dni}`)
		  .then(async(res) => {
			if (res.data) {
			  await finalizarLaCompraBack(res.data.id);
				resolve();
			}else{
				return alert('debe ingresar con el dni con el que se registro')
			}
		  })
		  .catch((err) => {
			console.log(err);
			reject(err);
		  });
	  });
	};
  
	const finalizarLaCompraBack = async (idUsuario) => {
		try {
		  const monto = await montoFinal(productos);
		  const res = await axios.post(`${host}/compras`, {
			usuarioId: idUsuario,
			pedidos: idDelProd,
			monto_final: monto,
			medio_de_pago: medioDePago === true ? 'transferencia bancaria' : 'mercado pago'
		  });
		  respuesta = res.data;
		  return res.data;
		} catch (err) {
		  console.log(err);
		  throw err;
		}
	  };

//   //HARDCODIE EL ENVIOOOOOOOOO!!!!!!!!!! Y EL HOST
	return new Promise((resolve, reject) => {
	
			realizarCompraBack(productos, usuario)
			.then(() => {
			  	if(respuesta.medio_de_pago === 'mercado pago'){
				axios
				.post(`${host}/pagar/${respuesta.id}`,[...respuesta.pedidos, {cantidad: 1, producto: {nombre: 'envio', precio: 1}}])
				.then((res) => {
					console.log(res.data)
					resolve(res.data)
				})
				.catch((err) => alert(err))
			  }else{
				resolve(respuesta)
			  }
			})
			.catch((err) => {
			  console.log(err);
			  reject(err);
			});
	});
  };



	// ...................................................................................................
	const descontarStock = (id, cantidad) => {
		axios.put(`${host}/productos/descontar-stock/${id}`, {cantidad: cantidad})
		.then((res) => 'nose')
		.then((err) => console.log(err))
	}

	export const montoFinal = async (carrito) => {//es un dato para pasarle a 'compras'
		let monto = 1550
		await carrito.reduce((acc, item) => {
			monto += acc + item.precio * item.cantidad;
		}, 0)
		return monto
	}

	// export const obtenerElEnvio = async () => {
	// 	try {
	// 	  const response = await axios.get(`${host}/info`);
	// 	  return response.data.envio
	// 	} catch (error) {
	// 	  console.error(error);
	// 	  throw error;
	// 	}
	//   };