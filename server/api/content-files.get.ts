import { promises as fs } from 'fs'
import path from 'path'

export default defineEventHandler(async (event) => {
  const contentDir = path.join(process.cwd(), 'content')
  
  try {
    // Helper function to scan directory recursively
    const scanDir = async (dir: string, prefix = ''): Promise<{ path: string }[]> => {
      const entries = await fs.readdir(dir, { withFileTypes: true })
      const files: { path: string }[] = []
      
      for (const entry of entries) {
        const fullPath = path.join(dir, entry.name)
        const relativePath = path.join(prefix, entry.name)
        
        if (entry.isDirectory()) {
          // Recursively scan subdirectories
          const nestedFiles = await scanDir(fullPath, relativePath)
          files.push(...nestedFiles)
        } else if (entry.name.endsWith('.md')) {
          // Only include Markdown files
          files.push({
            path: relativePath
          })
        }
      }
      
      return files
    }
    
    const files = await scanDir(contentDir)
    
    return files
  } catch (error) {
    console.error('Error scanning content directory:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to list content files'
    })
  }
}) 