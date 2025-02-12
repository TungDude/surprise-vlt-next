import axios from "axios";

class RequestController {
    static async validatePasscode(input: string) {
        try {
            const response = await axios.post("/api/validate/passcode", {
                code: input,
            })
            return response.data;
        } catch (error) {
            return {
                valid: false,
            }
        }
    }
}

export default RequestController;