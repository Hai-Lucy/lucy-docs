# ⚙ Admin

These commands can only be used by members who have **MANAGE_SERVER** permission


### Set Prefix

- **Description**: Set bot prefix
- **Usage**: `lucy/setprefix <newPrefix>`

### Embed

- **Description**: Send an embed message
- **Usage**: `lucy/embed <#channel>`

### Automoderation


By default, Auto moderation events are ignored for members who have the following permissions since they are assumed to be channel/server moderators

**KICK_MEMBERS**, **BAN_MEMBERS**, **MANAGE_GUILD**, **MANAGE_MESSAGES**

`lucy/automodconfig debug on` disables this


|                                                 |                                                                |
| ----------------------------------------------- | -------------------------------------------------------------- |
| **lucy/automodconfig status**                       | view configuration status                                      |
| **lucy/automodconfig strikes \<amount>**            | set the maximum number of strikes before taking an action      |
| **lucy/automodconfig action \<timeout\|mute\|ban>** | set the action to be performed after receiving maximum strikes |
| **lucy/automodconfig debug \<on\|off>**             | turns on automod for messages sent by admins and moderators    |
| **lucy/automodconfig whitelist**                    | list of channels that are whitelisted                          |
| **lucy/automodconfig whitelistadd \<channel>**      | add a channel to the whitelist                                 |
| **lucy/automodconfig whitelistremove \<channel>**   | remove a channel from the whitelist                            |

**Settings**

| Name                                          | Description                                                                 |
| --------------------------------------------- | --------------------------------------------------------------------------- |
| **lucy/anti ghostping \<on\|off>**                | logs ghost mentions in your server (Requires `/modlog` channel to be setup) |
| **lucy/anti spam \<on\|off>**                     | enable or disable antispam detection                                        |
| **lucy/anti massmention \<on\|off> \[threshold]** | enable or disable massmention detection (default threshold is 3 mentions]   |

**Autodelete**

| Name                                   | Description                                                                 |
| -------------------------------------- | --------------------------------------------------------------------------- |
| **lucy/autodelete attachments \<on\|off>** | logs ghost mentions in your server (Requires `/modlog` channel to be setup) |
| **lucy/autodelete invites \<on\|off>**     | allow or disallow sending discord invites in message                        |
| **lucy/automod links \<on\|off>**          | allow or disallow sending links in message                                  |
| **lucy/automod maxlines \<amount>**        | sets maximum lines allowed per message                                      |


Each time a member tries to break the automated rule, he/she **receives a strike**. After receiving the maximum number of strikes (default 10), the moderation action (default TIMEOUT) is performed on them


### Channels Counters

- **Description:** setup counter channel in the guild
- **Usage**: `lucy/counter <counter_type> <name>`
- **Available counters** **types**
  - USERS: counts the total server member count (members + bots)
  - MEMBERS: counts the total member count
  - BOTS: counts the total number of bots

### Warnings

- **lucy/maxwarn limit \<amount>**: set max warnings a member can receive before taking an action
- **lucy/maxwarn action \<timeout\|kick\|ban>**: set the action to be performed after receiving maximum warnings

### Moderation Logging

- **Description**: enable or disable moderation logs
- **Usage**: `lucy/modlog <channel|off>`


Moderation logging enable logging of all **moderation actions** and **automod events**


### Flag Translations

_Enabling this feature will allow members to simply react to any message with a country flag emoji, translating that message content to regional language_

- **Description**: configure flag translation in the server
- **Usage**: `lucy/flagtr <on|off>`

lucy/[](/images/assets/image.png)

### Auto Role

- **Description**: setup role to be given when a member joins the server
- **Usage**: `lucy/autorole <role|off>`

### Greeting


**lucy/welcome status \<on\|off>**

- enable or disable welcome message

**lucy/welcome channel \<#channel>**

- configure channel where welcome messages must be sent

**lucy/welcome preview**

- send a welcome preview

**lucy/welcome desc \<content>**

- set welcome embed description

**lucy/welcome footer \<content>**

- set welcome embed footer

**lucy/welcome thumbnail \<on\|off>**

- enable or disable welcome message thumbnail

**lucy/welcome color \<#hex>**

- set welcome embed color

**lucy/welcome image \<image-url>**

- set welcome embed image



**lucy/farewell status \<on\|off>**

- enable or disable farewell message

**lucy/farewell channel \<#channel>**

- configure channel where farewell messages must be sent

**lucy/farewell preview**

- send a farewell preview

**lucy/farewell desc \<content>**

- set farewell embed description

**lucy/farewell footer \<content>**

- set farewell embed footer

**lucy/farewell thumbnail \<on\|off>**

- enable or disable farewell message thumbnail

**lucy/farewell color \<#hex>**

- set farewell embed color

**lucy/farewell image \<#image-url>**

- set farewell embed image


#### Allowed Content Replacements

- \n : New Line&#x20;
- {server} : Server Name&#x20;
- {count} : Server member count&#x20;
- {member:nick} : Member Nickname&#x20;
- {member:name} : Member Name&#x20;
- {member:dis} : Member Discriminator&#x20;
- {member:tag} : Member Tag&#x20;
- {member:avatar} : Member Avatar URL&#x20;
- {inviter:name} : Inviter Name&#x20;
- {inviter:tag} : Inviter Tag&#x20;
- {invites} : Inviter Invites


### Reaction Roles

**Create Reaction Role**

- **Usage**: `lucy/addrr <#channel> <messageId> <role> <emote>`
- **Description**: setup reaction role for the specified message

**Remove Reaction Roles**

- **Usage**: `lucy/removerr <#channel> <messageId>`
- **Description**: remove configured reaction for the specified message

### Ticketing

**Configuration**

- **lucy/ticket setup \<#channel>**: setup a new ticket message
- **lucy/ticket log \<#channel>**: setup log channel for tickets
- **lucy/ticket limit \<amount>**: set maximum number of concurrent open tickets
- **lucy/ticket closeall**: close all open tickets

**Ticket Channel Commands**

- **lucy/ticket close**: close the ticket
- **lucy/ticket add \<userId\|roleId>**: add user/role to the ticket
- **lucy/ticket remove \<userId\|roleId>**: remove user/role from the ticket

**Ticket Category Commands**

- **lucy/ticketcat list**: list all ticket categories
- **lucy/ticketcat add \<category> \| \<name>**: create a new ticket category
- **lucy/ticketcat remove \<category>**: remove a ticket category
