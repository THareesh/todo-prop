import React from 'react'

const ListItems = (props) => {
    return (
        <div className="container">
            <ul className="list-group mt-3" >
                <li className="list-group-item">
                    {props.index}
                    {props.value}
                    <button className="btn btn-primary mx-2" onClick={() => props.delteButton(props.index)}>Delete</button>
                    <button className="btn btn-success px-4" onClick={() => props.editButton(props.index, props.value)}>edit</button>
                </li>
            </ul>
        </div>
    )
}
export default ListItems