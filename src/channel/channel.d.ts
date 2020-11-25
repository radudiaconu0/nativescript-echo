export declare abstract class Channel {
    options: any;
    abstract listen(event: string, callback: Function): Channel;
    listenForWhisper(event: string, callback: Function): Channel;
    notification(callback: Function): Channel;
    abstract stopListening(event: string): Channel;
    stopListeningForWhisper(event: string): Channel;
    abstract subscribed(callback: Function): Channel;
    abstract error(callback: Function): Channel;
}
