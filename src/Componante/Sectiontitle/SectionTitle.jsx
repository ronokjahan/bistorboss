

const SectionTitle = ({heading,subheading}) => {
    return (
        <div className="md:w-3/12 mx-auto text-center my-8">
            <p className="text-yellow-600 mb-2">---{subheading}---</p>
            <h3 className="text-4xl uppercase border-y-4 border-b-orange-600 py-4">{heading}</h3>
        </div>
    );
};

export default SectionTitle;