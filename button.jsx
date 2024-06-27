import React, { Component } from 'react';

class DetailsButton extends Component {
    state = {  } 
    render() { 
        const { onClose, buttonTitle, buttonContent, isOpen} = this.props;

        if(!isOpen) return null; //Wenn isOpen false, kein Fenster öffnen

        //Definieren des Buttons
        return (
            <div className='modal' onClick={onClose}>
                <div className='modal-dialog' onClick={(e) => e.stopPropagation()}>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h5 className='modal-title'>{buttonTitle}</h5>
                            <button type ="button" className='close' onClick={onClose}>
                                <span>&times;</span>
                            </button>
                        </div>
                        <div className='modal-body'>
                            <p>{buttonContent}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default DetailsButton;