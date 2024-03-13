import { showFiles, getFilesList } from '../services/fileService.js'

export const getFiles = async (req, res) => {
  const { fileName } = req.query

  try {
    const resp = await showFiles()
    if (fileName) {
      const fileData = resp.find(f => f.file === fileName)
      if (fileData) {
        return res.status(200).json(fileData)
      }
      return res.status(404).send({ msg: 'File not found' })
    }
    return res.status(200).json(resp)
  } catch (error) {
    return res.status(500).send({ msg: `Internal server ${error}` })
  }
}

export const getAllFiles = async (_, res) => {
  try {
    const resp = await getFilesList()
    return res.status(200).json(resp)
  } catch (error) {
    return res.status(500).send({ msg: `Internal server ${error}` })
  }
}
