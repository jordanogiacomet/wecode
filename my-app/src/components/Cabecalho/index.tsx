import React from 'react';
import imgLogo from '../../assets/icons/logo.svg'
import carrinhoIcon from '../../assets/icons/icon-header-carrinho.svg'
import searchIcon from '../../assets/icons/icon-header-search.svg'
import style from "../Cabecalho/Cabecalho.module.scss"
import { Button, Container, Navbar, NavbarBrand, Offcanvas} from 'react-bootstrap';


export default function Cabecalho(){

    return (
        <header className={style.cabecalho}>
  


        {["sm"].map((expand) => (
          <Navbar key = {''} bg="dark" variant="dark" expand={expand} className="mb-0 p-2 w-100">
            <Container fluid='sm m-1 p-0'>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`}/>
              <Navbar.Offcanvas
                
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="start"
                responsive='sm'
              >
              </Navbar.Offcanvas>

              <NavbarBrand className={style.logo}href="#home"><img src={imgLogo} alt="Logo"></img></NavbarBrand>
              
              <div className={style.botoesCabecalho}>
                    <Button variant='dark' className='p-1'><img src={searchIcon} alt="Pesquisa"/></Button>
                    <Button variant='dark' className='p-1'><img src={carrinhoIcon} alt="Carrinho"/></Button>
              </div>




            </Container>
          </Navbar>
        ))}
       
      </header>
    )
}