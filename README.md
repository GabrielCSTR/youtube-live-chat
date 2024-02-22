# youtube-live-chat
[![npm version](https://badge.fury.io/js/youtube-live-chat.svg)](https://badge.fury.io/js/youtube-live-chat)
![npm](https://img.shields.io/npm/dt/youtube-live-chat)
![NPM](https://img.shields.io/npm/l/youtube-live-chat)
[![CI](https://github.com/GabrielCSTR/youtube-live-chat/actions/workflows/ci.yml/badge.svg?branch=master)](https://github.com/GabrielCSTR/youtube-live-chat/actions/workflows/ci.yml)

> Retrieve YouTube Live Chat Messages

***YouTube Live Chat is a package that allows you to search for live chat messages, and you can access and display the content of conversations that occurred during the broadcast.
This function is essential for moderating chat, answering questions and integrating live chat interactions into external applications, carried out through the YouTube API.***

☢ ***You will need to take full responsibility for your action*** ☢

## Getting started
1. Install
    - `npm i youtube-live-chat`
    - `yarn add youtube-live-chat`
2. Import
    - Javascript
    ```javascript
    const { YoutubeLiveChat } = require("youtube-live-chat")
    ```
    - Typescript
    ```typescript
    import { YoutubeLiveChat } from "youtube-chat"
    ```
3. Create instance with ChannelID or LiveID
    ```javascript
    // If channelId is specified, liveId in the current stream is automatically acquired.
    // Recommended
    const liveChat = new LiveChat({channelId: "CHANNEL_ID_HERE"})
    
    // Or specify LiveID in Stream manually.
    const liveChat = new LiveChat({liveId: "LIVE_ID_HERE"})
    ```
4. Add events
    ```typescript
    // Emit at start chat.
    const liveStarted =  liveChat.start()
    if (!liveStarted) {
      console.log("Failed to start, check emitted error")
    }

    // Emit at start of observation chat.
    // liveId: string
    liveChat.on("start", (liveId) => {
      /* Your code here! */
    })
   
    // Emit at end of observation chat.
    // reason: string?
    liveChat.on("end", (reason) => {
      /* Your code here! */
    })
    
    // Emit at receive chat.
    // chat: ChatMessage
    liveChat.on("chat", (ChatMessage) => {
      /* Your code here! */
    })
    
    // Emit when an error occurs
    // err: Error or any
    liveChat.on("error", (err) => {
      /* Your code here! */
    })
    ```
5. Start
    ```typescript
    // Start fetch loop
    const ok = await liveChat.start()
    if (!ok) {
      console.log("Failed to start, check emitted error")
    }
    ```
6. Stop loop
   ```typescript
   liveChat.stop()
   ```

## Types
### ChatMessage
```typescript
interface ChatMessage {
   author: {
      name: string
      thumbnail?: ImageItem
      channelId: string
      badge?: {
         thumbnail: ImageItem
         label: string
      }
   }
   message: MessageItem[]
   superchat?: {
      amount: string
      color: string
      sticker?: ImageItem
   }
   isMembership: boolean
   isVerified: boolean
   isOwner: boolean
   isModerator: boolean
   timestamp: Date
}
```

### MessageItem

```typescript
type MessageItem = { text: string } | EmojiItem
```

### ImageItem
```typescript
interface ImageItem {
  url: string
  alt: string
}
```

### EmojiItem
```typescript
interface EmojiItem extends ImageItem {
  emojiText: string
  isCustomEmoji: boolean
}
```

## References
- https://github.com/LinaTsukusu/youtube-chat

Thank you!👍
