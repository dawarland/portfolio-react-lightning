import React from "react";

const RecordModal = ({showModal, children, closeModal}) => {
    return (
        showModal && (
            <div className="modal">
                <div className="slds-modal__container" >
                    {children}
                </div>
            </div>
        )

    )
}

export default RecordModal;
