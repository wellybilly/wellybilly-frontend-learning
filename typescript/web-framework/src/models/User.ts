import { Model } from "./Model";
import { Collection } from "./Collection";
import { Attributes } from "./Attributes";
import { ApiSync } from "./ApiSync";
import { Eventing } from "./Eventing";

export interface UserProps {
  name?: string; // ? mark = optional
  age?: number;
  id?: number;
}

const rootUrl = "http://localhost:3000/users";

export class User extends Model<UserProps> {
  static buildUser(attrs: UserProps): User {
    return new User(
      new Attributes<UserProps>(attrs),
      new Eventing(),
      new ApiSync<UserProps>(rootUrl)
    );
  }

  static buildUserCollection(): Collection<User, UserProps> {
    return new Collection<User, UserProps>(rootUrl, (json: UserProps) =>
      User.buildUser(json)
    );
  }

  setRandomAge(): void {
    const age = Math.round(Math.random() * 100);
    this.set({ age: age });
  }

  // static buildLocalUser(attrs: UserProps): User {
  //   return new User(
  //     new Attributes<UserProps>(attrs),
  //     new Eventing(),
  //     new LocalSync<UserProps>(rootUrl)
  //   );
  // }

  isAdminUser(): boolean {
    return this.get("id") === 1;
  }
}
