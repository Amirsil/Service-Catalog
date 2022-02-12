import React, { useState } from 'react'
import { UserDTO } from '../../services/openapi'

type Props = {
    saveTodo: (e: React.FormEvent, formData: UserDTO) => void
}

const defaultTodo: any = {
    name: '',
    catNames: ' '
}
const AddTodo: React.FC<Props> = ({ saveTodo }) => {
    const [formData, setFormData] = useState<UserDTO>(defaultTodo)
    const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
        setFormData({
            ...formData,
            [e.currentTarget.id]: e.currentTarget.value,
        })
    }

    return (
        <form className='Form' onSubmit={(e) => saveTodo(e, formData)}>
            <div>
                <div>
                    <label htmlFor='name'>Name </label>
                    <br></br>
                    <input onChange={handleForm} type='text' id='name' />
                </div>
                <br></br>
                <div>
                    <label htmlFor='cats'>Cat Names (Seperate by spaces) </label>
                    <br></br>
                    <input onChange={handleForm} type='text' id='cats' />
                </div>
                <br></br>
            </div>
            <button disabled={formData === undefined ? true : false} >Add Todo</button>
        </form>
    )
}

export default AddTodo