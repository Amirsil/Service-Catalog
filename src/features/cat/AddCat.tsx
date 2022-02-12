import React, { useState } from 'react'
import { createCat } from '../../services/api/cat'
import { CatDTO } from '../../services/openapi'

type Props = {
    saveTodo: (e: React.FormEvent, formData: CatDTO) => void
}

const defaultTodo: CatDTO = {
    name: '',
    tailLength: 0
}

const handleChange = (e: React.FormEvent, formData: CatDTO, changeFunc: (formData: CatDTO) => Promise<void>) => {
    e.preventDefault();
    changeFunc(formData)
        .then(() => window.location.reload());

}

const AddTodo: React.FC<Props> = ({ saveTodo }) => {
    const [formData, setFormData] = useState<CatDTO>(defaultTodo)

    console.log(formData)
    const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
        setFormData({
            ...formData,
            [e.currentTarget.id]: e.currentTarget.value,
        })
    }

    return (
        <form className='Form' onSubmit={(e) => handleChange(e, formData, createCat)}>
            <div>
                <div>
                    <label htmlFor='name'>Name </label>
                    <br></br>
                    <input onChange={handleForm} type='text' id='name' />
                </div>
                <br></br>
                <div>
                    <label htmlFor='tailLength'>Tail Length </label>
                    <br></br>
                    <input onChange={handleForm} type='text' id='tailLength' />
                </div>
                <br></br>
            </div>
            <button disabled={formData === undefined ? true : false} >Add Todo</button>
        </form>
    )
}

export default AddTodo