import ButtonGradient from './assets/svg/ButtonGradient';
import Button from './components/Button'
function App() {
  return (
    <>
      <h1 className='text-amber-400 '>Aryan Chauhan</h1>
       <div className='pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden'>
        <Button className="mt-10" href="#login">
          Something
        </Button>
       </div>
      <ButtonGradient />
    </>
  )
}

export default App
