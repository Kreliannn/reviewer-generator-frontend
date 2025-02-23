import { create } from "zustand"
import { reviewerInterface } from "../interface/reviewer"

interface stateInterface {
    reviewer : reviewerInterface[],
    setReviewer : (data : reviewerInterface[]) => void
}

const useReviewerStore = create<stateInterface>((set) => ({
    reviewer : [] as reviewerInterface[],
    setReviewer : (data) => set({ reviewer : data})
}))


export default useReviewerStore