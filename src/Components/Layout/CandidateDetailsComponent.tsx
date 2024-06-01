import React from "react";
import { Modal } from "react-bootstrap";

interface ICandidateDetailsProps
{
    
}

interface ICandidateDetailsState
{
    show:boolean;
}

class CandidateDetailsComponent extends React.Component<ICandidateDetailsProps,ICandidateDetailsState>
{   
    constructor(props:ICandidateDetailsProps)
    {
        super(props)
        this.state={
            show:true
        }
    }
    
    render()
    {
        return(
            <>
               <Modal
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    show={this.state.show}
                    >
                    <Modal.Header>
                        <Modal.Title id="contained-modal-title-vcenter">
                        
                    
                        </Modal.Title>
                        <button type="button" className="btn-close float-end" aria-label="Close" ></button>
                    </Modal.Header>
                    <Modal.Body>
                                    <div>
                                    
                                    </div>
                    </Modal.Body>
                    <Modal.Footer>
                      
                    </Modal.Footer>
                </Modal> 
            </>
        )

    }
}
export default CandidateDetailsComponent