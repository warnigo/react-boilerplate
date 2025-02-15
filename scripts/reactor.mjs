/**
 * Project Reactor
 * This script handles different execution modes (--dev, --build, --start)
 * and displays appropriate ASCII art banners and status messages in the console.
 */

// Banner font style: "ANSI Shadow"
// ASCII Art Banner generated using a stylized, blocky font.
// For customization and creating your own ASCII art banners, use online tools like Figlet or similar ASCII art generators.
// Recommended tool: [https://patorjk.com/software/taag/#p=display&f=ANSI%20Shadow&t=Type%20Something%20] (supports various fonts, including "ANSI Shadow" and more)

const asciiBanner = `
██████╗  ██████╗ ██╗██╗     ███████╗██████╗ ██████╗ ██╗      █████╗ ████████╗███████╗
██╔══██╗██╔═══██╗██║██║     ██╔════╝██╔══██╗██╔══██╗██║     ██╔══██╗╚══██╔══╝██╔════╝
██████╔╝██║   ██║██║██║     █████╗  ██████╔╝██████╔╝██║     ███████║   ██║   █████╗  
██╔══██╗██║   ██║██║██║     ██╔══╝  ██╔══██╗██╔═══╝ ██║     ██╔══██║   ██║   ██╔══╝  
██████╔╝╚██████╔╝██║███████╗███████╗██║  ██║██║     ███████╗██║  ██║   ██║   ███████╗
╚═════╝  ╚═════╝ ╚═╝╚══════╝╚══════╝╚═╝  ╚═╝╚═╝     ╚══════╝╚═╝  ╚═╝   ╚═╝   ╚══════╝
`

const args = process.argv.slice(2)

/**
 * Displays a stylized status message in the console based on the mode.
 * @param {string} mode - The current mode ('dev', 'build', or 'start').
 */
function printStatus(mode) {
  console.clear()
  console.log(asciiBanner)

  console.log(
    "\n\x1b[36m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\x1b[0m",
  )

  // Display message based on the mode
  switch (mode) {
    case "dev":
      console.info("\x1b[32m💻 Development mode active\x1b[0m")
      console.info("\x1b[36mURL: http://localhost:5173\x1b[0m")
      break
    case "build":
      console.info("\x1b[33m🔨 Building project...\x1b[0m")
      break
    case "start":
      console.info("\x1b[34m🚀 Build completed! Starting the project...\x1b[0m")
      break
    default:
      console.info(
        "\x1b[31m⚠️ Unknown mode! Please use --dev, --build, or --start\x1b[0m",
      )
  }

  // Closing separator line
  console.info(
    "\x1b[36m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\x1b[0m\n",
  )
}

/**
 * Determines the mode based on command line arguments and prints the corresponding status.
 */
function main() {
  if (args.includes("--dev")) {
    printStatus("dev")
  } else if (args.includes("--build")) {
    printStatus("build")
  } else if (args.includes("--start")) {
    printStatus("start")
  } else {
    printStatus("unknown")
  }
}

// Execute the main function
main()
