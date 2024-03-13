import { expect } from 'chai'
import { getFileContent, getFilesList, showFiles } from '../services/service.js'

/* eslint-disable no-undef */
describe('Service Tests', () => {
  describe('getFileContent', () => {
    it('should return file content', async () => {
      const fileName = 'test2.csv'
      const fileContent = await getFileContent(fileName)
      expect(fileContent).to.be.a('string')
    })
  })

  describe('getFilesList', () => {
    it('should return file list', async () => {
      const filesList = await getFilesList()
      expect(filesList).to.be.a('object')
      expect(filesList).to.have.property('files')
    })
  })

  describe('showFiles', () => {
    it('should return JSON files', async () => {
      const parsedFiles = await showFiles()
      expect(parsedFiles).to.be.a('array')
    })
  })
})
/* eslint-disable no-undef */
