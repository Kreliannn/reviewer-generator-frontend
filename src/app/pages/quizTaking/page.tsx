"use client"
import useReviewerStore from "@/app/store/reviewerStore"
import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Trash, X } from "lucide-react";
import Navbar from "@/components/ui/quizNavbar"

export default function TakeQuiz()
{
    const [search, setSearch] = useState("")

    const reviewer = useReviewerStore((state) => state.reviewer)
    


    return(
        <div className="w-full bg-stone-100 ">
            <Navbar />
            
            

            <br />
        </div>
    )

}