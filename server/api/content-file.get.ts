import { promises as fs } from 'fs'
import path from 'path'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const filePath = query.path as string
  
  if (!filePath) {
    throw createError({
      statusCode: 400,
      statusMessage: 'File path is required'
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
  
  try {
    const content = await fs.readFile(fullPath, 'utf-8')
    
    return {
      path: filePath,
      content
    }
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to read file'
    })
  }
}) 