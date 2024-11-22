import AxiosClient from "@/services/AxiosClient.ts";




export function isLogin() {

}
export function LoginRequest(email: string, password: string) {
    const client = AxiosClient();

    const fetchData = async () => {
        client.post("/login",{
            'email': email,
            'password': password
        }).then((response) => {
            localStorage.setItem("ACCESS_TOKEN", response.data.token);
        }).catch((error) => {
            console.log(error);
        })
    }
    fetchData();
}


