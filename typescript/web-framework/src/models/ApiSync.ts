import axios, { AxiosPromise } from "axios";

interface HasId {
  id?: number;
}

export class ApiSync<T extends HasId> {
  constructor(public rootUrl: string) {}

  fetch(id: number): AxiosPromise {
    return axios.get(`${this.rootUrl}/${id}`);
  }

  save(data: T): AxiosPromise {
    const id = data.id;

    if (id) {
      // put-> update
      return axios.put(`${this.rootUrl}/${id}`, data);
    } else {
      // post-> new
      return axios.post(this.rootUrl, data);
    }
  }
}
