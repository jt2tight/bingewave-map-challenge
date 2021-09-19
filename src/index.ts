/// <reference path="../node_modules/@workadventure/iframe-api-typings/iframe_api.d.ts" />

import {bootstrapExtra} from "@workadventure/scripting-api-extra";

// The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure.
bootstrapExtra().catch(e => console.error(e));

let currentPopup: any = undefined;
const today = new Date();
const time = today.getHours() + ":" + today.getMinutes();

WA.room.onEnterZone('clock', () => {
    currentPopup =  WA.ui.openPopup("clockPopup","It's " + time,[]);
})

WA.room.onEnterZone('bingewaveZone', ()=> {
    setTimeout(() => WA.chat.sendChatMessage('If the video does not auto-play you will need to start the stream here: https://www.livestream-demo.com/content-creators/', 'Bingewave Bot'), 3000)
})

WA.room.onEnterZone('coffeeRoom', ()=> {
    currentPopup = WA.ui.openPopup("coffeePopup","Outta cofee...", [])
})

WA.room.onEnterZone('workdesks', ()=> {
    currentPopup = WA.ui.openPopup("workPopup","I don't want to work right now", [])
})

WA.room.onLeaveZone('clock', closePopUp)

WA.room.onLeaveZone('coffeeRoom', closePopUp)

WA.room.onLeaveZone('workdesks', closePopUp)

WA.room.onLeaveZone('bingewaveZone', closePopUp)

WA.chat.sendChatMessage('Welcome to the online conference! Have a look around!', 'Bingewave Bot');

function closePopUp(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}
