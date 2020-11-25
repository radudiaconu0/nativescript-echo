import { Channel } from './channel';
export declare class NullChannel extends Channel {
    subscribe(): any;
    unsubscribe(): void;
    listen(event: string, callback: Function): NullChannel;
    stopListening(event: string): NullChannel;
    subscribed(callback: Function): NullChannel;
    error(callback: Function): NullChannel;
    on(event: string, callback: Function): NullChannel;
}
