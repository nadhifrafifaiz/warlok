"use client";

import { uploadFile } from "@/lib/actions/file";
import Image from "next/image";
import { useState } from "react";

export default function ImageUpload() {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  async function upload() {
    if (selectedImage) {
      let data = await uploadFile({ file: selectedImage });

      console.log(data);
    }
  }

  return (
    <div>
      Image Upload
      {selectedImage instanceof File && (
        <Image
          src={URL.createObjectURL(selectedImage!)}
          alt="Preview"
          width={200}
          height={200}
        />
      )}
      <input
        type="file"
        multiple={true}
        onChange={(event) => setSelectedImage(event.target.files?.[0] || null)}
      />
      <button onClick={upload}>upload</button>
    </div>
  );
}
