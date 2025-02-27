"use client"
import useReviewerStore from "@/app/store/reviewerStore"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Trash, X } from "lucide-react";

export default function Edit()
{
    const reviewer = useReviewerStore((state) => state.reviewer)
    const [QnA, setQnA] = useState(reviewer)

    console.log(QnA)

    const [fileName, setFileName] = useState("")

    const changeTitle = (e : React.ChangeEvent<HTMLInputElement>, index : number) => {
        let currentQnA = [...QnA]
        currentQnA[index] = { item : e.target.value, definition : currentQnA[index].definition, id : currentQnA[index].id }
        setQnA(currentQnA)
    }

    const changeDefinition = (e : React.ChangeEvent<HTMLTextAreaElement>, index : number) => {
        let currentQnA = [...QnA]
        currentQnA[index] = { definition : e.target.value, item : currentQnA[index].item, id : currentQnA[index].id }
        setQnA(currentQnA)
    }

    const removeItem = (title : string) => {
        
    }

    const save = () => {

        if(!fileName) return alert("add reviewer title");

        const text = JSON.stringify(QnA)
        const blob = new Blob([text], { type: "text/plain" });
        const link = document.createElement("a");

        link.href = URL.createObjectURL(blob);
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return(
        <div className="w-full bg-stone-100 ">
            <div className="w-full h-14 bg-black shadow  mb-5 ">
                <div className="m-auto w-5/6  h-full place-items-center flex gap-3">
                    <Input 
                        type="text" 
                        value={fileName}
                        placeholder="set reviewer title"
                        onChange={(e) =>setFileName(e.target.value)}
                        className="font-bold bg-white"
                    /> 
                    <Button variant={"outline"} onClick={save} >  save </Button>
                </div> 
            </div>
            {
                QnA?.map((question, index) => {
                    return (
                        <div key={index} className="w-5/6 h-auto  m-auto sahdow-lg mb-10">
                            <div className="grid w-full items-center gap-1.5 ">

                                <div className="w-full flex justify-between items-center"> 
                                    <Label className="font-bold text-stone-600"> item #{index + 1}</Label>
                                    <X className="w-5 h-5 text-red-500 hover:bg-red-500 hover:text-white rounded " onClick={()=>setQnA(QnA.filter((item) => item.id != question.id))}/>
                                </div>
                             
                                <Input 
                                    type="text" 
                                    value={question.item}
                                    onChange={(e) => changeTitle(e, index)}
                                    className="font-bold bg-white"
                                    placeholder="set item title"
                                /> 
                            </div>
                            
                           
                            <div className="grid w-full gap-1.5 mt-2">
                                <Textarea className="h-auto bg-white h-60 md:h-32" placeholder="set definition" value={question.definition} onChange={(e) => changeDefinition(e, index)} />
                                <p className="text-xs text-muted-foreground ">
                                    you can modify item before saving
                                </p>
                            </div>
                        </div>
                    )
                 })
            }
            
            <button className="button w-5/6 m-auto block" onClick={() => setQnA([...QnA, { id : 1, item : "", definition : ""}])}> add items </button>

            <br />
        </div>
    )

}