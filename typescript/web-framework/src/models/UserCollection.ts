//depatched...
import { Eventing } from "./Eventing";
import { User, UserProps } from "./User";
import Axios, { AxiosResponse } from "axios";

export class UserCollection {
  model: User[] = [];
  events: Eventing = new Eventing();

  constructor(public rootUrl: string) {}

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  fetch(): void {
    Axios.get(this.rootUrl).then((response: AxiosResponse) => {
      response.data.forEach((value: UserProps) => {
        const user = User.buildUser(value);
        this.model.push(user);
      });
    });

    this.trigger("change");
  }
}
