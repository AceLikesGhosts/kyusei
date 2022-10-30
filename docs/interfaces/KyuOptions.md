[kyusei](../README.md) / [Exports](../modules.md) / KyuOptions

# Interface: KyuOptions

## Hierarchy

- `ClientOptions`

  ↳ **`KyuOptions`**

## Table of contents

### Properties

- [allowedMentions](KyuOptions.md#allowedmentions)
- [closeTimeout](KyuOptions.md#closetimeout)
- [commands](KyuOptions.md#commands)
- [events](KyuOptions.md#events)
- [failIfNotExists](KyuOptions.md#failifnotexists)
- [intents](KyuOptions.md#intents)
- [jsonTransformer](KyuOptions.md#jsontransformer)
- [logger](KyuOptions.md#logger)
- [makeCache](KyuOptions.md#makecache)
- [mobile](KyuOptions.md#mobile)
- [partials](KyuOptions.md#partials)
- [presence](KyuOptions.md#presence)
- [rest](KyuOptions.md#rest)
- [shardCount](KyuOptions.md#shardcount)
- [shards](KyuOptions.md#shards)
- [sweepers](KyuOptions.md#sweepers)
- [waitGuildTimeout](KyuOptions.md#waitguildtimeout)
- [ws](KyuOptions.md#ws)

## Properties

### allowedMentions

• `Optional` **allowedMentions**: `MessageMentionOptions`

#### Inherited from

ClientOptions.allowedMentions

#### Defined in

node_modules/discord.js/typings/index.d.ts:4393

___

### closeTimeout

• `Optional` **closeTimeout**: `number`

#### Inherited from

ClientOptions.closeTimeout

#### Defined in

node_modules/discord.js/typings/index.d.ts:4391

___

### commands

• `Optional` **commands**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commandList?` | { `base`: [`CommandBase`](CommandBase.md) ; `data`: [`CommandData`](CommandData.md)  }[] |
| `path?` | `string` |

#### Defined in

[src/structures/client/Kyu.ts:11](https://github.com/AceLikesGhosts/kyusei/blob/9543d54/src/structures/client/Kyu.ts#L11)

___

### events

• `Optional` **events**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `disableKyuEvents?` | `boolean` |
| `eventList?` | { `base`: [`EventBase`](EventBase.md) ; `data`: [`EventData`](EventData.md)  }[] |
| `path?` | `string` |

#### Defined in

[src/structures/client/Kyu.ts:15](https://github.com/AceLikesGhosts/kyusei/blob/9543d54/src/structures/client/Kyu.ts#L15)

___

### failIfNotExists

• `Optional` **failIfNotExists**: `boolean`

#### Inherited from

ClientOptions.failIfNotExists

#### Defined in

node_modules/discord.js/typings/index.d.ts:4395

___

### intents

• **intents**: `BitFieldResolvable`<``"Guilds"`` \| ``"GuildMembers"`` \| ``"GuildBans"`` \| ``"GuildEmojisAndStickers"`` \| ``"GuildIntegrations"`` \| ``"GuildWebhooks"`` \| ``"GuildInvites"`` \| ``"GuildVoiceStates"`` \| ``"GuildPresences"`` \| ``"GuildMessages"`` \| ``"GuildMessageReactions"`` \| ``"GuildMessageTyping"`` \| ``"DirectMessages"`` \| ``"DirectMessageReactions"`` \| ``"DirectMessageTyping"`` \| ``"MessageContent"`` \| ``"GuildScheduledEvents"`` \| ``"AutoModerationConfiguration"`` \| ``"AutoModerationExecution"``, `number`\>

#### Inherited from

ClientOptions.intents

#### Defined in

node_modules/discord.js/typings/index.d.ts:4397

___

### jsonTransformer

• `Optional` **jsonTransformer**: (`obj`: `unknown`) => `unknown`

#### Type declaration

▸ (`obj`): `unknown`

##### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `unknown` |

##### Returns

`unknown`

#### Inherited from

ClientOptions.jsonTransformer

#### Defined in

node_modules/discord.js/typings/index.d.ts:4402

___

### logger

• `Optional` **logger**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `default?` | `boolean` |
| `instance` | `any` |

#### Defined in

[src/structures/client/Kyu.ts:20](https://github.com/AceLikesGhosts/kyusei/blob/9543d54/src/structures/client/Kyu.ts#L20)

___

### makeCache

• `Optional` **makeCache**: `CacheFactory`

#### Inherited from

ClientOptions.makeCache

#### Defined in

node_modules/discord.js/typings/index.d.ts:4392

___

### mobile

• `Optional` **mobile**: `boolean`

#### Defined in

[src/structures/client/Kyu.ts:10](https://github.com/AceLikesGhosts/kyusei/blob/9543d54/src/structures/client/Kyu.ts#L10)

___

### partials

• `Optional` **partials**: `Partials`[]

#### Inherited from

ClientOptions.partials

#### Defined in

node_modules/discord.js/typings/index.d.ts:4394

___

### presence

• `Optional` **presence**: `PresenceData`

#### Inherited from

ClientOptions.presence

#### Defined in

node_modules/discord.js/typings/index.d.ts:4396

___

### rest

• `Optional` **rest**: `Partial`<`RESTOptions`\>

#### Inherited from

ClientOptions.rest

#### Defined in

node_modules/discord.js/typings/index.d.ts:4401

___

### shardCount

• `Optional` **shardCount**: `number`

#### Inherited from

ClientOptions.shardCount

#### Defined in

node_modules/discord.js/typings/index.d.ts:4390

___

### shards

• `Optional` **shards**: `number` \| `number`[] \| ``"auto"``

#### Inherited from

ClientOptions.shards

#### Defined in

node_modules/discord.js/typings/index.d.ts:4389

___

### sweepers

• `Optional` **sweepers**: `SweeperOptions`

#### Inherited from

ClientOptions.sweepers

#### Defined in

node_modules/discord.js/typings/index.d.ts:4399

___

### waitGuildTimeout

• `Optional` **waitGuildTimeout**: `number`

#### Inherited from

ClientOptions.waitGuildTimeout

#### Defined in

node_modules/discord.js/typings/index.d.ts:4398

___

### ws

• `Optional` **ws**: `WebSocketOptions`

#### Inherited from

ClientOptions.ws

#### Defined in

node_modules/discord.js/typings/index.d.ts:4400
