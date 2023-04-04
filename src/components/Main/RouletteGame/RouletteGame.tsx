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
      <div className="w-2/12 mt-5 flex justify-center">
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
        //   backgroundColors={[
        //     "#3f297e",
        //     "#175fa9",
        //     "#169ed8",
        //     "#239b63",
        //     "#64b031",
        //     "#efe61f",
        //     "#f7a416",
        //     "#e6471d",
        //     "#dc0936",
        //     "#e5177b",
        //     "#be1180",
        //     "#871f7f"
        //   ]}
          onStopSpinning={() => {
           
          }}
        />
      </div>
    </div>
    </>
    )
}

export default RouletteGame;