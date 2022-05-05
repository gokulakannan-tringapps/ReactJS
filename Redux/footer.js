import './App.css';
import {useSelector} from "react-redux";
function Footer(){

	const name=useSelector((state)=>state.user.userName);
    return(
    		<div className="footer_section">
  			
  			<footer>
  				<span className="footer_user">{name}</span>
  			</footer>
  		</div>
     );
}

export default Footer;
