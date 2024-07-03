import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from '../../../assets/logo.png'
import useStorage from "../../../hooks/useStorage";

const ValidId = () => {
  const { startUpload } = useStorage();  
  const navigate = useNavigate();
  const [frontValidId, setFrontValidId] = useState<File | null>(null);
  const [backValidId, setBackValidId] = useState<File | null>(null);
  const [error, setError] = useState<string>("");

  const frontValidInputRef = useRef<HTMLInputElement>(null);
  const backValidInputRef = useRef<HTMLInputElement>(null);

  const handleFront = () => {
    if (frontValidInputRef.current) {
      frontValidInputRef.current.click();
    }
  };

  const handleBack = () => {
    if (backValidInputRef.current) {
      backValidInputRef.current.click();
    }
  };

  const handleFrontFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setFrontValidId(files[0]);
      setError("");
    }
  };

  const handleBackFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setBackValidId(files[0]);
      setError("");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!frontValidId || !backValidId) {
      setError("Both front and back images must be uploaded.");
      return;
    }

    try {
      await startUpload(frontValidId);
      await startUpload(backValidId);
      navigate("/overview"); 
    } catch (error) {
      alert("Failed to upload files: " + error);
    }
  };

  return (
    <section className="grid w-screen mt-[2rem] justify-center items-center">
      <div className='border-b-2 border-[--bg-color] flex items-center'>
        <img src={logo} alt='' className='w-[4rem] py-4'/>
        <p className='font-display font-bold text-2xl'>Crownstone</p>
      </div>
      <div className="max-w-[40rem] grid justify-center items-center my-6">
        <p className="font-bold text-2xl font-display">Upload Valid Id </p>
        <p className="font-display py-4">User to upload valid identity front and back card</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 justify-center items-center">
        <div>
          <p className="py-4 font-display">Front View</p>
          {frontValidId ? (
            <div className="flex justify-center">
              <img
                src={URL.createObjectURL(frontValidId)}
                alt="Uploaded file"
                className="w-[20rem] h-[10rem] border-dashed border-2 border-sky-900"
                onClick={handleFront}
                aria-label="Uploaded image"
              />
            </div>
          ) : (
            <div
              onClick={handleFront}
              className="w-[20rem] h-[10rem] grid justify-center items-center border-dashed border-2 border-sky-200"
              aria-label="Click to add image"
              role="button"
            >
              <p className="font-display">Click to add image</p>
            </div>
          )}
          <input
            type="file"
            id="frontValidId"
            name="frontValidId"
            accept="image/*"
            onChange={handleFrontFile}
            style={{ display: "none" }}
            ref={frontValidInputRef}
            aria-label="File upload input"
          />
        </div>

        <div>
          <p className="py-4 font-display">Back View</p>
          {backValidId ? (
            <div className="flex justify-center">
              <img
                src={URL.createObjectURL(backValidId)}
                alt="Uploaded file"
                className="w-[20rem] h-[10rem] border-dashed border-2 border-sky-900"
                onClick={handleBack}
                aria-label="Uploaded image"
              />
            </div>
          ) : (
            <div
              onClick={handleBack}
              className="w-[20rem] h-[10rem] grid justify-center items-center border-dashed border-2 border-sky-200"
              aria-label="Click to add image"
              role="button"
            >
              <p className="font-display">Click to add image</p>
            </div>
          )}
          <input
            type="file"
            id="backValidId"
            name="backValidId"
            accept="image/*"
            onChange={handleBackFile}
            style={{ display: "none" }}
            ref={backValidInputRef}
            aria-label="File upload input"
          />
        </div>
      </div>
      {error && (
        <div className="text-red-500 text-center mt-4">
          {error}
        </div>
      )}
      <div className="flex justify-center items-center">
        <button
          onClick={handleSubmit}
          type="submit"
          className="w-[20rem] flex justify-center items-center py-2 mt-10 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium bg-[--button-color]"
        >
          Submit
        </button>
      </div>
    </section>
  );
};

export default ValidId;
