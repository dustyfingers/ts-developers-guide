interface UserProps {
  // ? makes the prop optional
  name?: string; 
  age?: number;
}

type Callback = () => void;

export class User {
  events: { [key: string]: Callback[] } = {}

  constructor(private data: UserProps) {}

  get(propName: string): (string | number) {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }

  // trigger event handlers
  trigger(eventName: string): void {
    const handlers = this.events[eventName];

    if (!handlers || !handlers.length) return;

    handlers.forEach(callback => callback());
  }

  // register event handlers
  on(eventName: string, callback: Callback): void {
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  }
}