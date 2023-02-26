import {Container,Button} from "react-bootstrap"
import './footer.css'


const Footer = props => {
    return (
        <Container className='footer justify-content text-center'>
            <h1>Todos los derechos reservados</h1>
            <Button className='primary'>Siguenos aca</Button>
        </Container>
    )
}

export default Footer