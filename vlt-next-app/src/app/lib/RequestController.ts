import axios from "axios";

class RequestController {
    static async validatePasscode(input: string) {
        try {
            const response = await axios.post("/api/validate/passcode", {
                code: input,
            });
            return response.data;
        } catch (error) {
            return {
                valid: false,
                error: error,
            };
        }
    }

    static async fetchVltMessage() {
        try {
            const response = await axios.get("/api/message/valentine");
            return response.data;
        } catch (error) {
            return {
                message: error,
            }
        }
    }
}

export default RequestController;