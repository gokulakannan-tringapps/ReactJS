import './App.css';
import {useSelector} from "react-redux";	


function Header(){
	const name=useSelector((state)=>state.user.userName); 
    return(
    		<div className="header_section">
  			
  			<header>
  				<span className="header_user">{name}</span>
  				
  			</header>
  		</div>
     );
}

export default Header;
