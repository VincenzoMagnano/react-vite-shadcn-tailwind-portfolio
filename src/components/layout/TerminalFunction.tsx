
import AnimatedCode from '../background/AnimatedCode'

const TerminalFunction = () => {
  return (
    <>
        <div className="w-full items-center flex px-6 py-12  lg:p-16 z-10 flex-col w">
        
          <div className="p-8 rounded-xl  bg-gray-300">
            <AnimatedCode
              lines={["function hello() {", '  console.log("Hello!")', "} "]}
              delay={1}
              speed={0.08}
              textColor="text-gray-800"
            />
            
          </div>
          <div>
        </div>
        </div>
    </>
  )
}

export default TerminalFunction
