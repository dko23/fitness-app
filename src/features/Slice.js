import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";
const initialState = [

  {
   
    id: nanoid(),
    week: "week 1",
        kg: 75,
    notes: "This week I consumed 2,0000 calories on average. It is a start",
   noteDate: '08/07/2023'
  },
  {
   
    id: nanoid(),
     week: "week2",
      kg: 72,
    notes: "This week I consumed 2500 calories on average. I also need to hit the gym more, run more on the treadmill maybe 45 mins. ",
   noteDate: '08/07/2023'
  },

  ];
  


  const progressSlice = createSlice({
    name: "progress",
    initialState,
    reducers: {
      addProgress: (state, action) => {
        state.push(action.payload);
      }, /// so the action defined here is the postAdded and the aciton.payload is the new data that we want to push in this case. So, in summary, the usage of action.payload depends on the specific requirements of each action and reducer. If an action does not need any additional data, you can omit the action.payload and simply dispatch the action without passing any arguments.


    editProgress: (state, action) => {
        return state.map((progress) =>
          progress.id === action.payload.id ? action.payload : progress
        ); // so the 'return' word produces a new array in this case. the payload is a reflection of the state.
      },


      deleteProgress: (state, action) => {
        return state.filter((progress) => progress.id !== action.payload);
      },

    
    }
})
export const selectAllProgress = (state) => state.progress;// we are creating the callback function(reference) used in the useSelector fucntion from the componnent in the case that the state from the slice changes and the state value is retrieved from the store.


export default progressSlice.reducer;
export const {
  addProgress,
  editProgress,
  deleteProgress,
  setProgressData,
} = progressSlice.actions;

