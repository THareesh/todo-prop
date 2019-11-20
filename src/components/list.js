import React from 'react'
import ListItems from './listItems'


const List = (props) => {
    console.log(props)
    return (
        <div>
            {
                props.TodoList.map((val, i) => (
                    <ListItems
                        value={val} index={i} key={i} 
                        delteButton={props.delteButton}
                        editButton={props.editButton}
                    />
                ))


            }

        </div>
    )
}

export default List
