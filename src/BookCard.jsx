

const BookCard = ({book}) => {
    const {id,author,title,description,price} = book
   
    return (
        
            <div className="card m-auto bg-[#FDEB71] w-96 glass">
  <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="car!"/></figure>
  <div className="card-body text-justify">
    <h2 className="card-title">Book:{title}</h2>
    <p>author : {author}</p>
    <p>Price: {price}</p>
    <p>{description}</p>
    <div className="card-actions justify-start">
      <button className="btn btn-secondary ">Book</button>
    </div>
  </div>
</div>
            
       
    );
};

export default BookCard;