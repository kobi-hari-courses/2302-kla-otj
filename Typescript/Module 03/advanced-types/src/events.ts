export type MouseEvent = {
    sug: 'MouseEvent';
    x: number;
    y: number;
    isLeftButtonPressed: boolean;
}

export type KeyboardEvent = {
    sug: 'KeybordEvent';
    key: string;
    isKeyDowb: boolean;
    timeUntilRelease: number;
}

export type Event = MouseEvent | KeyboardEvent;

export function getEvent(): Event {
    return {
        sug: 'MouseEvent', 
        x: 20, 
        y: 30, 
        isLeftButtonPressed: true

    }
}
