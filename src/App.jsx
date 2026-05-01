import { useState } from 'react'
import './App.css'
import Ask from './components/Ask'
import Yes from './components/Yes';


function App() {

  const [isYes, setIsYes] = useState(false);

  const noTexts = [
    "No",
    "Are you sure?",
    "Jolo chips khila dunga 🌶️",
    "Achha koi ni, meetha khila dunga 🍰",
    "Nahi to ek cute cafe date? ☕✨",
    "Arey yaar maan jao na 😭",
    "Ice cream treat pakki 🍦",
    "Pizza party on me 🍕",
    "Movie night karte hain 🎬",
    "Long drive chalte hain 🚗",
    "Coffee meri taraf se ☕",
    "Chocolate bhi dunga 🍫",
    "Shopping bhi kara dunga 🛍️",
    "Bas ek Yes bol do 😏",
    "Itna attitude theek nahi hai 😤",
    "Main achha banda hu 😌",
    "Ek chance to banta hai 😉",
    "Tum mana nahi kar sakte 😈",
    "Dil se socho ❤️",
    "Tumhe pasand aa jaunga 😄",
    "Zyada mat socho 😜",
    "Life boring ho jayegi bina Yes ke 😆",
    "Aesthetic cafe chalenge sach me ☕🌿",
    "Photos bhi click karenge 📸",
    "Reels banayenge 🎥",
    "Street food bhi khayenge 🌮",
    "Gol gappe treat 😋",
    "Tum bas haan bol do",
    "Main sab plan kar lunga 😎",
    "Ek baar try to karo",
    "Tumhe regret nahi hoga 😌",
    "Trust me 😏",
    "Main funny bhi hu 😂",
    "Main cute bhi hu 😌",
    "Combo offer hu 😎",
    "Limited time offer 😜",
    "Last chance!",
    "Final offer 😭",
    "Ab to maan jao yaar",
    "Zidd mat karo 😤",
    "Dil tod doge kya 💔",
    "Main serious hu is baar 😌",
    "Ek choti si haan bol do",
    "Mujhe ignore mat karo 😢",
    "Itna bhi kya na bolna",
    "Tumhare liye kuch bhi 😏",
    "Okay last try…",
    "Sach me last try 😭",
    "Ab to haan bol do please 🙏",
    "Bas ek Yes aur sab set 😎"
  ];

  const [index, setIndex] = useState(0);

  const [yesSize, setYesSize] = useState(18)

  const handleNoClick = () => {
    // change text 
    setIndex((prev) => ((prev + 1) % noTexts.length))

    // Increase yes Button Size 
    setYesSize((prev) => (prev + 5))

  }

  const handleYesClick = () => {
    setIsYes(true);
  }



  return (
    <>

      {
        isYes ? ( <Yes/>
        ) : (

          <div className='flex flex-col mx-auto'>
            <Ask />

            <div className='Buttons flex gap-4 mx-auto'>

              {/* <button className={`bg-green-500 hover:bg-green-800 hover:cursor-pointer text-white px-4 py-2 transition-all duration-200 ease-in-out`}>Yes</button> */}
              <button className="bg-green-500 hover:bg-green-800 text-white px-4 py-2 transition-all duration-200 ease-in-out " onClick={handleYesClick} style={{ fontSize: `${yesSize}px`, padding: `${yesSize / 2}px` }}
              >
                Yes
              </button>
              <button className='bg-red-500 hover:bg-red-800 hover:cursor-pointer text-white px-2 py-2 transition-all duration-200 ease-in-out max-w-s text-wrap' onClick={handleNoClick}> {noTexts[index]} </button>
              {/* <button className='bg-red-500 hover:bg-red-800 text-white px-4 py-2 w-40 text-center' onClick={handleNoClick}> {noTexts[index]} </button> */}
            </div>
          </div>)
      }

    </>
  )
}

export default App
