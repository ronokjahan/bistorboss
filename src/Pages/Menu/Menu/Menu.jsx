import { Helmet } from "react-helmet";

import ManuHook from "../../../Componante/Hook/ManuHook";
import SectionTitle from "../../../Componante/Sectiontitle/SectionTitle";
import desert from "../../../assets/menu/dessert-bg.jpeg"
import Cover from "../../Sgared/Cover/Cover";
import manuimgs from '../../../assets/menu/menu-bg.png'
import ManuCatagory from "../../Home/Banner/Catagory/ManuCatagory/ManuCatagory";



const Menu = () => {
  const [menus] = ManuHook()
 
  const desserts = menus.filter(itemss =>itemss.category ==='dessert')
  

  const salad = menus.filter(itemss => itemss.category === 'salad')
  const pizza = menus.filter(itemss => itemss.category === 'pizza')
  const soup = menus.filter(itemss => itemss.category === ' soup')
  const offereds = menus.filter(itemss => itemss.category === ' offered')
  
  return (
    <div>
      <Helmet>
        <title>Bistor Boss | Menu</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <Cover
                img={manuimgs}
                title="Our manu"

            ></Cover>
      <SectionTitle
        subheading="---Don't miss---"
        heading="TODAY'S OFFER"
      >

      </SectionTitle>
      <ManuCatagory 
      items={desserts}
      img={desert}
      
      ></ManuCatagory>
      {/* salad------------- */}
      <ManuCatagory items={salad} ></ManuCatagory>
      {/* pizza--------------- */}
      <ManuCatagory items={pizza}
      title="pizza"
      ></ManuCatagory>
      {/* soup---------------- */}
      <ManuCatagory items={soup}
      title="soup"
      
      ></ManuCatagory>


    </div>
  );
};

export default Menu;