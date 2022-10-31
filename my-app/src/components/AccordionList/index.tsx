import { useContext } from "react";
import { Accordion, AccordionContext, Card, useAccordionButton } from "react-bootstrap";
import plusIcon from '../../assets/icons/plus.svg'
import minusIcon from '../../assets/icons/minus.svg'
import style from '../AccordionList/AcordionList.module.scss'

function ContextAwareToggle({children, eventKey, callback} : {children?:React.ReactNode, eventKey: string, callback?:Function}){
    const{activeEventKey} = useContext(AccordionContext)

    const decoratedOnClick = useAccordionButton(eventKey, ()=>callback && callback(eventKey),)

    const isCurrentEventKey = activeEventKey === eventKey;

    return (
      <div className={style.itens}>
           <p style={{textDecoration: isCurrentEventKey? 'underline' : '', margin:'0'}}>
                {children}
          </p>
        <button className={style.botao}
          type="button"
          
          onClick={decoratedOnClick}
        >

        {isCurrentEventKey? "-":"+"}
          
        </button>
      </div>
     
      );


}




export default function Example() {
    return (
      <div className={style.lista}>
        <Accordion defaultActiveKey="0" >
          <Card className="bg-dark border-0">
            <Card.Header className="border-0">
                <ContextAwareToggle eventKey="0" children='Sobre Nós'></ContextAwareToggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body className="text-white bg-dark"><ul><li>Quem Somos Nós</li><li>Nosso Grupo</li></ul></Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card className="bg-dark border-0">
            <Card.Header className="border-0">
              <ContextAwareToggle eventKey="1" children="Minha Conta"></ContextAwareToggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body className="text-white bg-dark"><ul><li>Meu Perfil</li><li>Meus Pedidos</li></ul></Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card className="bg-dark border-0">
            <Card.Header className="border-0">
              <ContextAwareToggle eventKey="2" children="Políticas"></ContextAwareToggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
              <Card.Body className="text-white bg-dark"><ul><li>Políticas de trocas e devolução</li><li>Políticas de Privacidade</li><li>Termos de Uso</li></ul></Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card className="bg-dark border-0">
            <Card.Header className="border-0">
              <ContextAwareToggle eventKey="3" children="Contato"></ContextAwareToggle>
            </Card.Header>
            <Accordion.Collapse eventKey="3">
              <Card.Body className="text-white bg-dark"><ul><li> Tel: (54) 3028-9452</li><li>Rua Plácido de Castro, 1063 - Sala - 403 - Exposição, Caxias do Sul- RS, 95084-370</li></ul></Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>

      
      
  
    );
  }