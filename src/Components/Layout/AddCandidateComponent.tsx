import React from "react";
import { Modal } from "react-bootstrap";
import { Button} from "react-bootstrap";
class AddCandidateComponent extends React.Component
{
    render()
    {
    
        return(
            <>
                <Modal

                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    show={false}>
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                        Add Candidate
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        
                       
                    </Modal.Body>
                    <Modal.Footer>
                         
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}
export default AddCandidateComponent;