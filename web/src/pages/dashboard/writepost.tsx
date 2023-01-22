import React, { useRef, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { DashboardContainer } from '../../components/controller/DashboardContainer';
import axios from 'axios';

export default function WritePost() {
  const [post, setPost] = useState('');
  const [betreff, setBetreff] = useState('');
  const editorRef: any = useRef(null);
  const arr = []
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };
  const submit = async () => {
    await axios.post('http://localhost:4000/posts/create', {
      post,
      betreff,
    });
  };
  const useDarkMode =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-color-scheme: dark)').matches;
  const isSmallScreen =
    typeof window !== 'undefined' &&
    window.matchMedia('(max-width: 1023.5px)').matches;
  return (
    <>
      <DashboardContainer>
        <div className='text-center font-bold text-2xl mt-52'>
          Einen Brief direkt online schreiben und versenden lassen
        </div>
        <div className='bg-[#212426] w-1/2 mx-auto p-10 mt-10'>
          <div>
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
                onChange={(e) => setBetreff(e.target.value)}
              />
            </div>
          </div>

          <div className=''>
            <Editor
              apiKey='e0q79b8c9k5t2zbarra7zzwcei0ma8jb8dddiycjobwtltg2'
              onInit={(evt, editor) => (editorRef.current = editor)}
              initialValue='<p>This is the initial content of the editor.</p>'
              init={{
                plugins:
                  'preview importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount help charmap quickbars emoticons',
                editimage_cors_hosts: ['picsum.photos'],
                menubar: 'file edit view insert format tools table help',
                toolbar:
                  'undo redo | bold italic underline strikethrough | fontfamily fontsize blocks | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl',
                toolbar_sticky: true,
                toolbar_sticky_offset: isSmallScreen ? 102 : 108,
                autosave_ask_before_unload: true,
                autosave_interval: '30s',
                autosave_prefix: '{path}{query}-{id}-',
                autosave_restore_when_empty: false,
                autosave_retention: '2m',
                image_advtab: true,
                setup: function (editor) {
                  editor.on('change', function () {
                    setPost(editor.getContent());
                  });
                },
                link_list: [
                  { title: 'My page 1', value: 'https://www.tiny.cloud' },
                  { title: 'My page 2', value: 'http://www.moxiecode.com' },
                ],
                image_list: [
                  { title: 'My page 1', value: 'https://www.tiny.cloud' },
                  { title: 'My page 2', value: 'http://www.moxiecode.com' },
                ],
                image_class_list: [
                  { title: 'None', value: '' },
                  { title: 'Some class', value: 'class-name' },
                ],
                importcss_append: true,
                file_picker_callback: (callback, value, meta) => {
                  /* Provide file and text for the link dialog */
                  if (meta.filetype === 'file') {
                    callback('https://www.google.com/logos/google.jpg', {
                      text: 'My text',
                    });
                  }

                  /* Provide image and alt text for the image dialog */
                  if (meta.filetype === 'image') {
                    callback('https://www.google.com/logos/google.jpg', {
                      alt: 'My alt text',
                    });
                  }

                  /* Provide alternative source and posted for the media dialog */
                  if (meta.filetype === 'media') {
                    callback('movie.mp4', {
                      source2: 'alt.ogg',
                      poster: 'https://www.google.com/logos/google.jpg',
                    });
                  }
                },
                templates: [
                  {
                    title: 'New Table',
                    description: 'creates a new table',
                    content:
                      '<div class="mceTmpl"><table width="98%%"  border="0" cellspacing="0" cellpadding="0"><tr><th scope="col"> </th><th scope="col"> </th></tr><tr><td> </td><td> </td></tr></table></div>',
                  },
                  {
                    title: 'Starting my story',
                    description: 'A cure for writers block',
                    content: 'Once upon a time...',
                  },
                  {
                    title: 'New list with dates',
                    description: 'New List with dates',
                    content:
                      '<div class="mceTmpl"><span class="cdate">cdate</span><br><span class="mdate">mdate</span><h2>My List</h2><ul><li></li><li></li></ul></div>',
                  },
                ],
                template_cdate_format:
                  '[Date Created (CDATE): %m/%d/%Y : %H:%M:%S]',
                template_mdate_format:
                  '[Date Modified (MDATE): %m/%d/%Y : %H:%M:%S]',
                height: 600,
                image_caption: true,
                quickbars_selection_toolbar:
                  'bold italic | quicklink h2 h3 blockquote quickimage quicktable',
                noneditable_class: 'mceNonEditable',
                toolbar_mode: 'sliding',
                contextmenu: 'link image table',
                skin: !useDarkMode ? 'oxide-dark' : 'oxide',
                content_css: !useDarkMode ? 'dark' : 'default',
                content_style:
                  'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }',
              }}
            />
          </div>
        </div>
        <div className='flex justify-center mt-10'>
          <button
            className='bg-secondary w-96 text-white font-bold py-2 px-4 rounded'
            onClick={submit}
          >
            Send
          </button>
        </div>
      </DashboardContainer>
    </>
  );
}
