function App() {
  return (
    <div className="h-screen flex flex-col justify-center space-y-10 bg-blue-400 p-10">
    
      <div className="flex flex-col sm:flex-row space-y-20 sm:space-y-0 sm:space-x-20 justify-center">
        <div className="w-10 h-10 rounded-full bg-red-500 border border-black"/>
        <div className="w-10 h-10 rounded-full bg-green-500 border border-black"/>
        <div className="w-10 h-10 rounded-full bg-yellow-500 border border-black"/>
      </div>
      
      <div className="h-20 grid grid-cols-12">
        <div className="w-full h-full bg-red-500 col-span-6"/>
        <div className="w-full h-full bg-green-500 col-span-6"/>
        <div className="w-full h-full bg-yellow-500 col-span-6"/>
      </div>

    </div>
  )
}

export default App
