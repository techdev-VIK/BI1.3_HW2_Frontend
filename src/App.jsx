import AddHotelForm from "./components/HotelForm";
import Hotels from "./components/Hotels";
import HotelTitle from "./components/HotelTitle";


function App() {

  return (
    <>
      <div>
          <AddHotelForm />
          <Hotels />
          <HotelTitle titles='Sunset Resort' />
      </div>
    </>
  )
}

export default App
