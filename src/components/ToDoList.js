import React from 'react'
import ToDo from './ToDo'

const ToDoList = ({ todoData,checkToDo ,deleteToDo}) => {
    console.log("data passed", todoData)
    return (
        <div>
            {todoData.map((item) => (
                <ToDo data={item} key={item.id} checkToDo={checkToDo} deleteToDo={deleteToDo} />
            ))

            }


        </div>
    )
}

export default ToDoList
