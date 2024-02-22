import { YoutubeLiveChat } from "../src/index"

const liveChat = new YoutubeLiveChat({channelId: "@MaykBrito"})

// Start fetch loop
const ok =  liveChat.start()
if (!ok) {
  console.log("Failed to start, check emitted error")
}

liveChat.on("chat", (chatMessage) => {
  /* Chat messages! */
  console.log("CHAT", chatMessage);
})