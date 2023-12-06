import { Link } from "react-router-dom";
import Cover from "../../../../Sgared/Cover/Cover";
import ManuItems from "../../../../Sgared/ManuItems";


const ManuCatagory = ({ items, title, img }) => {
    return (
        <div>
           { title &&  <Cover
                img={img}
                title="Our manu"

            ></Cover>}
            <div className="grid md:grid-cols-2 gap-4">


                {
                    items.map(item => <ManuItems
                        key={item._id}
                        item={item}

                    >


                    </ManuItems>)
                }


            </div>
            <Link to={`/order/${title}`}><button className="btn btn-outline btn-info  border-0 border-b-4  ">Order Now</button></Link>
        </div>

    );
};

export default ManuCatagory;