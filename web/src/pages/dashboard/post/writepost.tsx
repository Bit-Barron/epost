import { Editor } from '@tinymce/tinymce-react';
import axios from 'axios';
import React, { useRef, useState } from 'react';
import { DashboardContainer } from '../../../components/controller/DashboardContainer';
import SignaturePad from 'react-signature-canvas';

function Post() {
  const [post, setPost] = useState('');
  const [betreff, setBetreff] = useState('');
  const editorRef: any = useRef(null);

  let sigPad: any = useRef({});

  const useDarkMode =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-color-scheme: dark)').matches;
  const isSmallScreen =
    typeof window !== 'undefined' &&
    window.matchMedia('(max-width: 1023.5px)').matches;

  const submit = async () => {
    await axios.post('http://localhost:4000/posts/create', {
      post,
      betreff,
    });
  };

  function clear() {
    sigPad.current.clear();
  }

  return (
    <>
      <DashboardContainer>
        <div className='text-center font-bold text-2xl mt-20'>
          Einen Brief direkt online schreiben und versenden lassen
        </div>
        <div className='w-1/2 mx-auto p-10 mt-10 '>
          <div className=''>
            <div className='flex'>
              <label
                htmlFor='small-input'
                className='block mb-2 text-sm mt-2 font-medium text-gray-900 dark:text-white'
              >
                Betreff
              </label>
              <input
                type='text'
                id='small-input'
                className='block w-1/2 p-2 focus:outline-none ml-5 text-gray-900 border border-gray-300 bg-gray-50 sm:text-xs mb-10'
              />
            </div>
          </div>

          <div className='w-[1000px]'>
            <div className=''>
              {/* <page size='A4'></page>
              <page size='A4'></page>
              <page size='A4' layout='landscape'></page>
              <page size='A5'></page>
              <page size='A5' layout='landscape'></page>
              <page size='A3'></page>
              <page size='A3' layout='landscape'></page> */}
              <div className='flex'>
                <div className='mt-3'>
                  <div className='mt-3'>Unterschrift(optional)</div>
                  <SignaturePad
                    ref={sigPad}
                    penColor='black'
                    backgroundColor='white'
                  />
                  <div
                    onClick={clear}
                    className='text-gray-500 mt-2 hover:underline hover:text-secondary hover:duration-150'
                  >
                    Unterschrift zutücksetzen
                  </div>
                </div>
              </div>
            </div>
            <div className='flex justify-center mt-10'>
              <button className='bg-gray-700 mr-10 w-96 h-10 text-white font-bold py-2 px-4 rounded'>
                Vorschau anzeigen
              </button>
              <button
                className='bg-secondary h-10 w-96 text-white font-bold py-2 px-4 rounded'
                onClick={submit}
              >
                BRIEF ZUR POSTBOX HINZUFÜGEN
              </button>
            </div>
          </div>
        </div>
      </DashboardContainer>
    </>
  );
}
export default Post;
