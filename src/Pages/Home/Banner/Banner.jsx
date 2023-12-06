import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Carousel } from 'react-responsive-carousel';
import sider1 from '../../../assets/home/01.jpg'
import sider2 from '../../../assets/home/02.jpg'
import sider3 from '../../../assets/home/03.png'
import sider4 from '../../../assets/home/04.jpg'
import sider5 from '../../../assets/home/05.png'
import sider6 from '../../../assets/home/06.png'

const Banner = () => {
    return (
        <Carousel>
        <div>
            <img src={sider1} />
           
        </div>
        <div>
            <img src={sider2} />
           
        </div>
        <div>
            <img src={sider3} />
           
        </div>
        <div>
            <img src={sider4} />
           
        </div>
        <div>
            <img src={sider5} />
           
        </div>
        <div>
            <img src={sider6} />
           
        </div>
    </Carousel>
    );
};

export default Banner;