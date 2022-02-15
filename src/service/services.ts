import http from "@/service/common"
class Service {
  getAll(): Promise<any> {
    return http.get("/todos/")
  }
  get(id: any): Promise<any> {
    return http.get(`/tutorials/${id}`)
  }  
  findByTitle(title: string): Promise<any> {
    return http.get(`/tutorials?title=${title}`)
  }
}
export default new Service()