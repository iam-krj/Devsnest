const Fart = (props) =>{

    return(
            <div className="fart">
            <h1 className="title">{props.title}</h1>
            <p className="calorie">It  consists of {props.calorie} calories.</p>
        </div>
    );
};

export default Fart;




