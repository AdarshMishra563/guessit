import React, {  useEffect, useState } from "react";



const api= async()=>{
  const res= await fetch( "https://random-word-api.herokuapp.com/word?number=150&length=5")
   const info= await res.json()
  
    
    return info
}

  

export default   function App(){
 const [words,setwords]=useState('')
 const[gameover,setgameover]=useState(false)
 const [guesses,setguesses]=useState(Array(6).fill(null))
const [currentguess,setcurrentguess]=useState('')

useEffect(()=>{const handletype=(e)=>{
  if(gameover){
    return;
  }
  if(e.key==='Enter'){
    if(currentguess.length !==5){
      
      return 
    }
   
     
    const newGuesses=[...guesses]
    newGuesses[guesses.findIndex(v=>v==null)]=currentguess
    setguesses(newGuesses)
    setcurrentguess('')


    const isCorrect=words===currentguess;
   if(isCorrect){
    setgameover(true)
   } 
       
 
  }

  if(currentguess.length>=5){
    return ;
  }
const isLetter=e.key.match(/^[a-z]{1}$/)!=null
if(isLetter){
setcurrentguess(o=>{ return o+e.key})}


if(e.key==='Backspace'){
  setcurrentguess(currentguess.substring(0, currentguess.length -1))
  return 
}



}

window.addEventListener('keydown',handletype)
return ()=>window.removeEventListener('keydown',handletype)



},[currentguess,gameover,words,guesses])


 useEffect(()=>{api().then((i)=>{
  const randomword=i[Math.floor(Math.random()*i.length)]
setwords(randomword)

 }
)

},[])

return(<>



<div key={"hh"} className=" bg-gray-200 h-screen place-items-center text-3xl  gap-[5px]">
  !!WordPlay!!
  {
    guesses.map((guess,i)=>{
      const isCurrentguess=i===guesses.findIndex(v=>v==null)
      return(<Line className=""
        guess={isCurrentguess ? currentguess :guess ?? ""}
        isfinal={!isCurrentguess && guess!=null }
        words={words}
        />)
    })
  }
<Win gameover={gameover} words={words}
/>
  </div></>
)}
function Line({guess,isfinal,words,}){
  const boxes=[]
for(let i=0;i<5;i++){
  const char=guess[i]

  let className=""
  if(isfinal){
    if(char===words[i]){
      className+='bg-green-400'
    }
    else
    if(words.includes(char)){
      className+='bg-yellow-400'
    }
  else{
    className+='bg-gray-600'
  }}
 
  boxes.push(<div key={i} className={" w-12 h-12 border-2 border-black  place-items-center capitalize md:uppercase "+className}><div>{char}</div></div>)

}



  return<div className=" mt-1 flex gap-[5px]">
    {boxes}

  </div>
}
function Win({gameover}){
 
 
 if(gameover){
  return <div className="bg-pink-600 text-white mt-4 ml-2 rounded-lg text-4xl w-22 ">!!!!YouWin!!!!</div>}
}