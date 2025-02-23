"use client"
import useReviewerStore from "@/app/store/reviewerStore"
import { useState } from "react"



export default function Edit()
{
    const reviewer = useReviewerStore((state) => state.reviewer)
    const [QnA, setQnA] = useState(reviewer)

    const changeTitle = (e : React.ChangeEvent<HTMLInputElement>, index : number) => {
        let currentQnA = [...QnA]
        currentQnA[index] = { item : e.target.value, definition : currentQnA[index].definition }
        setQnA(currentQnA)
    }

    const changeDefinition = (e : React.ChangeEvent<HTMLTextAreaElement>, index : number) => {
        let currentQnA = [...QnA]
        currentQnA[index] = { definition : e.target.value, item : currentQnA[index].item }
        setQnA(currentQnA)
    }

    const save = () => {
        const text = JSON.stringify(QnA)
        const blob = new Blob([text], { type: "text/plain" });
        const link = document.createElement("a");

        link.href = URL.createObjectURL(blob);
        link.download = "example.txt";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }


    return(
        <div>
            <div className="w-full bg-stone-500 h-auto m-auto ">
                <button className="button" onClick={save}> save </button>
            </div>
            {
                QnA?.map((question, index) => {
                    return (
                        <div key={index} className="w-full h-auto  m-auto sahdow-lg mb-10">
                            <input 
                             type="text" 
                             value={question.item}
                             className="w-full text-lg font-bold mb-2 input" 
                             onChange={(e) => changeTitle(e, index)}
                            /> 
                            <br />
                            <textarea 
                             value={question.definition} 
                             className="w-full"
                             onChange={(e) => changeDefinition(e, index)}
                             ></textarea>
                        </div>
                    )
                 })
            }
        </div>
    )
}