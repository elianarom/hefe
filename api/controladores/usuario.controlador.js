
export const cerrarsesion = (req, res, next) => {
    try {
        res.clearCookie('token')
        res.status(200)
        .json('Cerraste sesión con éxito. ¡Te esperamos pronto!')
    } catch (error) {
        next(error);
    }
}