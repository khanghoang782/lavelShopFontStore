import axios, { AxiosInstance, AxiosError, AxiosResponse } from "axios";


const AxiosClient = (token: string | null = null): AxiosInstance => {
    const headers = token
        ? {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
            "Accept": "application/json",
        }
        : {
            "Content-Type": "application/json",
            "Accept": "application/json",
        };
    const client = axios.create({
        baseURL: import.meta.env.VITE_API_BASE_URL,
        headers,
        timeout: 60000,
        withCredentials: false,
    });
    client.interceptors.request.use((config: any) => {
        const token = localStorage.getItem("ACCESS_TOKEN");
        config.headers = config.headers || {};
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    });
    client.interceptors.response.use(
        (response: AxiosResponse) => {
            return response;
        },
        (error: AxiosError) => {
            try {
                const { response } = error;
                if (response?.status === 401) {
                    localStorage.removeItem("ACCESS_TOKEN");
                }
            } catch (e) {
                console.error(e);
            }
            throw error;
        }
    );

    return client;
}
export default AxiosClient;