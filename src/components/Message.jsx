


export default function Message(props) {


    return (
        <div className="w-full items-end">
            <div className={ props.display }>
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img
                            alt="Tailwind CSS chat bubble component"
                            src="data:image/png;base64,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" />
                    </div>
                </div>
  
  
                <div className="chat-header">
                    <span className="text-base font-semibold">{props.user + " "}</span>
                    <span className="text-base font-semibold"><date className="text-xs opacity-80">{props.date}</date></span>
                </div>

                
                <div className="chat-bubble font-semibold text-white text-xl" style={{"color": "whait", "backgroundColor": props.bg, "alignSelf": props.display }}>
                    <div>
                    <textarea className="p-3 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-gray-500 break-words resize-none text-xl" style={{"color": "whait", "backgroundColor": props.bg}} value={props.messag} rows={1}>{props.messag}</textarea>

                    </div>

                    <div>
                        <span className="text-base font-semibold" style={{"display": "flex", "justify-content": props.stTime}}><time className="text-xs opacity-80">{props.time}</time></span>
                    </div>
                </div>

            </div>
        </div>
    )
}