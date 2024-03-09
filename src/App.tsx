import { Accessibility, Check } from "lucide-react";

function App() {
  return (
    <div className={"flex flex-col w-full h-full bg-white"}>
      <header className='w-full p-4 border-b border-b-emerald-500 bg-emerald-100'>
        <div className='flex items-end justify-start gap-1'>
          <div className='font-mono italic font-semibold text-2xl text-emerald-600 border-b-4 border-brand'>
            Logo
          </div>
          <Accessibility absoluteStrokeWidth className="w-8 h-8 text-emerald-600 border-b-4 border-brand stroke-[2.5px]" />
        </div>
      </header>
      <div className='w-full h-full p-6'>
        <div
          className={
            "rounded-md border border-emerald-500 p-4 bg-emerald-100 w-full lg:max-w-80 not-has-checked:border-dashed"
          }
        >
          <div className='flex items-center justify-between'>
            <p className={"font-mono font-semibold"}>Card item</p>

            <label htmlFor='checkbox' className=''>
              <div className='grid items-center justify-center'>
                <input
                  id={"checkbox"}
                  className='peer appearance-none w-4 h-4 row-start-1 col-start-1 visible checked:invisible rounded bg-white border-emerald-500 checked:text-emerald-400 checked:bg-emerald-400'
                  type='checkbox'
                />
                <Check
                  absoluteStrokeWidth
                  className='h-4 w-4 bg-emerald-500 rounded text-white stroke-[3px] row-start-1 col-start-1 invisible peer-checked:visible'
                />
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
