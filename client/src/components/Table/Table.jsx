import React from 'react'
import { Table } from 'react-bootstrap';
import useFetch from '../../hooks/useFetch';
import { useSelector } from 'react-redux';
import './table.css'

const FileDataRow = ({ file, lines }) => {
  return lines.map(line => (
    <tr key={line.hex}>
      <td>{file}</td>
      <td>{line.text}</td>
      <td>{line.number}</td>
      <td>{line.hex}</td>
    </tr>
  ))
}

const FileListRow = ({ file }) => {
  const getFileInfo = useFetch(`/data?fileName=${file}`)

  const handleData = () => {
    getFileInfo()
  }

  return (
    <tr key={file} onClick={handleData}>
      <td>{file}</td>
    </tr>
  )
}

function TableComponent({ filesData }) {
  const { error } = useSelector(state => state);

  if (error) {
    return <div>Not file found</div>
  }

  return (
    <Table striped bordered size='sm' hover>
      <thead>
        <tr>
          <th>File Name</th>
          {
            !filesData.files && (
              <>
                <th>Text</th>
                <th>Number</th>
                <th>Hex</th>
              </>
            )
          }
        </tr>
      </thead>
      <tbody>
        {
          filesData.files && filesData.files.map((file, index) => (
            <FileListRow key={index} file={file} />
          ))
        }
        {
          (!filesData.files && filesData.length) && filesData.map((file, index) => (
            <FileDataRow key={index} file={file.file} lines={file.lines} />
          ))
        }
        {
          (!filesData.files && !filesData.length) && <FileDataRow file={filesData.file} lines={filesData.lines} />
        }
      </tbody>
    </Table>
  )
}

export default TableComponent