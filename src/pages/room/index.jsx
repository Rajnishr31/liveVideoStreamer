import React from 'react';
import {useParams} from 'react-router-dom';
import {ZegoUIKitPrebuilt} from '@zegocloud/zego-uikit-prebuilt';

const RoomPage = () => {
    const { roomId } = useParams();

    const myMeeting = async (element) => {
        const appID = 1274948681;
        const serverSecret = "33f5831753df077bd797cad9dac4a683";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appID,
            serverSecret,
            roomId,
            Date.now().toString(),
            "rajnish"
            );
            const zp = ZegoUIKitPrebuilt.create(kitToken);
            zp.joinRoom({
                container:element,
                scenario: {
                    mode: ZegoUIKitPrebuilt.VideoConference,
                }
            })
    };

    return ( 
    <div className ='room-page'>
        <div ref={myMeeting} />
    </div>
    );
};

export default RoomPage;