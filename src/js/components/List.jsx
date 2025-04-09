import React, { useEffect, useState } from "react";


export const ToDoList = () => {

    const [list, setList] = useState([])
    const [task, setTask] = useState('')
    const randomId = () => Math.floor(Math.random() * 99999)
    const [hideDelete, setHideDelete] = useState(true);



    const handleSubmit = e => {
        e.preventDefault();
        setList([...list, { label: task, id: randomId }])
        setTask('')
    }

    const handleDelete = (id) => {
        let aux = list.filter(el => el.id != id)
        setList(aux)
    }


    return (
        <div>

            <div className="container d-flex justify-content-center">

                <form onSubmit={handleSubmit}>
                    <div className="card rounded-0 border-info border-5 card-css">


                        <ul className="list-group list-group-flush">
                            <div className="imput-div d-flex">
                                <input type="text" value={task} onChange={e => setTask(e.target.value)} placeholder="Type your task here" className="list-group-item w-100 border-top-0 border-end-0 border-start-0 fs-4 ps-4 bg-info bg-opacity-10 border border-info border-start-0" />
                                <input type="submit" value="add" hidden />
                            </div>
                            <div >

                                <div>

                                    <ul>

                                        {list.length > 0 ? list.map(el =>

                                            <li className="list-group-item d-flex justify-content-between border-0 py-2 ps-2 fs-5" key={el.id} onMouseEnter={() => setHideDelete(false)} onMouseLeave={() => setHideDelete(true)}> {el.label}

                                                {hideDelete ? null : <i onClick={e => handleDelete(el.id)} className="fa-solid fa-circle-minus fs-4" ></i>}

                                            </li>) : <li className="list-group-item d-flex justify-content-between border-0 py-2 ps-2 fs-5 text-info"> List empty, add a new task! </li>}
                                    </ul>

                                </div>

                            </div>
                            <li className="list-group-item border-info border-top fs-"> {list.length} {list.length ? 'tasks' : 'task'} listed</li>

                        </ul>
                    </div>

                </form>

            </div>

        </div>

    )




}