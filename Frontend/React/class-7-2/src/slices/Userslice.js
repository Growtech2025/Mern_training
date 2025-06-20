import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
    name: "user",
    initialState: {
        phone: 7999733778,
        name: "anshul",
        email: "anshul@gmail.com",
        image: "https://media.licdn.com/dms/image/v2/D4D35AQF0El9o4WMe6w/profile-framedphoto-shrink_400_400/B4DZYrDjo3HAAc-/0/1744479075217?e=1751022000&v=beta&t=Ev3EFz7-2cwcdwM0h8WjnWFb20BcsECALe5My4zz-Es"
    },

    reducers: {
        changeinfo: (state) => {
            state.phone = 1234567890;
            state.name = "Khsuhi";
            state.email = "newemail@gmail.com";
            state.image = "https://media.licdn.com/dms/image/v2/D4D35AQFxglVVwGWHVg/profile-framedphoto-shrink_400_400/B4DZavph2_HwAI-/0/1746703622004?e=1751022000&v=beta&t=Yj6WOEBHpjAgjhgHVmPwEVqV13gLDvBr_lZZmYlvstM"
        }
    }

})



export const { changeinfo } = UserSlice.actions;
export default UserSlice.reducer;