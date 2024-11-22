import AxiosClient from "../services/AxiosClient.ts";

function TestAxios (){
    const client = AxiosClient();
    const fetchData = async () => {
        client.get("/products")
            .then((response) => {
                console.log(response.data);
            }).catch((error) => {
                console.log(error);
        })
    }
    return(
        <div>
            <h1>Test Axios</h1>
            <button onClick={fetchData}>TEST</button>
        </div>
    )
}
export default TestAxios;