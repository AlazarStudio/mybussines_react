import React, { useEffect, useState } from 'react';
import { useInput } from 'react-admin';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, false] }],
    [{ font: [] }],
    ['bold', 'italic', 'underline', 'strike'],
    [{ color: [] }, { background: [] }],
    [{ script: 'sub' }, { script: 'super' }],
    [{ list: 'ordered' }, { list: 'bullet' }],
    [{ indent: '-1' }, { indent: '+1' }],
    [{ direction: 'rtl' }],
    ['link', 'image', 'video'],
    ['clean'],
  ],
};

const formats = [
  'header', 'font', 'bold', 'italic', 'underline', 'strike',
  'color', 'background', 'script', 'list', 'bullet', 'indent',
  'direction', 'link', 'image', 'video'
];

const MyRichTextInput = ({ source, label }) => {
  const {
    field: { value, onChange },
  } = useInput({ source });

  const [internalValue, setInternalValue] = useState('');

  // Инициализация значения при загрузке
  useEffect(() => {
    if (value !== internalValue) {
      setInternalValue(value || '');
    }
  }, [value]);

  const handleChange = (content) => {
    setInternalValue(content);
    onChange(content);
  };

  return (
    <div style={{ marginBottom: '1em', width: "100%" }}>
      <label style={{ display: 'block', marginBottom: 8 }}>{label}</label>
      <ReactQuill
        theme="snow"
        value={internalValue}
        onChange={handleChange}
        modules={modules}
        formats={formats}
      />
    </div>
  );
};

export default MyRichTextInput;
