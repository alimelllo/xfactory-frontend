import Header from "../../GeneralComponents/Header";
import { Wheel } from 'react-custom-roulette'


const RouletteGame = () => {


    const data = [
        { option: 'Thrios 1.3x', style: { backgroundColor: '#16372d' ,textColor: 'gray' }},
        { option: 'Duos 1.2x', style: { backgroundColor: '#391f19', textColor: 'gray' } },
        { option: 'oops! 0', style: { backgroundColor: '#16372d', textColor: 'gray' } },
        { option: 'Quads 1.4x', style: { backgroundColor: '#391f19', textColor: 'gray' } },
        { option: 'Silver 2x', style: { backgroundColor: '#16372d', textColor: 'gray' } },
        { option: 'oops! 0', style: { backgroundColor: '#391f19', textColor: 'gray' } },
        { option: 'Gold 3x', style: { backgroundColor: '#16372d', textColor: 'gray' } },
        { option: 'Next Round', style: { backgroundColor: '#391f19', textColor: 'gray' } },
        { option: 'Royal 3x', style: { backgroundColor: '#16372d', textColor: 'gray' } },
        { option: 'oops! 0', style: { backgroundColor: '#391f19', textColor: 'gray' } },
      ]

    return (
    <>
    <Header/>

    <div className="w-full flex justify-center">
      <div className="w-[28.5rem] h-[28.5rem] rounded-[50%] boxshadow4 mt-[5rem]  flex justify-center border-[5px] border-[solid] border-[#5e5e5e]">
      <Wheel
          mustStartSpinning={true}
          spinDuration={0.8}
          prizeNumber={7}
          data={data}
          outerBorderColor={"#331710"}
          outerBorderWidth={15}
          innerBorderColor={"white"}
          radiusLineColor={"#4f4f4f"}
          radiusLineWidth={5}
          textColors={["#f5f5f5"]}
          textDistance={55}
          fontSize={20}
          onStopSpinning={() => { }}
        />
      </div>
    </div>
    </>
    )
}

export default RouletteGame;