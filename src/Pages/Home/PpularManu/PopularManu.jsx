
import SectionTitle from "../../../Componante/Sectiontitle/SectionTitle";
import ManuItems from "../../Sgared/ManuItems";
import ManuHook from "../../../Componante/Hook/ManuHook";



const PopularManu = () => {
    const [manus]=ManuHook()
    const popular=manus.filter(items =>items.category ==='popular')

    // const [menus,setmanus]=useState([])
    // useEffect(()=>{
    //     fetch('menu.json')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         const populers=data.filter(items=>items.category ==='popular')
            
    //         setmanus(populers)})
    // },[])
    return (
        <section className="mb-12">
            <SectionTitle 
           subheading='---Check it out---'
           heading='FROM OUR MENU'
            >

            </SectionTitle>
            <div className="grid md:grid-cols-2 gap-4">
                {
                    popular.map(item =><ManuItems
                    key={item._id}
                    item={item}
                    
                    >


                    </ManuItems>)
                }


            </div>
            
        </section>
    );
};

export default PopularManu;