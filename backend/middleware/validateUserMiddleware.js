export const validateUsermiddleware = (schema) => async(req,resp,next)=>{
    try {
        const parse_body = await schema.parseAsync(req.body);
        req.body = parse_body;
        next();
    } catch (err) {
        // console.log(err);
        const status= 404;
        const message = "Fill the input properly";
        const extra_details = err.errors[0].message;
        const data = {
            status,
            message,
            extra_details
        }
        next(data);
    }
}