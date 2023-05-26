# Telegram Admin Forwarder Bot

## Table of content
- [Overview](#overview)
- [Features](#features)
- [Setup](#setup)
- [Usage](#usage)
- [Customization](#customization)
- [Contributing](#contributing)
- [Acknowledgements](#acknowledgements)
- [Contact](#contact)

A Telegram bot that forwards messages sent by an admin to a specified group.

## Overview

The Telegram Admin Forwarder Bot is a bot designed to automatically forward messages sent by an admin in a group to another group specified by the admin. It utilizes the Telegram Bot API and can be customized to suit your needs.

## Features

- Forwards messages sent by the admin to a specified group.
- Sends a notification to the destination group when the bot is added to a new group by the admin.

## Setup

1. Create a new bot using the BotFather on Telegram and obtain the API token.

2. Clone this repository to your local machine:

```bash
git clone https://github.com/yourusername/telegram-admin-forwarder-bot.git
```

3. Install the required dependencies:

```bash
cd telegram-admin-forwarder-bot
npm install
```

4. Open the bot.js file in a text editor.

5. Replace 'BOT_API_TOKEN' with the API token obtained from the BotFather.

6. Replace 'ADMIN_ID' with the Telegram ID of the admin whose messages should be forwarded.

7. Replace 'GROUP_ID' with the ID of the group which you want to forward the messages.

8. Save the changes.

## Usage

1. Make sure the bot is running by executing the following command:

```bash
node bot.js
```

2. Add the bot to the desired group. Only messages sent by the admin will be forwarded.

3. Whenever the admin sends a message in the group, it will be automatically forwarded to the specified group.

## Customization

You can customize the behavior of the bot according to your requirements. Some possible modifications include:

Changing the forwarded message format.

Adding additional checks or conditions before forwarding messages.

Implementing error handling or logging mechanisms.

Feel free to modify the bot.js file and explore the Telegram Bot API documentation for more advanced functionality.

## Contributing

Contributions to this project are welcome! If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## Acknowledgements

-  [Telegram Bot API](https://core.telegram.org/bots/api) - Official API documentation provided by Telegram.
-  [node-telegram-bot-api](https://github.com/yagop/node-telegram-bot-api) - Node.js library for interacting with the Telegram Bot API.

## Contact

For any questions or inquiries, please contact chibundumozia@gmail.com