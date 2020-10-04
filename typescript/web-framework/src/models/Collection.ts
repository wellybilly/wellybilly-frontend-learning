import { Eventing } from "./Eventing";
import Axios, { AxiosResponse } from "axios";

export class Collection<T, K> {
  model: T[] = [];
  events: Eventing = new Eventing();

  constructor(public rootUrl: string, public deserialize: (json: K) => T) {}

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  fetch(): void {
    Axios.get(this.rootUrl).then((response: AxiosResponse) => {
      response.data.forEach((value: K) => {
        this.model.push(this.deserialize(value));
      });
    });

    this.trigger("change");
  }
}
