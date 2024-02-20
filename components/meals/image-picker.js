'use client';
import classes from './image-picker.module.css';
import { useRef, useState } from 'react';
import Image from 'next/image';

export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState();
  const imageInput = useRef();
  console.log(label, name);

  function handlePickClick() {
    imageInput.current.click();
  }

  function handleImageChange(event) {
    console.log('image name', event.target.files[0].name);
    console.log('The passed event', event);
    const file = event.target.files[0];

    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>No Image selected yet</p>}
          {pickedImage && (
            <Image src={pickedImage} alt="Selected user image" fill />
          )}
        </div>
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInput}
          onChange={handleImageChange}
        />
        <button
          className={classes.button}
          type="button"
          onClick={handlePickClick}
        >
          Choose an Image
        </button>
      </div>
    </div>
  );
}
