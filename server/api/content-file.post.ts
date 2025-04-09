import { promises as fs } from 'fs'
import path from 'path'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { path: filePath, content } = body
  
  if (!filePath || !content) {
    throw createError({
      statusCode: 400,
      statusMessage: 'File path and content are required'
    })
  }
  
  // Validate that the path is within the content directory
  if (filePath.includes('..') || !filePath.endsWith('.md')) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid file path'
    })
  }
  
  const fullPath = path.join(process.cwd(), 'content', filePath)
  
  // Ensure the directory exists
  const dirPath = path.dirname(fullPath)
  
  try {
    // Create directory recursively if it doesn't exist
    await fs.mkdir(dirPath, { recursive: true })
    
    // Write the content to the file
    await fs.writeFile(fullPath, content, 'utf-8')
    
    return {
      success: true,
      path: filePath
    }
  } catch (error) {
    console.error(`Error saving file ${filePath}:`, error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to save file'
    })
  }
}) 