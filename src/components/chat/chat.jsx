import "./chat.css"

const Chat = () => {
  return (
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

      <div className="center"></div>

      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="" />
        </div>

        <input type="text" placeholder="Send a message!" />

        <div className="emote">
          <img src="./emoji.png" alt="" />
        </div>

        <button className="sendButton">Send</button>
      </div>
    </div>
  )
}

export default Chat