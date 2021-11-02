// const status = (props)=>{
//     if(props.isUnseen){
//         return "Inédit"
//     } else if (props.direct){
//         return "Direct"
//     }

// }

const Content = (props) => {
  return (
    <div className="programme-item">
      <div className="left-side">
        <h3>{props.time}</h3>
        <img src={props.image} alt="programme screenshot" />
      </div>
      <div className="right-side">
        <div className="rs-top">
          {" "}
          <h2>{props.title}</h2>
          <p>{props.type}</p>
        </div>

        <div className="rs-bottom">
          <p>{props.duration}</p>
          <p className="status">{props.status}</p>
        </div>
      </div>
    </div>
  );
};

export default Content;
