import "./chat.css"
import EmojiPicker from "emoji-picker-react"
import { useState } from "react"

const Chat = () => {
const [open, setOpen] = useState(false)
const [text, setText] = useState("")

const handleEmoji = e => {
  setText(prev => prev + e.emoji)
  setopen(false)
}
  return (
/*TOP SECTION*/
    <div className='chat'>
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Jane Doe</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda ut culpa minus odit fuga. 
              Minima tempora nemo sit, soluta officiis cum, officia est saepe sunt et asperiores, molestias non excepturi.</p>
          </div>
        </div>
        <div className="icons">
          <img src="./info.png" alt="" />
        </div>
      </div>

{/* CENTER SECTION / MAIN CHAT */}
      <div className="center">

        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda ut culpa minus odit fuga. 
              Minima tempora nemo sit, soluta officiis cum, officia est saepe sunt et asperiores, molestias non excepturi.</p>
          <span>1 Min Ago</span>
          </div>
        </div>

        <div className="message own">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda ut culpa minus odit fuga. 
              Minima tempora nemo sit, soluta officiis cum, officia est saepe sunt et asperiores, molestias non excepturi.</p>
          <span>1 Min Ago</span>
          </div>
        </div>

        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda ut culpa minus odit fuga. 
              Minima tempora nemo sit, soluta officiis cum, officia est saepe sunt et asperiores, molestias non excepturi.</p>
          <span>1 Min Ago</span>
          </div>
        </div>

        <div className="message own">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda ut culpa minus odit fuga. 
              Minima tempora nemo sit, soluta officiis cum, officia est saepe sunt et asperiores, molestias non excepturi.</p>
          <span>1 Min Ago</span>
          </div>
        </div>

        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda ut culpa minus odit fuga. 
              Minima tempora nemo sit, soluta officiis cum, officia est saepe sunt et asperiores, molestias non excepturi.</p>
          <span>1 Min Ago</span>
          </div>
        </div>

        <div className="message own">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda ut culpa minus odit fuga. 
              Minima tempora nemo sit, soluta officiis cum, officia est saepe sunt et asperiores, molestias non excepturi.</p>
          <span>1 Min Ago</span>
          </div>
        </div>

        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda ut culpa minus odit fuga. 
              Minima tempora nemo sit, soluta officiis cum, officia est saepe sunt et asperiores, molestias non excepturi.</p>
          <span>1 Min Ago</span>
          </div>
        </div>

        <div className="message own">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <img src="https://cdn.pixabay.com/photo/2025/03/12/09/59/fashion-9464875_640.jpg" alt="" />

          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda ut culpa minus odit fuga. 
              Minima tempora nemo sit, soluta officiis cum, officia est saepe sunt et asperiores, molestias non excepturi.</p>
          <span>1 Min Ago</span>
          </div>
        </div>
      </div>

{/* BOTTOM SECTION */}
      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="" />
        </div>

        <input type="text" 
        placeholder="Send a message!"
        value={text}
        onChange={(e) => setText(e.target.value)} />

        <div className="emote">
          <img src="./emoji.png" alt="" onClick={() => setOpen(prev => !prev)} />
          
          <div className="picker">
            <EmojiPicker open={open} onEmojiClick={handleEmoji} />
          </div>
        </div>

        <button className="sendButton">Send</button>
      </div>
    </div>
  )
}

export default Chat