export const errorMiddleware = async (err, req, resp, next) =>{
    const status = err.status || 500;
    const message = err.message || "Backend Error";
    const extra_details = err.extra_details || "Baackend error";
    return resp.status(status).json({message,extra_details})
}