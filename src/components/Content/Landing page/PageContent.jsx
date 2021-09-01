import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import $ from 'jquery';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import {Link} from "react-router-dom";



function PageContent() {
   function handleClickDown()
    {$(".combine").slideUp(1000);
    setTimeout(() => {setContent(<Container className="becomeMember">
    <KeyboardArrowUpIcon className="arrow-up svg_icons" onClick={handleClickUp} fontSize="large"/>
    <div className="wrap"><h1 class="title2 title">Become a member.</h1></div><Button 
    variant="outline-light" 
    className="register" 
    size="lg"
    onClick={handleClickRegister}><Link to='/register'><img src={"img/group1.png"} alt="SDIlogo"></img></Link></Button></Container>)},900);
    }

    function handleClickRegister(req){
    
    }

    function handleClickUp(){
        $(".becomeMember").slideUp(1000);
        setTimeout(() => {setContent(<div>
            <div className="inline">
            <div className="combine"> 
            <div className="wrap">
            <h1 className="title title1">Student Developers Initiative.</h1>
            </div>
            <div className="sub">
            <h2>&lt;We dream tech /&gt;</h2>
            </div>

        </div>
        </div>
        <ArrowDropDownIcon className="arrow-down svg_icons" onClick={handleClickDown} fontSize="large"/>
       
        </div>
        
        );},900)
        
    }

    const [content, setContent] = useState(<div>
    <div className="inline">
    <div className="combine"> 
    <div className="wrap">
    <h1 className="title title1">Student Developers Initiative.</h1>
    </div>
    <div className="sub">
    <h2>&lt;We dream tech /&gt;</h2>
    </div>

</div>
</div>
<div style={{paddingTop:"rem"}}>
<ArrowDropDownIcon className="arrow-down svg_icons" onClick={handleClickDown} fontSize="large"/>
</div>
</div>)
     
 return(content);
}
export default PageContent;
