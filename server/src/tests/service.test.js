import { expect } from 'chai'
import { getFileContent, getFilesList, showFiles } from '../services/fileService.js'

/* eslint-disable no-undef */
describe('Service Tests', () => {
  describe('getFileContent', () => {
    it('should return file content', async () => {
      const fileName = 'test3.csv'
      const fileContent = await getFileContent(fileName)
      if (fileContent) {
        expect(fileContent).to.be.a('string')
      } else {
        throw new Error('Failed to fetch file content')
      }
    })
  })

  describe('getFilesList', () => {
    it('should return file list', async () => {
      try {
        const filesList = await getFilesList()
        expect(filesList).to.be.a('object')
        expect(filesList).to.have.property('files')
      } catch (error) {
        throw new Error('Failed to fetch files list')
      }
    })
  })

  describe('showFiles', () => {
    it('should return JSON files', async () => {
      try {
        const parsedFiles = await showFiles()
        expect(parsedFiles).to.be.a('array')
      } catch (error) {
        throw new Error('Failed to parse files')
      }
    })
  })
})
/* eslint-disable no-undef */
