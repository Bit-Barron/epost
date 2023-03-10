import axios from 'axios';
import { handleClientScriptLoad } from 'next/script';
import React, { useState } from 'react';
import { DashboardContainer } from '../../../components/container/DashboardContainer';

const Uploadpost = ({}) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelect = (event: any) => {
    setSelectedFile(event.target.files[0]);
  };

  const FileUploadButton = async (event: any) => {
    const file = selectedFile;

    if (!file) {
      console.log('No file selected');
      return;
    }

    console.log(file);

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('/letter/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response);
    } catch (err: unknown) {
      console.log(err);
    }
  };
  return (
    <DashboardContainer>
      <div className="text-center font-bold text-2xl mt-40">
        Mit LXP GO clever Rechnungen, Mahnungen und Mailings online versenden
      </div>
      <div className="w-1/2 mx-auto mt-10">
        <label className="flex justify-center w-full p-10 px-4 transition bg-transparent border-2 border-gray-600 border-dashed rounded-md appearance-none cursor-pointer hover:border-secondary focus:outline-none">
          <span className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
            ></svg>
            <span className="text-gray-600 font-bold text-2xl">
              Hier klicken,
              <span className="font-semibold">
                um die PDF-Datei(en) auszuwählen
              </span>
              <br />
              <span className="font-semibold ml-10">
                Oder per <span className="font-bold">Drag & Drop</span> ablegen
              </span>
            </span>
          </span>
          <input
            type="file"
            name="file_upload"
            className="hidden"
            onChange={handleFileSelect}
          />
        </label>
      </div>
      <div className="mx-auto mt-6">
        <button className="bg-transparent w-96 p-2 border-dashed border-2 border-secondary rounded-full text-white">
          ALLE DATEIN ENTFERNEN
        </button>
      </div>

      <div className="flex justify-center mt-5">
        <button
          className="bg-secondary text-white font-bold py-2 px-4 rounded"
          onClick={FileUploadButton}
        >
          BRIEF ZUR POSTBOX HINZUFÜGEN
        </button>
      </div>
    </DashboardContainer>
  );
};

export default Uploadpost;
