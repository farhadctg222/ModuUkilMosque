

const PhilospyCard = ({philospy}) => {
   
    const {name,ima,description,content}= philospy

    return (
        <div className="card w-[350px] h-[350px] m-auto rounded-none  mb-10  bg-[#38758d] shadow-xl ">
        <figure className="px-10 pt-10">
          <img src={ima} alt="Shoes" className=" lg:w-30 md:w-30 w-[100px]" />
        </figure>
        <div className="card-body items-center text-center">
          <h1 className="card-title lg:text-5xl md:text-3xl sm:text-2xl text-amber-400">{name}</h1>
          <p className="text-justify text-white">{description}</p>
          <div className="card-actions">
            
          </div>
        </div>
      </div>
    );
};

export default PhilospyCard;