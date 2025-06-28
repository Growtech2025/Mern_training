import video from "./assets/video.mp4"
function Home() {
  return (
    <div className="w-[100%] bg-slate-200 ">
      <div className="bg-white rounded-br-[100px] rounded-bl-[100px]">
        <div className="w-[40%] m-auto mt-[100px] text-center">
          <div>
            <div className="text-xl font-bold text-blue-950"><h1>The PayPal App</h1></div>
          </div>
          <div>
            <p className="text-[80px] font-bold text-blue-950 leading-none">Pay easy, fast,
              and secure.</p>
          </div>
          <div className="mt-[30px]">
            <button className='w-[160px] border-2 bg-blue-900  rounded-[20px] px-2 py-2 text-white hover:bg-blue-400'>Get the App</button>
          </div>

        </div>
        <div className="w-[80%] m-auto mt-[29px]">
          <video className="w-full"
            autoPlay
            muted
            loop
            playsInline>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>


  

      </div>
      {/* third part */}
      <div className="w-[100%] h-[700px] bg-blue-800 mt-10">
        <div className="w-[80%]">
          <div className="w-[80%] m-auto leading-none font-bold">
            <div className="w-[60%]">
              <h1 className="text-[60px] text-white">Your way to pay, with PayPal</h1>
            </div>
          </div>
          <div className="w-[90%] mt-[100px] flex gap-3 m-auto">
            <div className=" rounded-[40px] w-[1200px] h-[400px] bg-white   text-center text-[40px] font-bold leading-none"><div className="w-[90%] m-auto text-blue-950 mt-[70px]">Checkout with few clicks</div> </div>
            <div className=" rounded-[40px] w-[1200px] h-[400px] bg-white  text-center text-[40px] font-bold leading-none"><div className="w-[90%] m-auto text-blue-950 mt-[70px]">Confidently send Payments</div></div>
            <div className=" rounded-[40px] w-[1200px] h-[400px] bg-white  text-center text-[40px] font-bold leading-none"><div className="w-[90%] m-auto text-blue-950 mt-[70px]">Create a paypal me </div></div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Home