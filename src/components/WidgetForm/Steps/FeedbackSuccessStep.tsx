import { CloseButton } from "../../CloseButton";


interface FeedbackSuccessStepProps {
  onFeedbackRestartRequested: ()=>void
}

export function FeedbackSuccessStep({onFeedbackRestartRequested}:FeedbackSuccessStepProps){
  return(
    <>
      <header>
        <CloseButton/>
      </header>

      <div className="flex flex-col items-center py-10 w-[304px]">
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M36 32C36 34.209 34.209 36 32 36H4C1.791 36 0 34.209 0 32V4C0 1.791 1.791 0 4 0H32C34.209 0 36 1.791 36 4V32Z" fill="#77B255"/>
      <path d="M29.28 6.36202C28.124 5.61102 26.576 5.94002 25.822 7.09802L14.936 23.877L9.907 19.227C8.893 18.289 7.311 18.352 6.374 19.365C5.437 20.379 5.499 21.961 6.513 22.898L13.722 29.564C14.202 30.009 14.812 30.229 15.418 30.229C16.091 30.229 16.952 29.947 17.517 29.09C17.849 28.584 30.017 9.82002 30.017 9.82002C30.768 8.66102 30.438 7.11302 29.28 6.36202V6.36202Z" fill="white"/>
      </svg>

      <span className="text-xl mt-2 ">Agradecemos o feedback!</span>

        <button 
          type="button"
          className="py-2 px-6 mt-6 bg-zinc-800 rounded border-transparent text-sm leading-6 hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
          onClick={onFeedbackRestartRequested}
        >
          Quer enviar outro ? 
        </button> 

      </div>
    </> 
  )
}