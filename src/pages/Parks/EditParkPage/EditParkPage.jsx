import { Container } from "react-bootstrap"
import EditParkForm from "../../../components/ParkComponents/EditPark/EditParkForm"
import './EditPark.css'

const EditPark = () => {

    return (
        <div className="overlay-background  d-flex justify-content-center">
            <Container>
                <h1>Edit park</h1>
                <EditParkForm />
            </Container >
        </div >
    )

}

export default EditPark