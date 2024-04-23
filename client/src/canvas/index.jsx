import { Canvas } from '@react-three/fiber';
import { Environment, Center } from '@react-three/drei';
import Shirt from './Shirt';
import Backdrop from './Backdrop';
import CamaeraRig from './CamaeraRig';

const CanvasModel = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5}/>
      <Environment preset='city'/>

      <CamaeraRig>
        {/* <Backdrop/> */}
        <Center>
          <Shirt/>
        </Center>
      </CamaeraRig>
    </Canvas>
  )
}

export default CanvasModel;