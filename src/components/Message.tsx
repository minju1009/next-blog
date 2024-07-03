import { Guestbook } from "@/service/guestbook"

type MessageProps = {guestbook : Guestbook}

const Message = ({guestbook}:MessageProps) => {

    const {content, color, date} = guestbook;


  return (
    <div className="flex flex-row justify-end items-end gap-1">
      <span className="text-[10px] opacity-50" style={{color}}>
            {date.toString()}
     </span>
     <div className="min-h-[40px] py-2 px-2.5 break-all leading-6 rounded-[10px] rounded-br-none text-sm max-w-[90%]" style={{backgroundColor: color}}>{content}</div>
    </div>
  )
}

export default Message