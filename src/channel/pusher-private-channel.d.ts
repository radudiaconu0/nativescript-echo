import { PusherChannel } from './pusher-channel';
export declare class PusherPrivateChannel extends PusherChannel {
    whisper(eventName: string, data: any): PusherPrivateChannel;
}
