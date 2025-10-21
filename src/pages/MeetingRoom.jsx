import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

function MeetingRoom() {
  const location = useLocation();
  const roomContainerRef = useRef(null);

  useEffect(() => {
    // Extract roomID from URL if available, else create new
    const queryParams = new URLSearchParams(window.location.search);
    const roomID =
      queryParams.get("roomID") || Math.floor(Math.random() * 10000) + "";

    const appID = Number(import.meta.env.VITE_ZEGO_APP_ID);
const serverSecret = import.meta.env.VITE_ZEGO_SERVER_SECRET;

    const userID = Math.floor(Math.random() * 10000) + "";
    const userName = "userName" + userID;

    // Generate Kit Token
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomID,
      userID,
      userName
    );

    // Create instance and join room
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    zp.joinRoom({
      container: roomContainerRef.current,
      sharedLinks: [
        {
          name: "Personal link",
          url:
            window.location.protocol +
            "//" +
            window.location.host +
            window.location.pathname +
            "?roomID=" +
            roomID,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.VideoConference,
      },

      turnOnMicrophoneWhenJoining: true,
      turnOnCameraWhenJoining: true,
      showMyCameraToggleButton: true,
      showMyMicrophoneToggleButton: true,
      showAudioVideoSettingsButton: true,
      showScreenSharingButton: true,
      showTextChat: true,
      showUserList: true,
      maxUsers: 50,
      layout: "Auto",
      showLayoutButton: true,
    });
  }, [location]);

  return (
    <div
      ref={roomContainerRef}
      style={{ width: "100vw", height: "100vh" }}
    ></div>
  );
}

export default MeetingRoom;
