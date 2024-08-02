import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    usuarioActual: null,
    error: null,
    loading: false
}

const usuarioSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        inicioDeSesion: (state) => {
            state.loading = true;
            state.error = null;
        },
        inicioDeSesionExito: (state, action) => {
            state.usuarioActual = action.payload;
            state.loading = false;
            state.error = null;
        },
        inicioDeSesionFallido: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        cerrarSesionExito: (state) => {
            state.usuarioActual = null;
            state.error = null,
            state.loading = false;
        },
    },
});

export const { inicioDeSesion, inicioDeSesionExito, inicioDeSesionFallido, cerrarSesionExito } = usuarioSlice.actions;
export default usuarioSlice.reducer;