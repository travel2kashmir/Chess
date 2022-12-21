import React, {useEffect, useState} from 'react';
import Image from 'next/image'
import axios from 'axios';

function Index() {
  const [image, setImage] = useState()
  const [previewImage, setPreviewImage] = useState()
  useEffect(()=>{
    console.log(image)
  },[image])
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    const reader = new FileReader();
    
    reader.onloadend =() =>{
      setPreviewImage(reader.result);
    }
    reader.readAsDataURL(image)
    formData.append("image", image);
    console.log(formData)
    // fetch("/api/upload", {
    //   method: "POST",
    //   body: formData,
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data);
    //   });
  };
  return (

    <div id="main-content"
            className="bg-gray-200 px-4 pt-24 py-2 relative overflow-y-auto lg:ml-64">
      <form >
        <input
          type="file"
          accept="image/*"
          onChange={(event) => setImage(event?.target?.files[0])}
        /></form>
      <button type="submit" onClick={handleSubmit}>Upload</button>
      <Image
      src={previewImage}
      alt="Picture Demo"
      width={200}
      height={200}
    />
    </div>



  )
}

export default Index