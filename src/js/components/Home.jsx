import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [list, setList] = useState([]);
	const [tarea, setTarea] = useState('');

	const nuevaTarea = (e) => {
		if (e.key === "Enter" && tarea.trim() !== "") {
			setList([...list, tarea]);
			setTarea('');
		}
	}
	function eliminar(idEliminar) {
		let filtroDelist = list.filter((_, index) => index !== idEliminar);
		setList(filtroDelist);
	}

	return (
		<div className="container w-50 p-3">
			<h1 className="text-center">Todos</h1>
			<ul className="list-group">
				<li className="list-group-item px-5">
					<input
						className="border-0 my-1 fs-3 text-secondary"
						type="text"
						onChange={(e) => setTarea(e.target.value)}
						onKeyDown={nuevaTarea}
						placeholder="What need to be done?" />
				</li>


				{list.map((item, id) => (
					<li className="list-group-item d-flex justify-content-between list-group-item-action px-5" key={id}>
						<p className="fs-3 text-secondary my-auto">{item}</p>
						<button type="button" class="btn-close my-auto" aria-label="Close" onClick={() => eliminar(id)}></button>
					</li>
				))}

				<li className="list-group-item">
					<small class="text-body-secondary">{list.length} item left</small>
					
				</li>
			</ul>
		</div >
	);
};

export default Home;