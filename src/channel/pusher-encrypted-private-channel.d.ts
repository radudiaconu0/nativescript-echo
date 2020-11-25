import { PusherChannel } from './pusher-channel';
export declare class PusherEncryptedPrivateChannel extends PusherChannel {
    whisper(eventName: string, data: any): PusherEncryptedPrivateChannel;
}
