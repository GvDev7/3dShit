import React from 'react';
import CustomButton from './CustomButton';

const FilePicker = ({ file, setFile, readFile}) => {
  return (
    <div className='absolute left-full ml-3' style={{bottom: '215px', left: '105px', backgroundColor: 'lightgrey', height: '280px', opacity: .6}}>
      <div className="flex-1 flex flex-col">
        <input type="file" id='file-upload' accept='image/*' onChange={(e) => setFile(e.target.files[0])}/>
      </div>
    </div>
  )
}

export default FilePicker