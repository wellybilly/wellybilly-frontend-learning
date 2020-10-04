type Callback = () => void; // type annotation

export class Eventing {
  events: { [key: string]: Callback[] } = {};

  // register an event handler with this object
  on = (eventName: string, callback: Callback): void => {
    // this.events[eventName] only can be Callback or undefined
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  };

  // triggers an event to tell other parts of the app that something has changed
  trigger = (eventName: string): void => {
    const handlers = this.events[eventName];

    if (!handlers || handlers.length === 0) {
      return;
    }

    handlers.forEach((callback) => {
      callback();
    });
  };
}
