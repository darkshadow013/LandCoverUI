import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            animation={false}
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter" style={{fontWeight: "700", fontFamily: "Roboto"}}>
                    {props.imageTitle}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{margin: "auto"}}>
                <img src={props.imageSrc} alt={props.imageTitle}/>
            </Modal.Body>
            <Modal.Footer>
                <Button style={{backgroundColor: "blue"}} onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

function Results(props) {
    const [modalShow, setModalShow] = React.useState(false);
    const [imageTitle, setImageTitle] = React.useState("");
    const [imageSrc, setImageSrc] = React.useState("");
    return (
        <>
            <p style={{ marginTop: "50px", fontSize: "larger" }}>(Click on Image to Preview)</p>
            <div style={{ margin: "5px auto" }}>
                <div style={{ width: "max-content" }}>
                    <div style={{ display: "flex" }}>
                        <div className="jumbotron" style={{ marginRight: "10px", height: "max-content", padding: "2rem 1rem" }}>
                            <h3 className="jumbotron-heading">CNN Model Plot</h3>
                            <img alt="CNN model" src="train.png" style={{ width: "394px", height: "394px" }} onClick={() => {
                                setModalShow(true);
                                setImageTitle("CNN Model Plot");
                                setImageSrc("train.png");
                            } }/>
                        </div>
                        <div className="jumbotron" style={{ marginRight: "10px", height: "max-content", padding: "2rem 1rem" }}>
                            <h3 className="jumbotron-heading">Ground Truth</h3>
                            <img alt="Ground Truth" src="GT.png" onClick={() => {
                                setModalShow(true);
                                setImageTitle("Ground Truth");
                                setImageSrc("GT.png");
                            } }/>

                        </div>
                        <div className="jumbotron" style={{ height: "max-content", padding: "2rem 1rem" }}>
                            <h3 className="jumbotron-heading">Dissimilarity Image(GT - Hybrid)</h3>
                            <img alt="Dissimilarity" src="Dissimilarity.png" onClick={() => {
                                setModalShow(true);
                                setImageTitle("Dissimilarity Image(GT - Hybrid)");
                                setImageSrc("Dissimilarity.png");
                            } }/>
                        </div>
                    </div>
                    <div style={{ display: "flex" }}>
                        <div className="jumbotron" style={{ marginRight: "10px", height: "max-content", padding: "2rem 1rem" }}>
                            <h3 className="jumbotron-heading">Predicted Image(CNN)</h3>
                            <img alt="Predicted CNN" src="cnn.png" onClick={() => {
                                setModalShow(true);
                                setImageTitle("Predicted Image(CNN)");
                                setImageSrc("cnn.png");
                            } }/>
                        </div>
                        <div className="jumbotron" style={{ marginRight: "10px", height: "max-content", padding: "2rem 1rem" }}>
                            <h3 className="jumbotron-heading">Predicted Image(SVM)</h3>
                            <img alt="Predicted SVM" src="svm.png" onClick={() => {
                                setModalShow(true);
                                setImageTitle("Predicted Image(SVM)");
                                setImageSrc("svm.png");
                            } }/>
                        </div>
                        <div className="jumbotron" style={{ height: "max-content", padding: "2rem 1rem" }}>
                            <h3 className="jumbotron-heading">Predicted Image(CNN - SVM)</h3>
                            <img alt="Predicted CNN-SVM" src="Predicted.png" onClick={() => {
                                setModalShow(true);
                                setImageTitle("Predicted CNN-SVM");
                                setImageSrc("Predicted.png");
                            } }/>
                        </div>
                    </div>
                </div>

            </div>
            <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        imageTitle={imageTitle}
        imageSrc={imageSrc}
      />
        </>
    );
}
export default Results;