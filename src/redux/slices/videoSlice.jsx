import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated: false,
    videos: [
        {
            id: 1,
            title: "Basic Karate Stances",
            level: "Beginner",
            url: "https://www.youtube.com/embed/6g3v1y0KXYg"
        },
        {
            id: 2,
            title: "Front Kick (Mae Geri)",
            level: "Beginner",
            url: "https://www.youtube.com/embed/CzGo2Ks6A28"
        },
        {
            id: 3,
            title: "Advanced Kata Training",
            level: "Advanced",
            url: "https://www.youtube.com/embed/9Gf8pDr4K7s"
        }
    ]
};

const videoSlice = createSlice({
    name: "videos",
    initialState,
    reducers: {
        loginSuccess: (state) => {
            state.isAuthenticated = true;
        },
        logout: (state) => {
            state.isAuthenticated = false;
        }
    }
});

export const { loginSuccess, logout } = videoSlice.actions;
export default videoSlice.reducer;
