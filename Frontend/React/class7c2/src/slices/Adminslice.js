import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
    name: "admin",
    initialState: {
        phone: 7999733778,
        name: "Aviraj",
        email: "aviraj@gmail.com",
        image: "https://media.licdn.com/dms/image/v2/D4D35AQH1ZjEvxRhDPA/profile-framedphoto-shrink_400_400/B4DZavkF2DHEAc-/0/1746702196551?e=1751022000&v=beta&t=1diQoMfuqgMrMWAhdXqkGTIJ_G0QThOVjhy0kTzvQL0"
    },
    reducers: {
        changeinfo: (state) => {
            state.phone = 1234567890;
            state.name = "Harsh";
            state.email = "newemail@gmail.com";
            state.image = "https://media.licdn.com/dms/image/v2/D5635AQEfE4SkDd2UiA/profile-framedphoto-shrink_400_400/B56ZUzdYf4GUAc-/0/1740325095791?e=1751022000&v=beta&t=1ddt9tRZ8CuehHxCUljal0528VH9jy9cdOxI-_ntbBo"

        }
    }
});

export const { changeinfo } = adminSlice.actions;
export default adminSlice.reducer;