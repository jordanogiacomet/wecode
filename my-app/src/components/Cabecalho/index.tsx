import React, { useState } from 'react';
import imgLogo from '../../assets/icons/logo.svg'
import carrinhoIcon from '../../assets/icons/icon-header-carrinho.svg'
import searchIcon from '../../assets/icons/icon-header-search.svg'
import imgMenu from '../../assets/icons/icon-header-menu.svg'
import usuarioImg from '../../assets/icons/icon-user.svg'
import style from "../Cabecalho/Cabecalho.module.scss"
import { Button, Container, Figure, Navbar, NavbarBrand, Offcanvas} from 'react-bootstrap';



function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      
      <div className={style.offCanvasContainer}>
      <Button onClick={handleShow} className={style.botao}>
        <img src={imgMenu}/>
      </Button>


      <div className={style.offCanvasHeader}>
        <Offcanvas show={show} onHide={handleClose} backdrop="static" responsive='sm'>
          <Offcanvas.Header closeButton className={style.cabecalhoCanvas}>
              <Figure>
                  <Figure.Image src={usuarioImg}/>
              </Figure>
            <Offcanvas.Title>Olá, Usuário</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
           
              <h4 className={style.item}>Departamento 1</h4>
      
    
              <h4>Departamento 2</h4>
   
         
              <h4>Departamento 3</h4>
  
              <h4>Departamento 4</h4>
       
      
              <h4>Departamento 5</h4>
    
       
              <h4>Departamento 6</h4>
   
          </Offcanvas.Body>
        </Offcanvas>
      </div>
      </div>
      
      
    </>
  );
}

export default function Cabecalho(){

    return (
        <header className={style.cabecalho}>
  

        
          <Navbar key = {''} bg="dark" variant="dark"  className="mb-0 p-2 w-100">
            <Container fluid='sm m-1 p-0'>
            <Example/>


              <NavbarBrand className={style.logo}href="#home"><img src={imgLogo} alt="Logo"></img></NavbarBrand>
              
              <div className={style.botoesCabecalho}>
                    <Button variant='dark' className='p-1'><img src={searchIcon} alt="Pesquisa"/></Button>
                    <Button variant='dark' className='p-1'><img src={carrinhoIcon} alt="Carrinho"/></Button>
              </div>




            </Container>
          </Navbar>
        
       
      </header>
    )
}