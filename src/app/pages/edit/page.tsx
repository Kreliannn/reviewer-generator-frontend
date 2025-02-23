"use client"
import useReviewerStore from "@/app/store/reviewerStore"

export default function Edit()
{
    const QnA = useReviewerStore((state) => state.reviewer)

    console.log(QnA)

    return(
        <div>
            <h1>edit</h1>
        </div>
    )
}