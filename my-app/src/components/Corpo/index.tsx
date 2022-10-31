import { Figure } from "react-bootstrap";
import img_1 from '../../assets/img/Banner-home-corpo-1.png'
import img_2 from '../../assets/img/Banner-home-corpo-2.png'
import style from '../Corpo/Corpo.module.scss'


export default function Corpo(){
    return(
        
        <div className={style.corpo}>
            <div>
                <Figure className="m-0">
                    <Figure.Image className="m-0" src={img_1}/>

                    
                </Figure>
            </div>
            
          <div>
            <Figure className="m-0">
                <Figure.Image className="m-0" src={img_2}/>
            </Figure>
          </div>
        </div>
        
        
        

    );
}