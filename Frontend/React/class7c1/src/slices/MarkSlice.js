import { createSlice } from "@reduxjs/toolkit";

const MarkSlice = createSlice({
    name: "selections",
    initialState: {
        value: 10,
        name:"Jagmohan"
    },

    reducers: {
        changeSelectionCount: (state) => {
            state.value = 5
        },
        setDefatultSelectionAddCountByPayloadF: (state,actions) => {
            console.log("state",state)
            console.log("actions",actions)
            state.value = state.value+actions.payload
        }
    }

})

export const { changeSelectionCount,setDefatultSelectionAddCountByPayloadF } = MarkSlice.actions;
export default MarkSlice.reducer;