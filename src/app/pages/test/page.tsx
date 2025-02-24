"use client"
import {useState} from "react"
import axios from "axios"
import { useMutation } from "@tanstack/react-query"
import useReviewerStore from "@/app/store/reviewerStore"
import { reviewerInterface } from "@/app/interface/reviewer"
import { useRouter } from "next/navigation"


export default function Upload()
{
    const [file, setFile] = useState<File | null>(null)
    const [text, setText] = useState("")

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => console.log(JSON.parse(e.target?.result as string));
        reader.readAsText(file);
    };

    return(
        <div>
            <input 
              id="txt" 
              type="file"
              accept="text/plain" 
              className="ms-2 m-auto mt-2" 
              required 
              onChange={handleFileChange}
             />
            <br /><br />
   
        </div>
    )
}