"use client"
import useReviewerStore from "@/app/store/reviewerStore"
import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Trash, X } from "lucide-react";
import Navbar from "@/components/ui/quizNavbar"

export default function ReviewQuiz()
{
    const [search, setSearch] = useState("")

    const reviewer = useReviewerStore((state) => state.reviewer)
    


    return(
        <div className="w-full bg-stone-100 ">
            <Navbar />
            {
                reviewer?.map((item, index) => {
                    return (
                        <div key={index} className="w-5/6 h-auto  m-auto sahdow-lg mb-10">
                            <div className="grid w-full items-center gap-1.5 ">

                                <div className="w-full flex justify-between items-center"> 
                                    <Label className="font-bold text-stone-600"> item #{index + 1}</Label>
                                </div>

                                <div className="h-auto bg-white h-60 md:h-32 rounded shadow-md p-2">
                                        <div  className="w-full flex flex-col gap-1 p-2">
                                            <h1 className="font-bold">{item.item}</h1>
                                            <p className="text-sm text-stone-500">{item.definition}</p>
                                        </div>
                                </div>
                             
                               
                            </div>
                        </div>
                    )
                 })
            }
            
            

            <br />
        </div>
    )

}