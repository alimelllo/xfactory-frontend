import payment from '../../../images/payment.webp'

const PlayForm = () => {
    
    return (
        <div className="flex flex-row md:flex-col justify-around md:justify-center text-[#c7c7c7] h-screen">
            
             <div className='w-[50%] md:w-full md:pt-[2rem] h-screen md:h-[50%] border-r-[3px] border-r-solid border-r-[#1f1f1f]  boxshadow2 bg-[#171717]'>
                <div className='flex flex-col justify-around h-[80%] pl-5'>
                  <div className='flex flex-row'><p className='text-[2rem] md:text-[1.5rem] text-center text-[#7c3719da] w-[4rem] h-[4rem] md:w-[3rem] md:h-[3rem] boxshadow2 pt-1 md:pt-0 rounded-[50%] border-[3px] border-solid border-[#c35425da]'>1x</p><p className='text-[#595959] pt-1 md:pt-3 px-2 text-[1.5rem] md:text-[0.9rem]'>----- One Pair card multipy your amount to <span className='text-[#a73f12da] text-[2rem] md:text-[1.5rem] pl-3 mt-1 md:hidden'>1.2 x</span></p></div>
                  <div className='flex flex-row'><p className='text-[2rem] md:text-[1.5rem] text-center text-[#106a81da] w-[4rem] h-[4rem] md:w-[3rem] md:h-[3rem] boxshadow2 pt-1 md:pt-0 rounded-[50%] border-[3px] border-solid border-[#25a3c3da]'>2x</p><p className='text-[#595959] pt-1 md:pt-3 px-2 text-[1.5rem] md:text-[0.9rem]'>----- Two Pair card multipy your amount to <span className='text-[#0f6593da] text-[2rem] md:text-[1.5rem] pl-3 mt-1 md:hidden'>1.5 x</span></p></div>
                  <div className='flex flex-row'><p className='text-[2rem] md:text-[1.5rem] text-center text-[#20762eda] w-[4rem] h-[4rem] md:w-[3rem] md:h-[3rem] pt-1 md:pt-0 rounded-[50%] boxshadow2 border-[3px] border-solid border-[#43c358da]'>3x</p><p className='text-[#595959] pt-1 md:pt-3 px-2 text-[1.5rem] md:text-[0.9rem]'>----- Three Pair card multipy your amount to <span className='text-[#1e9232da] text-[2rem] md:text-[1.5rem] pl-3 mt-1 md:hidden'>2 x</span></p></div>
                </div>
            </div>
            
           
           
           
          
           
            <div className='w-[55%] md:w-full flex flex-col justify-center md:justify-start h-[75%] md:h-[85%]'>
             
              <p className='text-[#a3a3a3] font-[600]  text-center mb-[5rem] md:mb-[2rem] md:mt-5 text-[2rem] md:text-[1.5rem]'>Card Game</p>

              <div className='flex flex-row'>
                <div className='w-[70%] text-center text-[2rem] md:text-[1.5rem]'>
                   <p className='w-[70%] mt-[4rem] md:mt-2 py-5 pb-6 mx-auto rounded-[10px] bg-[#0e0e0e] boxshadow2'>Balance : 385 <span className='text-[green]'>$</span></p>
                </div> 
                <div className='w-[30%] md:w-[28%] mt-3 md:mt-0 mr-5 mx-auto opacity-[0.8]'><img src={payment} /></div> 
              </div>
            
              <div className='flex flex-row mt-5'>
                <div className='w-[70%] text-center text-[2rem] md:text-[1.5rem]'>
                   <input className='w-[70%] py-5 mx-auto pb-6 rounded-[10px] bg-[#0e0e0e] boxshadow2 pl-[2rem] md:pl-[1rem] outline-none placeholder:text-[#414141]' placeholder='Amount'></input>
                </div> 
                <div className='w-[30%] mx-auto '><p className=' w-[5rem] pt-5 text-[1.5rem] h-[5rem] rounded-[50%] boxshadow2  font-[600] bg-[#a93e01] hover:bg-[#9f2f0f] text-center ml-[3rem] md:ml-0 cursor-pointer hover:scale-105 transition-all duration-200 '>Play</p></div> 
              </div>

            </div>
        </div>
    )
}

export default PlayForm;