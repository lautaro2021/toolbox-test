import { csvToJson } from '../utils/functions.js'

const BASE_URL = 'https://echo-serv.tbxnet.com/v1/secret'
const API_KEY = 'Bearer aSuperSecretKey'

export const getFileContent = async (fileName) => {
  try {
    const response = await fetch(`${BASE_URL}/file/${fileName}`, {
      headers: { Authorization: API_KEY }
    })

    if (!response.ok) {
      throw new Error(response.status)
    }

    const data = response.text()
    return data
  } catch (error) {
    return null
  }
}

export const getFilesList = async () => {
  try {
    const response = await fetch(`${BASE_URL}/files`, {
      headers: { Authorization: API_KEY }
    })

    if (!response.ok) {
      throw new Error(response.status)
    }

    const data = await response.json()
    return data
  } catch (error) {
    throw new Error(error)
  }
}

export const showFiles = async () => {
  try {
    const files = await getFilesList()

    const parsedFiles = []

    await Promise.all(files.files.map(async (file) => {
      const fileContent = await getFileContent(file)
      if (!fileContent) return
      parsedFiles.push({
        file,
        lines: csvToJson(fileContent)
      })
    }))

    return parsedFiles
  } catch (error) {
    throw new Error(error)
  }
}
