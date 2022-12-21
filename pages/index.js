import React, {useEffect, useState} from 'react';
import Image from 'next/image'

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
            className="bg-gray-200  pt-10 py-2 relative overflow-y-auto ">
     
<div class="flex justify-center mt-8">
    <div class="rounded-lg shadow-xl bg-gray-50 lg:w-3/2">
        <div class="m-4">
            <label class="inline-block mb-2 text-gray-500">Upload
                Image(jpg,png,svg,jpeg)</label>
            <div class="flex items-center justify-center w-full">
                <label class="flex flex-col w-full h-32 border-4 border-dashed hover:bg-gray-100 hover:border-gray-300">
                    <div class="flex flex-col items-center justify-center pt-7">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            class="w-12 h-12 text-gray-400 group-hover:text-gray-600" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                                clip-rule="evenodd" />
                        </svg>
                        <p class="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                            Select a photo</p>
                    </div>
                    <input type="file" class="opacity-0"  onChange={(event) => setImage(event?.target?.files[0])} />
                </label>
            </div>
        </div>
        <div class="flex p-2 space-x-4">
            
            <button class="px-4 py-2 text-white bg-cyan-600 rounded shadow-xl" onClick={handleSubmit}>Upload</button>
        </div>
        <div class="flex p-4 space-x-8">
        <Image
      src={previewImage}
      alt="Picture Demo"
      width={700}
      height={300}
    /></div>
    </div>
</div>
    </div>



  )
}

export default Index