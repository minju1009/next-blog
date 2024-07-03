import { getAllGuestBooks } from "@/service/guestbook"
import Message from "./Message";

export default async function Guestbook(){
    const guestbooks = await getAllGuestBooks();

    return (
    <section className="px-5 pt-7 pb-16 flex flex-col gap-1 max-w-screen-md min-w-[320px] mx-auto" style={{backgroundColor: '#F6F2F6'}}>
        <h1 className="flex flex-col gap-1 text-xl font-bold">익명 방명록 🤫</h1>
        <span className="text-gray-600 mb-5">지금까지 작성된 방명록 <b>{guestbooks.length}</b>개</span>
        {guestbooks.map(guestbook => <Message key={guestbook.id} guestbook={guestbook}/> )}
    </section>
    )
}