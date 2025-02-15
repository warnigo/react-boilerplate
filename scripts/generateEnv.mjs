import chalk from "chalk"
import fs from "fs/promises"
import path from "path"

const ROOT = process.cwd()
const ENV_SOURCE = path.resolve(ROOT, ".env.example")

const ENV_FILES = {
  development: {
    path: path.join(ROOT, ".env.development"),
    content: `
# Set the Node.js environment (production: for live deployment, development: for local development)
NODE_ENV=development

# Enable or disable bundle analysis (true/false)
ANALYZE=true

# Open bundle analyzer automatically after build (true/false)
OPEN_ANALYZER=true

# Set the mode for bundle analyzer output (static: HTML file, json: JSON file)
ANALYZER_MODE=static
    `.trim(),
  },
  production: {
    path: path.join(ROOT, ".env.production"),
    content: `
# Set the Node.js environment (production: for live deployment, development: for local development)
NODE_ENV=production

# Enable or disable bundle analysis (true/false)
ANALYZE=false

# Open bundle analyzer automatically after build (true/false)
OPEN_ANALYZER=false

# Set the mode for bundle analyzer output (static: HTML file, json: JSON file)
ANALYZER_MODE=static
    `.trim(),
  },
}

/**
 * Reads and merges content from `.env.example` with the specific content.
 *
 * @param {string} examplePath - The path to `.env.example`.
 * @param {string} additionalContent - The environment-specific content.
 * @returns {Promise<string>} - Merged content.
 */
async function mergeContent(examplePath, additionalContent) {
  try {
    const exampleContent = await fs.readFile(examplePath, "utf8")
    return `${exampleContent.trim()}\n\n${additionalContent.trim()}`
  } catch (error) {
    console.error(chalk.red("Error reading .env.example:"), error.message)
    throw error
  }
}

/**
 * Copies the source file to the destination and updates its content.
 *
 * @param {string} destination - The path of the destination file.
 * @param {string} content - The content to write to the file.
 * @returns {Promise<void>}
 */
async function writeFile(destination, content) {
  const prompt = chalk.bgBlue("[WRITE]")
  try {
    await fs.writeFile(destination, content)
    console.info(prompt, chalk.blue(`${destination} created/updated`))
  } catch (error) {
    console.error(chalk.red(`Error writing to file at ${destination}`), error)
    throw error
  }
}

/**
 * Checks if the source file is accessible for reading and writing.
 *
 * @param {string} source - The path of the source file.
 * @throws {Error} If the file is not accessible.
 */
async function checkSourceFileAccess(source) {
  try {
    await fs.access(source, fs.constants.R_OK)
  } catch {
    throw new Error("You don't have permission to read the .env.example file")
  }
}

/**
 * Main function to generate environment files based on input.
 */
async function main() {
  const args = process.argv.slice(2)
  const envArg = args.find((arg) => arg.startsWith("--env="))

  if (!envArg) {
    console.error(chalk.red("Error: No environment specified."))
    console.info(
      chalk.yellow("Usage: node script.js --env=<development|production>"),
    )
    process.exit(1)
  }

  const env = envArg.split("=")[1]
  if (!["development", "production"].includes(env)) {
    console.error(chalk.red("Error: Invalid environment specified."))
    console.info(chalk.yellow("Valid options: development, production"))
    process.exit(1)
  }

  const { path: envPath, content } = ENV_FILES[env]

  try {
    const mergedContent = await mergeContent(ENV_SOURCE, content)
    await writeFile(envPath, mergedContent)
    await checkSourceFileAccess(ENV_SOURCE)

    console.info(
      chalk.green(
        `${env.toUpperCase()} environment file has been generated successfully.`,
      ),
    )
  } catch (error) {
    console.error(chalk.red("An error occurred:"), error.message)
    console.warn(chalk.yellow("Please check your file permissions."))
    process.exit(-1)
  }
}

main().catch((error) => {
  console.error(chalk.red("An unexpected error occurred:"), error)
  process.exit(-1)
})
