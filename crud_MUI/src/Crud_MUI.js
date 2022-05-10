import * as React from 'react';
import { IconButton,CardActionArea,CardHeader,CardMedia,Typography,CardContent,CardActions,Card, Grid, TextField, FormControl,MenuItem,Select,InputLabel, Button} from '@mui/material';

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


function Crud_MUI(){
	const [counter, setCounter] = React.useState(1);
	
	const [name,setName]=React.useState("");
	const [type,setType]=React.useState("");
	const [details,setDetails]=React.useState("");
	
	const[card,setCard]=React.useState([]);
	const[status,setStatus]=React.useState("add");
	const[id,setId]=React.useState("");
	
	 const handleChange = (event) => {
	 	
    		setType(event.target.value);
  		};
	
	
	const createCard=() =>{
	     if(status=="add"){
		let newCard={
			id:counter,
			name,type,details
		}
		setCounter(counter + 1);
		setCard([...card,newCard]);
	 }
	 else if(status=="edit"){
	 	let editedCardUpdate=card.filter(item=>item.id!=id)
	 	let editedCard={id,name,type,details}
	 	setCard([...editedCardUpdate,editedCard]);
	 }
	 setName("");
	 setType("");
	 setDetails("");
	 setStatus("add");
		
	}
	const deleteCard=(id) =>{
		let removeCard = card.filter(item => item.id != id);
		setCard(removeCard);
	}
	const editCard=(id) =>{
		let editCard = card.filter(item => item.id == id)
		setName(editCard[0].name);
		setType(editCard[0].type);
		setDetails(editCard[0].details);
		setId(editCard[0].id);
		setStatus("edit");
	}
	return(
	 
	<div className="Layout">
		 <Grid container Spacing={1} sx={{bgcolor:"#ded5de",}} >
		 	
        		<Grid item xs={12} sx={{bgcolor:"#ded5de",p:2,}}>
        		 
        		<FormControl  sx={{ width:"100%", height:"100%", }}>
          			
          			<div>
          			<TextField sx={{ml:1, mt:2, width:"70%", }}
          			required  
          			value={name}
          			label="Product Name" variant="filled" 					onChange={(e)=>setName(e.target.value)} />
          			</div>
          			
          			<div>
          			<FormControl variant="filled" sx={{ml:1, mt:2, width:"70%", height:"10%",}}>
          			 <InputLabel 
          			 required id="VType">VehicleType</InputLabel>
          			 <Select
					  id="Type"
					  labelId="VType"
					  label="VehicleType"
					  value={type}
					  onChange={handleChange}
				>
				  <MenuItem value="Car">Car</MenuItem>
				  <MenuItem value="Bike">Bike</MenuItem>
				</Select>
				</FormControl>
				</div>
          			
          			
          			<div>
          			<TextField sx={{ml:1, mt:2, width:"70%", }}
					  required
					  value={details}
					  label="Product Description"
					  multiline
					  rows={4}
					  defaultValue="Write About Product..."
					  variant="filled"
					  onChange={(e)=>setDetails(e.target.value)}
				/>
          			</div>
          			<div>
        				<Button sx={{p:2,mt:2, ml:1, width:"70%", }} 
        				variant="contained"
        				onClick={() => createCard() }>
        				SAVE
        				</Button>
        			</div>
          			
        		</FormControl>
        			
        		</Grid>
        		 
        		 
        		<Grid container rowSpacing={1} columnSpacing={1} sx={{bgcolor:"#ded5de", }}>
          			
          			{
				 card &&card.map(eachDetails =>{
				    return(
          				   <Card sx={{  maxWidth: 300,ml:5, }}>	 
          					 <CardMedia
							component="img"
							height="140"
							image="captainAmerica.jpg"
							alt="captainAmerica"
						   />
						   <CardContent>
							<Typography sx={{ color:"#040121",}}  
							gutterBottom variant="h2" >
							  {eachDetails.name}
							</Typography>
							<Typography gutterBottom variant="h4" component="div">
							 Product Type : {eachDetails.type}
							</Typography>
							<Typography gutterBottom variant="p" component="div">
							 Product Details : {eachDetails.details}
							</Typography>
						    </CardContent>
						    <CardActions>
							 <IconButton aria-label="edit">
							  	<EditIcon 
							  		onClick={()=>editCard(eachDetails.id)}
							  	/>
						  	</IconButton>
						  	 <IconButton aria-label="delete">
							  	<DeleteIcon 
							  		onClick={()=>deleteCard(eachDetails.id)}
							  	/>
							   </IconButton>
						    </CardActions>
						    
						    
          				   </Card>	 			
				    )
				 })
				}
          			
        		</Grid>
      		</Grid>
	</div>
	
	);
}

export default Crud_MUI;
