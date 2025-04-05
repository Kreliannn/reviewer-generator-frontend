"use client"
import useReviewerStore from "@/app/store/reviewerStore"
import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Trash, X } from "lucide-react";
import { reviewerInterface } from "@/app/interface/reviewer"
import Navbar from "@/components/ui/quizNavbar"
import { Send } from 'lucide-react';
import AllChoices from "./components/allChoices"
import { SkeletonCard } from "./components/questionSkeleton"
import StartPage from "./components/startPage"

export default function TakeQuiz()
{
    const reviewer = useReviewerStore((state) => state.reviewer)
    
    const [quiz, setQuiz] = useState<reviewerInterface[]>()
    const [question, setQuestion] = useState<string>("")
    const [input, setInput] = useState<string>("")
    const [isLoading, setIsLoading] = useState(true)
    const [isFirstTry, SetIsFirstTry] = useState(true)

    if(isFirstTry) return <StartPage />

    useEffect(() => {
        setQuiz(reviewer)
        console.log(reviewer)
        if(reviewer.length != 0)
        {
            setQuestion(reviewer[0].definition)
            setIsLoading(false)
        }
        else
        {
            console.log("no quiz")
        }
    },[reviewer])

    const checkIfExists = ( item: string) => {
        if(quiz) return quiz.some((obj) => obj.item.toUpperCase() === item.toUpperCase()); 
    }
    
    const submit = () => {
        if(quiz == undefined) return
        if(input.toUpperCase() == quiz[0].item.toUpperCase())
        {
            const newQuiz = [...quiz]
            newQuiz.shift();
            setQuiz(newQuiz) 
            setQuestion(newQuiz[0].definition)
            setInput("")
        }
        else
        {
            console.log("incorrect")
      
        }
    }

    return(
        <div className="w-full h-dvh bg-stone-100 ">
            <Navbar />         
            <div className="w-5/6  h-auto m-auto s ">

                <div className="grid grid-cols-2 h-10   gap-1.5 p-2 ">
                    <div className="">
                        <h1 className="text-left md:text-2xl text-lg font-bold text-stone-700"> Quiz Name </h1>
                    </div>
                    <div className="w-100">
                        <h1 className="text-right md:text-2xl text-lg font-bold text-stone-700"> Item Left: {quiz?.length} </h1>
                    </div>
                </div>

                <div className="w-full grid grid-cols-1 h-64 rounded    gap-1.5 p-2 ">
                    <div className=" h-full bg-white rounded shadow-md p-4 oveflow-auto">
                        {
                            (isLoading) ? <SkeletonCard /> : <h1 className="text-stone-700 font-bold text-lg "> {question} </h1>
                        }
                    </div>  
                </div>

                <div className="grid grid-cols-4 w-full items-center gap-1.5 p-2">
                    <Input 
                        type="text" 
                        className={`col-span-3 h-14 bg-white shadow-lg font-bold text-lg ${(checkIfExists(input)) ? "text-green-700" : ""}`}
                        placeholder="Answer........." 
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <Button 
                     className="col-span-1 h-14 shadow-lg font-bold text-lg flex items-center gap-2" 
                     variant="black"
                     onClick={submit}
                    >
                        <Send className="" />  
                        <span className="hidden md:block">Submit</span>  
                              
                    </Button>
                </div>

                <AllChoices quiz={reviewer} setInput={setInput} input={input} />


            </div>
        </div>
    )

}