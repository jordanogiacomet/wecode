import { Figure } from "react-bootstrap";
import icon_1 from "../../assets/icons/icon-footer-card.svg"
import icon_2 from "../../assets/icons/icon-footer-locker.svg"
import img_1 from "../../assets/icons/logo.svg"
import icon_3 from "../../assets/icons/icon-footer-instagram.svg"
import icon_4 from "../../assets/icons/icon-footer-twitter.svg"
import icon_5 from "../../assets/icons/icon-footer-facebook.svg"
import icon_6 from "../../assets/icons/icon-footer-selo.svg"
import icon_7 from "../../assets/icons/icon-footer-vtexbywecode.svg"
import icon_8 from "../../assets/icons/icon-footer-pix.svg"
import icon_9 from "../../assets/icons/icon-footer-box.svg"
import style from '../Footer/Footer.module.scss'
import Formulario from "../Formulario";
import Example from '../AccordionList'


export default function Footer(){
    return(
        <div className={style.footer}>
            <div className={style.icons}>
                <div className={style.iconCard}>
                    <Figure>
                        <Figure.Image src={icon_1} className={style.imgCard}/>
                        <Figure.Caption>Até 12x sem juros</Figure.Caption>
                    </Figure>
                </div>

                <div className={style.iconLocker}>
                    <Figure>
                        <Figure.Image src={icon_2} className={style.imgLocker}/>
                        <Figure.Caption>Compra 100% segura</Figure.Caption>
                    </Figure>  
                    
                </div> 


                <div className={style.iconPix}>
                    <Figure>
                        <Figure.Image src={icon_8} className={style.imgPix}/>
                        <Figure.Caption>5% de desconto no Pix</Figure.Caption>
                    </Figure>  
                    
                </div> 


                <div className={style.iconBox}>
                    <Figure>
                        <Figure.Image src={icon_9} className={style.imgBox}/>
                        <Figure.Caption>Produtos de alta qualidade</Figure.Caption>
                    </Figure>  
                    
                </div> 
            </div>

            <div className={style.logo}>
                 <div className={style.logoImg}>
                    <img src={img_1}/>
                </div>   

                <Formulario/>

                <div className={style.socialMediasIcons}>
                    <h2>Siga nossas redes sociais</h2>
                    <div className={style.iconsContainer}>
                        <img src={icon_3}/>
                        <img src={icon_4}/>
                        <img src={icon_5}/>
                    </div>

                </div>


                <div>
                    <Example/>
                </div>

                <div className={style.selosImg}>
                        <h3>Certificados & Selos</h3>
                        <div className={style.selosContainer}>
                            <img src={icon_6}/>
                    </div>

                </div>

            </div>

            <div className={style.infos}>
                    <img src={img_1}/>
                    <p>© 2021 wecode.digital - e-commerce technology. Todos os direitos reservados.
Rua Plácido de Castro, 1063 - Sala 403 - Exposição, Caxias do Sul - RS, 95084-370 Telefone: (54) 3028-9452</p>
            </div>

            <div className={style.imgVtex}>
                <img src={icon_7}/>
            </div>




        </div>
    );
}