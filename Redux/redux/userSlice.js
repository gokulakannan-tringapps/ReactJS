import {createSlice} from "@reduxjs/toolkit";

export const userSlice= createSlice ({
	name:"user",
	initialState:{
		userName:"the_superOne",
		sidebar1:"Pulsar 220",
		sidebar2:"Duke 200",
		sidebar3:"FZ-S 150",
		sidebar4:"RX - 100",
	},
	reducers:{
		update:(state,action) => {
			state.userName=action.payload.name;
			},
		},
	}
	);

export const{update} =userSlice.actions;
export default userSlice.reducer; 
