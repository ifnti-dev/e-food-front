import { ReactNode } from "react";
import './modal.css';
//import styled from "https://cdn.skypack.dev/styled-components@5.3.9";
//imp
type modalProps = {
    isOpen: boolean, 
    children: ReactNode
}; 

function Modal({ isOpen, children } : modalProps) {    
    return (
        <>
        {isOpen && (
            <div className="modal-background">
                {children}
            </div>
        )}
        </>
    )
}
export default Modal;