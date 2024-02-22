import { YoutubeLiveChat } from "../src/index"

const liveChat = new YoutubeLiveChat({channelId: "CHANNEL_ID"})

liveChat.on("start", (liveId) => {
  /* Your code here! */
  console.log("START", liveId);
})


liveChat.on("chat", (chatMessage) => {
  /* Chat messages! */
  console.log("CHAT", chatMessage);
})

const liveStarted =  liveChat.start()
if (!liveStarted) {
  console.log("Failed to start, check emitted error")
}