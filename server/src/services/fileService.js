import { csvToJson } from '../utils/index.js'
import request from '../utils/request.js'

const HOSTNAME = 'echo-serv.tbxnet.com'
const PATH = '/v1/secret'
const API_KEY = 'Bearer aSuperSecretKey'

export const getFileContent = async (fileName) => {
  const options = {
    hostname: HOSTNAME,
    path: `${PATH}/file/${fileName}`,
    headers: {
      Authorization: API_KEY
    }
  }

  try {
    const data = await request(options)
    return data
  } catch {
    return null
  }
}

export const getFilesList = async () => {
  const options = {
    hostname: HOSTNAME,
    path: `${PATH}/files`,
    headers: {
      Authorization: API_KEY
    }
  }
  try {
    const data = await request(options)
    return JSON.parse(data)
  } catch (error) {
    throw new Error(error)
  }
}

export const showFiles = async () => {
  try {
    const filesData = await getFilesList()
    const files = filesData.files

    const parsedFiles = []
    for (const file of files) {
      const fileContent = await getFileContent(file)
      if (fileContent) {
        parsedFiles.push({
          file,
          lines: csvToJson(fileContent)
        })
      }
    }
    return parsedFiles
  } catch (error) {
    throw new Error(error)
  }
}
