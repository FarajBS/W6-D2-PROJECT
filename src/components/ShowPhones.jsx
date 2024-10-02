import Message from "./Message";
import { useState } from "react";
import moment from 'moment';



  

export default function ShowPhones() {

    const date = moment().format("MMMM DD YYYY");
    const time = moment().format("HH mm ss");

    const [userOne, setUserOne] = useState("");
    const [userTwo, setUserTwo] = useState("");
    

    const [mess, setMess1] = useState("");
    const [messTwo, setMess2] = useState("");
    

    const [allMess, setAllMess] = useState([]);

    const putUserOne = (e) => {
        setUserOne(e.target.value);
    };

    const putUserTwo = (e) => {
        setUserTwo(e.target.value);
    };

    const message1 = (event) => {
        setMess1(event.target.value);
    };

    const message2 = (event) => {
        setMess2(event.target.value);
    };

    const submit = () => {
        if (mess.trim() != "") {
            setAllMess([{ user: userOne, messa: mess }, ...allMess]);

            setMess1("");
        }
    };

    const submitTwo = () => {
        if (messTwo.trim() != "") {
            setAllMess([{ user: userTwo, messa: messTwo }, ...allMess]);
            setMess2("");
        }
    };

    const putUsers = () => {
        if (userOne.trim() != "" && userTwo.trim() != "") {
            if (userOne == userTwo) {
                "1. " + userOne;
                "2. " + userTwo; 
            } 

            document.getElementById("contUders").style.display = "none";
        }
    };
    console.log(userOne)
    console.log(userTwo)

    return (
            <>
            <div className="w-full h-full lg:w-screen lg:h-screen bg-[#1d232a] flex flex-col justify-start items-center md:flex-row md:justify-evenly">
                <div id="contUders" className="fixed left-0 top-0 w-screen h-screen z-30 bg-black opacity-95 flex justify-center items-center">
                    <div  className="join md:w-1/3 flex flex-col justify-center items-center bg-gray-100 p-10">
                        <input onChange={putUserOne} value={userOne} className="input mb-3 w-full input-bordered bottom-4 rounded-none border-gray-900 join-item text-center text-xl" placeholder="First User" />
                        <input onChange={putUserTwo} value={userTwo} className="input mb-3 w-full input-bordered bottom-4 rounded-none border-gray-900 join-item text-center text-xl" placeholder="Second User" />
                        <button onClick={putUsers} className="btn w-full bg-gray-400 mb-3 rounded-lg text-xl">Submit</button>
                    </div>
                </div>

                {/* Device And First User */}
                <div className="p-5">
                    {/* User Nahe */}
                    <h2 className="text-white text-2xl text-center">{userOne}</h2>
                    {/* User Nahe */}
                    
                    <div className="mockup-phone border-primary h-full">
                            <div className="camera"></div>
                            
                            <div className="display">
                                <div className="pt-10 px-2 artboard artboard-demo phone-1 flex flex-col items-end">

                                    {/* Message */}
                                    <div className="w-full flex flex-col-reverse justify-start items-start overflow-auto flex-1">
                                        {allMess.map((ms, index) => {
                                            let backg;
                                            let display = "chat chat-start";
                                            let styTime;

                                            if (ms.user == userOne) {
                                                backg   ="#22c55e";
                                                styTime    = "end";
                                            } else {
                                                backg="grey"
                                                display= "chat chat-end"
                                            };
                                            
                                            return (
                                                <Message 
                                                    key = {index} user = {ms.user} date = {date} time = {time}  messag = {ms.messa} bg = {backg} display = {display} stTime = {styTime}
                                                />
                                            )
                                        })}
                                        {/*=== Message ===*/}
                                    </div>

                                    {/* Input & Submit */}
                                    <div className="w-full pt-4 pb-2 px-2 flex flex-row flex-nowrap justify-center items-end">
                                        {/* Input Part */}
                                        <div className="mr-2 w-full">
                                            <textarea className="p-3 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-gray-500 break-words resize-none text-lg" rows={1} value={mess} onChange={message1} placeholder="Write Your Message"></textarea>
                                        </div>
                                        {/*= Input Part =*/}

                                        {/* Submit Part */}
                                        <div className="p-3 bg-green-500 w-fit rounded-full cursor-pointer hover:bg-green-700" onClick={submit}>
                                            <i className="fa-solid fa-location-arrow fa-fw text-2xl text-white"></i>
                                        </div>
                                        {/*= Submit Part =*/}
                                    </div>
                                    {/*== Input & Submit ==*/}
                                </div>
                            </div>
                    </div>

                </div>
                {/*=== Device And First User ===*/}
                



                {/* Device And SECOND User */}
                <div className="p-5">
                    {/* User Nahe */}
                    <h2 className="text-white text-2xl text-center">{userTwo}</h2>
                    {/* User Nahe */}

                    <div className="mockup-phone">
                            <div className="camera"></div>
                            
                            <div className="display">
                                <div className="pt-10 px-2 artboard artboard-demo phone-1 flex flex-col items-end">
                                    {/* Message */}
                                    <div className="w-full flex flex-col-reverse justify-start items-start overflow-auto flex-1">
                                        {allMess.map((ms, index) => {
                                            let backg;
                                            let display= "chat chat-start";
                                            let styTime;

                                            if (ms.user == userTwo) {
                                            backg="#22c55e"
                                            styTime    = "end";
                                        } else {
                                            backg="grey"
                                            display= "chat chat-end"
                                        };

                                            return (
                                            <Message 
                                                key = {index} user = {ms.user} date = {date} time = {time} messag = {ms.messa} bg = {backg} display = {display} stTime = {styTime}
                                            />
                                            )
                                        })}
                                        {/*=== Message ===*/}
                                    </div>

                                    {/* Input & Submit */}
                                    <div className="w-full pt-4 pb-2 px-2 flex flex-row flex-nowrap justify-center items-end">
                                        {/* Input Part */}
                                        <div className="mr-2 w-full">
                                            <textarea className="p-3 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-gray-500 break-words resize-none text-lg" rows={1} value={messTwo} onChange={message2} placeholder="Write Your Message"></textarea>
                                        </div>
                                        {/*= Input Part =*/}

                                        {/* Submit Part */}
                                        <div className="p-3 bg-green-500 w-fit rounded-full cursor-pointer hover:bg-green-700" onClick={submitTwo}>
                                        <i className="fa-solid fa-location-arrow fa-fw text-2xl text-white"></i>
                                        </div>
                                        {/*= Submit Part =*/}
                                    </div>
                                    {/*== Input & Submit ==*/}
                                </div>
                            </div>
                    </div>

                </div>
                {/*=== Device And SECOND User ===*/}
            </div>
        </>
    )
}
