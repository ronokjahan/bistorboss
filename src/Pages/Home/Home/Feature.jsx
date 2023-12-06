import SectionTitle from "../../../Componante/Sectiontitle/SectionTitle";
import feture from '../../../assets/home/featured.jpg'
import './Feature.css'

const Feature = () => {
    return (
        <div className="feture-items bg-fixed text-white ">
            <SectionTitle 
            subheading={'---Check it out---'}
            heading={'FROM OUR MENU'}
            >

            </SectionTitle>
            <div className="md:flex justify-center items-center  px-20 py-36">
                <div>
                    <img src={feture} alt="" />
                </div>
                <div className="md:ml-8">
                    <h3>March 20, 2023</h3>
                    <p className="uppercase">WHERE CAN I GET SOME?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla vitae odit repudiandae assumenda architecto error nostrum. Aliquid quidem in nostrum? Ipsa soluta itaque illo reprehenderit veritatis nesciunt minus, amet, optio iusto nisi quasi adipisci molestiae sit, ex voluptate expedita qui?</p>
                    <button className="btn btn-outline btn-info  border-0 border-b-4  ">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Feature;