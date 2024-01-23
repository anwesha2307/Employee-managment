import axios from "axios";
const BASE_API_URL= "http://localhost:8080/code"
class EmpService{
    saveEmployee(emp)
    {
        return axios.post(BASE_API_URL+"/save",emp);
    }
    getAllEmployee()
    {
        return axios.get(BASE_API_URL+"/all");
    }
    getById(eid)
    {
        return axios.get(BASE_API_URL+"/id/"+eid);
    }
    delEmployee(eid)
    {
        return axios.delete(BASE_API_URL+"/del/"+eid);
    }
    updateEmployee(eid,emp)
    {
        return axios.put(BASE_API_URL+"/update/"+eid,emp);
    }

}
export default new EmpService();