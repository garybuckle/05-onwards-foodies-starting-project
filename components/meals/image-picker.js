'use client';
import classes from './image-picker.module.css';
import { useRef } from 'react';
export default function ImagePicker({ label, name }) {
  const imageInput = useRef();

  function imagePickerHandler() {
    imageInput.current.click();
  }

  return (
    <div className={classes.picker}>
      <label htmlFor="image">{label}</label>
      <div className={classes.controls}>
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name="name"
          ref={imageInput}
        />
        <button
          className={classes.button}
          type="button"
          onClick={imagePickerHandler}
        >
          Choose an Image
        </button>
      </div>
    </div>
  );
}
