import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Card from './components/Card';
import Footer from './components/Footer';
import {Container, Row, Col} from 'react-bootstrap';

function Home() {
  return (
    <div>
        <Header
            title="Galeria de imagenes con React"
            subtitle="Febrero 2023" 
        />

        <Container>
            <Row>
                <Col>
                <Card
                    src="https://images.pexels.com/photos/3608263/pexels-photo-3608263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    title="Oso Panda"
                    comment="Disfrutando su comida"
                />
                </Col>
                <Col>
                <Card
                    src="https://images.pexels.com/photos/1181181/pexels-photo-1181181.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    title="Flamencos"
                    comment="Demostrando su amor"
                />
                </Col>
                <Col>
                <Card
                    src="https://images.pexels.com/photos/2313396/pexels-photo-2313396.jpeg?auto=compress&cs=tinysrgb&w=600"
                    title="Caballo"
                    comment="Gozando la nieve"
                />
                </Col>
                <Col>
                <Card
                    src="https://images.pexels.com/photos/1059823/pexels-photo-1059823.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    title="Loro"
                    comment="En su clima ideal"
                />
                </Col>
                <Col>
                <Card
                    src="https://images.pexels.com/photos/660266/pexels-photo-660266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    title="Patos"
                    comment="Nadando por la tarde"
                />
                </Col>
                <Col>
                <Card
                    src="https://images.pexels.com/photos/2255564/pexels-photo-2255564.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    title="Gatos"
                    comment="En las vías del tren"
                />
                </Col>
                <Col>
                <Card
                    src="https://images.pexels.com/photos/3162755/pexels-photo-3162755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    title="Monos"
                    comment="Cuidando su familia"
                />
                </Col>
                <Col>
                <Card
                    src="https://images.pexels.com/photos/5731788/pexels-photo-5731788.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    title="Perro"
                    comment="Nuevo estilo"
                />
                </Col>
            </Row>
        </Container>
        <Footer/>
    </div>
  );
}

export default Home;