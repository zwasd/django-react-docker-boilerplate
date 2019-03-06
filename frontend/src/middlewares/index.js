import { message } from "antd";


export const messageMiddleware = (store) => (next) => (action) => {
    const result = next(action);
    if ('error' in result && result.error === true) {
        const payload = result.payload;
        if ('response' in payload) {
            const response = payload.response;
            if ('error' in response) {
                message.error(response.error.error_cn);
            }
            if ('message' in response) {
                message.error(response.message);
            }
        } else {
            message.error(`${payload.name}: ${payload.message}`);
        }
    }
    return result;
}