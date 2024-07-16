import React, { useRef } from 'react'
import search from '../assets/search-icon.png'
import Modal from './Modal'
import { forwardRef } from 'react'
const Header = forwardRef(function Header({ onSubmit }, ref) {
    const dialog = useRef()
    function handleSubmit() {
        if (ref.current.value.trim() === '') {
            return dialog.current.open()
        }
        onSubmit()
    }
    return (
        <section>
            <h1 className="text-5xl text-stone-600 my-10 font-sans">
                Weather App
            </h1>
            <span className='flex gap-8 justify-center items-center'>

                <input type="text" className='bg-stone-50 rounded-2xl p-2 py-3 text-stone-700 w-1/3 placeholder:font-bold ' ref={ref} placeholder='Enter a city...' />
                <button className='bg-stone-50 rounded-full p-2 px-3' onClick={handleSubmit}>
                    <img src={search} alt="search icon" className='object-contain h-8 w-12' />
                </button>
            </span>
            <Modal ref={dialog}>
                <h2 className='text-blue-800 font-bold text-2xl mb-4'>Input field cannot be empty</h2>
                <h3 className='text-blue-800 font-semibold text-lg mb-4'>Please provide valid input</h3>
            </Modal>
        </section >

    )
})
export default Header