import AxiosClient from "@/services/AxiosClient.ts";

export const useAuthenticate = () => {
    const client=AxiosClient();
    const fetchData = async () => {
        client.get("/admin/isadmin").then(() => {
            return true;
        }).catch(() => {
            return false;
        })
    }
    // @ts-ignore
    fetchData().then(r => {
        return false
    });
    return false;
}