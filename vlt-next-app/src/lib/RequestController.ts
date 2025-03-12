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

    static async fetchAnniversaryClockPageMessage() {
        try {
            const response = await axios.get("/api/message/anniversary/clock");
            return response.data
        } catch (error) {
            return {
                data: [],
                error: error,
            }
        }
    }

    static async fetchAnniversaryPreQuizMessage() {
        try {
            const response = await axios.get("/api/message/anniversary/pre-quiz");
            return response.data
        } catch (error) {
            return {
                data: [],
                error: error,
            }
        }
    }

    static async fetchAnniversaryQuizAnswerKeys() {
        try {
            const response = await axios.get("/api/message/anniversary/quiz");
            return response.data
        } catch (error) {
            return {
                data: [],
                error: error,
            }
        }
    }
}

export default RequestController;