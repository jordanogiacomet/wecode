import { Col, Container, Figure, Row } from "react-bootstrap";
import img_1 from '../../assets/img/Banner-home-departamento-1.png'
import img_2 from '../../assets/img/Banner-home-departamento-2.png'
import img_3 from '../../assets/img/Banner-home-departamento-3.png'
import img_4 from '../../assets/img/Banner-home-departamento-4.png'
import img_5 from '../../assets/img/Banner-home-departamento-5.png'
import img_6 from '../../assets/img/Banner-home-departamento-6.png'
import style from '../Lista/Lista.module.scss'

export default function Lista(){
    return(
       <Container fluid className="mt-4 mb-4">
            <Row className="mb-1">
                <Col>
                        <Figure>   
                            <div className={style.item}>
                                <Figure.Image src={img_1}/>
                                <Figure.Caption className="position-absolute top-50 start-50 translate-middle text-white text-nowrap fs-6 fw-lighter">Departamento 1</Figure.Caption>
                            </div>
                        </Figure>
                    
                </Col>
                <Col>
                    <Figure>
                        <div className={style.item}>
                            <Figure.Image src={img_2}/>
                            <Figure.Caption className="position-absolute top-50 start-50 translate-middle text-white text-nowrap fs-6 fw-lighter">Departamento 2</Figure.Caption>
                        </div>
                    </Figure>
                </Col>
            </Row>
            <Row className="mb-4">
                <Col>
                         <div className={style.item}>
                            <Figure.Image src={img_3}/>
                            <Figure.Caption className="position-absolute top-50 start-50 translate-middle text-white text-nowrap fs-6 fw-lighter">Departamento 3</Figure.Caption>
                        </div>
                </Col>
                <Col>
                        <div className={style.item}>
                            <Figure.Image src={img_4}/>
                            <Figure.Caption className="position-absolute top-50 start-50 translate-middle text-white text-nowrap fs-6 fw-lighter">Departamento 4</Figure.Caption>
                        </div>
                </Col>
            </Row>
            <Row className="mb-4">
                <Col>
                        <div className={style.item}>
                            <Figure.Image src={img_5}/>
                            <Figure.Caption className="position-absolute top-50 start-50 translate-middle text-white text-nowrap fs-6 fw-lighter">Departamento 5</Figure.Caption>
                        </div>
                </Col>
                <Col>
                        <div className={style.item}>
                            <Figure.Image src={img_6}/>
                            <Figure.Caption className="position-absolute top-50 start-50 translate-middle text-white text-nowrap fs-6 fw-lighter">Departamento 6</Figure.Caption>
                        </div>
                </Col>
            </Row>
       </Container>
    );

}