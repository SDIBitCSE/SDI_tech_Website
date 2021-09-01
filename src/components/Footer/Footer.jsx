import React from 'react';
//npm imports
let today = new Date();
// //Date function related
function Foot(props){
    return(<footer className="footer bg-transparent"> <span id="date-section">

    <span id="footer-date">{today.getDate()}</span>
    <span id="footer-month">{`/${today.getMonth()+1}`}</span>
    
    <div className="socials" style={{float: "right",textAlign:"center",marginRight:"10%",marginTop: "0",paddingTop: "0"}}>
    <div className="insta"></div>
    <div className="twitter"></div>
    <div className="linkedin"></div>
    <div>{props.content}</div>
    </div>

</span></footer>)
}
//function 
export default Foot;

//exports
