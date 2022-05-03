
import bugImageUrl from '../../assets/bug.svg'
import ideaImageUrl from '../../assets/idea.svg'
import otherImageUrl from '../../assets/other.svg'
import { useState } from "react";
import { FeedbackTypesStep } from "./Steps/FeedbackTypesStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from './Steps/FeedbackSuccessStep';



export const feedbackTypes = {
  BUG:{
    title: "Problema",
    image: {
      source: bugImageUrl,
      alt:"Image de um inseto"
    }
  },
  IDEA:{
    title: "Idea",
    image: {
      source: ideaImageUrl,
      alt:"Imagem de um lâmpada"
    }
  },
  OTHER:{
    title: "Outro",
    image: {
      source: otherImageUrl,
      alt:"imagem de um balão de pensamento"
    }
  },  
}


export type FeedbackType = keyof typeof feedbackTypes


export function WidgetForm(){

  const [feedbackType , setFeedbackType] = useState<FeedbackType | null>(null)
  const [feedbackSent,setFeedbackSent ]  = useState(false)
  
  function handleStartFeedback(){
    setFeedbackSent(false)
    setFeedbackType(null)
  }

  return(
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">

 

      {feedbackSent ? (
        <FeedbackSuccessStep
          onFeedbackRestartRequested={handleStartFeedback}
        />
      ): (
        <>
          {!feedbackType ? (
            <>
              <FeedbackTypesStep
                onFeedbackTypeChange={setFeedbackType}
              />
            </>

            ) : (
            <FeedbackContentStep
              feedbackType= {feedbackType}
              onFeedbackRestartRequested={handleStartFeedback}
              onFeedbackSent = {()=> setFeedbackSent(true)}
            />
            )}
        </>

      )}

      <footer className="text-xs text-neutral-400">
        Feito com ♡ pela a <a className="underline underline-offset-2" href="https://www.rocketseat.com.br/">Rockeseat</a>
      </footer>

    </div>
  )
}