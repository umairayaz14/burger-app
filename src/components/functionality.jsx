import './functionality.css';

const Functionality = (props) => {

  return (
    <div className="row">
      <div className="bg-color">
        <h2 className='m-1' >Current price: ${props.tprice}</h2>
        <h1> { props.ing.map((i, k) => <div><h4 key={k}> {i.name} ( ${i.price} ) </h4>
          <button onClick={() => props.buttonincrease(k)}  className='btn bt-color m-1'> Increase</button>
          <button onClick={() => props.buttondecrease(k)}  className='btn bt-color m-1'>  Decrease </button>
          </div>)
        } </h1>
      </div>
    </div>
  );
}

export default Functionality;
