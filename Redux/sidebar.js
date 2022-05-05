import './App.css';
import {useSelector} from "react-redux";

function Sidebar(){
		const sidebar_1=useSelector((state)=>state.user.sidebar1);
		const sidebar_2=useSelector((state)=>state.user.sidebar2);
		const sidebar_3=useSelector((state)=>state.user.sidebar3);
		const sidebar_4=useSelector((state)=>state.user.sidebar4);
    return(
    		<div className="Sidebar">
  			<span className="sidebar_1">{sidebar_1}</span>
  			<br></br>
  			<br></br>
  			<span className="sidebar_2">{sidebar_2}</span>
  			<br></br>
  			<br></br>
  			<span className="sidebar_3">{sidebar_3}</span>
  			<br></br>
  			<br></br>
  			<span className="sidebar_4">{sidebar_4}</span>
  		</div>
     )
}

export default Sidebar;
