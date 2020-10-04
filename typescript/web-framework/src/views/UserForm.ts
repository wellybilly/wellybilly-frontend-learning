import { User, UserProps } from "../models/User";
import { View } from "./View";

export class UserForm extends View<User, UserProps> {
  eventsMap(): { [key: string]: () => void } {
    return {
      "click:#setAge": this.onSetAgeButtonClick,
      "click:#setName": this.onSetNameButtonClick,
      "click:#save": this.onSaveButtonClick,
    };
  }

  onSetAgeButtonClick = (): void => {
    this.model.setRandomAge();
  };

  onSetNameButtonClick = (): void => {
    const input = this.parent.querySelector("input");

    if (input) {
      const name = input.value;
      this.model.set({ name });
    }
  };

  onSaveButtonClick = (): void => {
    this.model.save();
  };

  template(): string {
    return `
    <div>
      <input placeholder = "${this.model.get("name")}" />
      <button id='setName'>Click Me</button>
      <button id='setAge'>Set Radom Age</button>
      <button id='save'>Save</button>
    </div>
    `;
  }
}
