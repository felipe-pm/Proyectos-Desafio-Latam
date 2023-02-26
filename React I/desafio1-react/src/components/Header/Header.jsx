import {Navbar,Container } from 'react-bootstrap'


const Header = props =>{
    const {title,subtitle} = props
    return (
        <Navbar>
          <Container>
            <Navbar.Brand href="#home"><h2>{title}</h2></Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                {subtitle}
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}

export default Header