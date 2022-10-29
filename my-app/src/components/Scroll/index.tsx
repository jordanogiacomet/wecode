import {Col, Figure, Row } from "react-bootstrap";
import img_1 from '../../assets/img/Imagem-home-produto-1.png';
import img_2 from '../../assets/img/Imagem-home-produto-2.png';
import img_3 from '../../assets/img/Imagem-home-produto-3.png';
import style from '../Scroll/Scroll.module.scss'

export default function Scroll(){
    return(

        <Row >
                <div className={style.cardArea}>
                    
                    
                        <Figure className={style.cardItem}>
                           
                                <Figure.Image src={img_1} className={style.cardImg}/>
                                <Figure.Caption>Produto 1</Figure.Caption>
                           
                           
                        </Figure>
                    
                        
                    
                        <Figure className={style.cardItem}>
                            
                                <Figure.Image src={img_2}/>
                                <Figure.Caption>Produto 2</Figure.Caption>
                       
                   </Figure>
                        
                        
                    
                    
                        
                            <Figure className={style.cardItem}>
                           
                                <Figure.Image src={img_3}/>
                                <Figure.Caption>Produto 3</Figure.Caption>
                       
                  
                             </Figure>
                        
                    
                        

            </div>
         </Row>
    );
}