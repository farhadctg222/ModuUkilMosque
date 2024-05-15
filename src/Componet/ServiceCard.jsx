

const ServiceCard = ({service}) => {
    const {id,name,time,icon,description} = service
    return (
        <div className="card w-[350px] m-auto h-[400px] bg-base-300  shadow-xl  mb-4">
        <figure className="px-10 pt-10">
          <img src={icon} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <h3>{time}</h3>
          <p>{description}</p>
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    );
};

export default ServiceCard;