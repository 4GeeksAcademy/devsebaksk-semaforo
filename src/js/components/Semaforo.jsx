import React, {useState} from 'react'

import '/src/styles/index.css'

function Semaforo() {
  const [seleccionado, setSeleccionado] = useState("ligth-on");
  return (
    <div className='contenedor'>
      <div className='soporte'></div>
    <div className='cuerpo'>
				<div className={`bg-danger ${seleccionado == 'bg-danger' ? 'ligth-on' : ''}`} onClick={() => { setSeleccionado("bg-danger") }}></div>

				<div className={`bg-warning ${seleccionado == 'bg-warning' ? 'ligth-on' : ''}`} onClick={() => { setSeleccionado("bg-warning") }}></div>

				<div className={`bg-success ${seleccionado == 'bg-success' ? 'ligth-on' : ''}`} onClick={() => { setSeleccionado("bg-success") }}></div>
			</div>
      </div>
  )
}

export default Semaforo