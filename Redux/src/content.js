import './App.css';
import {useState} from "react";
import {useDispatch} from "react-redux";
import {update} from  "./redux/userSlice";

function Content(){
	const[name,setName]=useState("");
	
	const dispatch =useDispatch();
	
	const handleUpdate= (e) => {
		e.preventDefault();
		dispatch(update({name}));
	};
	
    return(
    		<div className="Content">
  			
  			<label>UserName </label><br></br>
  			
  			<input classname="userInput" type="text" placeholder="Type Something..." onChange={(e)=>setName(e.target.value )}/>
  			
  			<button className="Update" onClick={handleUpdate}  >Update</button>
  		</div>
     );
}

export default Content;
