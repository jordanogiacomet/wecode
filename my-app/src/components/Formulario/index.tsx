import { Button, Form } from "react-bootstrap"
import style from "../Formulario/Formulario.module.scss"
import icon_1 from "../../assets/icons/icon-footer-mail.svg"

export default function Formulario(){
    return(
        <div className={style.formulario}>
             <Form>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className={style.formLabel}>Newsletter</Form.Label>
                    <Form.Text className={style.formText}>Receba nossas novidades e ofertas atráves da nossa newsletter</Form.Text>
                    <div className={style.formSubmit}>
                        <Form.Control type="email" placeholder="Digite seu e-mail" className={style.formControl}/>
                        <Button variant="warning" type="submit" className={style.formBotao}><img src={icon_1}/></Button>
                    </div>

                </Form.Group>
     

             

             </Form>
        </div>
    )
}