import React from 'react';
import { DownloadOutlined } from '@ant-design/icons';
import { Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';


function Homepage() {
  
const { Dragger } = Upload;
const props = {
    name: 'file',
    multiple: true,
    action: 'http://localhost:3000',
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },

     defaultFileList:  [
        {
          uid: '1',
          name: 'xxx.png',
          status: 'done',
          response: 'Server Error 500', // custom error message to show
          url: 'http://www.baidu.com/xxx.png',
        },
        {
          uid: '2',
          name: 'yyy.png',
          status: 'done',
          url: 'http://www.baidu.com/yyy.png',
        },
        {
          uid: '3',
          name: 'zzz.png',
          status: 'error',
          response: 'Server Error 500', // custom error message to show
          url: 'http://www.baidu.com/zzz.png',
        },
      ],
      showUploadList: {
        showDownloadIcon: true,
        downloadIcon: <DownloadOutlined/>,
        showRemoveIcon: true,
      },
    };
   



 function handleRemoveItems()  {
    
    window.location.reload(false);
};



return (
    <div  style={{
        display: "Grid",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
    }}>
      
  <Dragger {...props}>
    <p className="ant-upload-drag-icon">
      <InboxOutlined />
    </p>
    <p className="ant-upload-text">Click or drag file to this area to upload</p>
    <p className="ant-upload-hint">
      Support for a single or bulk upload. Strictly prohibit from uploading company data or other
      band files
    </p>
  </Dragger>,
  <div>
    <button onClick={handleRemoveItems}>Delete All</button>
  </div>


  </div>
)


}

export default Homepage