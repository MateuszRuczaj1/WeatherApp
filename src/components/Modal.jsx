import React from 'react'
import { createPortal } from 'react-dom'
import { forwardRef, useRef, useImperativeHandle } from 'react'
const Modal = forwardRef(function Modal({ children }, ref) {
    const dialog = useRef()
    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal()
            }
        }
    }
    )
    return createPortal(
        <dialog ref={dialog} className='backdrop:bg-stone-900/90 p-10 bg-blue-400 rounded-md shadow-md'>
            {children}
            <form action="" method='dialog' className='mt-4 text-right'>
                <button className='bg-red-600 rounded-md p-2 px-4 text-stone-50 font-semibold '>Close</button>
            </form>
        </dialog>,
        document.querySelector('#modal')
    )
})
export default Modal
