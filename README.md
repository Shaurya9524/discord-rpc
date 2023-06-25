# Discord RPC

This project provides a simple and straightforward way to integrate Discord Rich Presence into your applications. You can display customised status messages and details to showcase the activity of your application to users on Discord.

## Authors

- **Shaurya Chauhan** - [shadowop1575](https://github.com/shadowop1575)

## Getting Started

### Installation

1. Clone the project repository:

```bash
git clone https://github.com/shadowop1575/discord-rpc.git
```

2. Install the project dependencies:

```bash
npm install
```

3. Setup the environment variables:

Create a .env file in the root directory of your project and add the following line, replacing <discord_client_id> with your actual Discord client ID:

```bash
clientId=<discord_client_id>
```

4. Start the application:

```bash
npm start
```

## Usage

### Configuration

The configuration files are located at the [./src/config](src/config) directory. Customise the configuration files to suit your needs. The configuration files are as follows:


| File                            | Description                                             |
| ------------------------------- | ------------------------------------------------------- |
| [data.js](src/config/data.js)   | Contains the details to be displayed in the Discord RPC |
| [links.js](src/config/links.js) | Contains the links to be displayed in the Discord RPC   |

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.