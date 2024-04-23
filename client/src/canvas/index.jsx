import { Canvas } from '@react-three/fiber';
import { Environment, Center } from '@react-three/drei';
import Shirt from './Shirt';
import Backdrop from './Backdrop';
import CamaeraRig from './CamaeraRig';

const CanvasModel = () => {
  return (
    <div style={{ width: "55vw", height: "70vh", backgroundColor:'grey' }}>
      <Canvas shadows camera={{ position: [0,0,0], fov: 25}} 
        gl={{ preserveDrawingBuffer: true}} className='w-full max-w-full h-full tranisition-all ease-in c'>
        <ambientLight intensity={0.5}/>
        <Environment preset='city'/>

        <CamaeraRig>
          <Backdrop/>
          <Center>
            <Shirt/>
          </Center>
        </CamaeraRig>
      </Canvas>
    </div>
  )
}

export default CanvasModel;