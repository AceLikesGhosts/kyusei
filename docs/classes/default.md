[kyusei](../README.md) / [Exports](../modules.md) / default

# Class: default<Ready\>

**`Description`**

Kyu Client, an extension of a normal Discord.JS {Client}

**`See`**

## Type parameters

| Name | Type |
| :------ | :------ |
| `Ready` | extends `boolean` = `boolean` |

## Hierarchy

- `Client`<`Ready`\>

  ↳ **`default`**

## Table of contents

### Constructors

- [constructor](default.md#constructor)

### Properties

- [application](default.md#application)
- [channels](default.md#channels)
- [commands](default.md#commands)
- [guilds](default.md#guilds)
- [logger](default.md#logger)
- [options](default.md#options)
- [opts](default.md#opts)
- [readyTimestamp](default.md#readytimestamp)
- [rest](default.md#rest)
- [shard](default.md#shard)
- [sweepers](default.md#sweepers)
- [token](default.md#token)
- [useKyuEvents](default.md#usekyuevents)
- [user](default.md#user)
- [users](default.md#users)
- [voice](default.md#voice)
- [ws](default.md#ws)
- [captureRejectionSymbol](default.md#capturerejectionsymbol)
- [captureRejections](default.md#capturerejections)
- [defaultMaxListeners](default.md#defaultmaxlisteners)
- [errorMonitor](default.md#errormonitor)

### Accessors

- [emojis](default.md#emojis)
- [readyAt](default.md#readyat)
- [uptime](default.md#uptime)

### Methods

- [addListener](default.md#addlistener)
- [destroy](default.md#destroy)
- [emit](default.md#emit)
- [eventNames](default.md#eventnames)
- [fetchGuildPreview](default.md#fetchguildpreview)
- [fetchGuildTemplate](default.md#fetchguildtemplate)
- [fetchGuildWidget](default.md#fetchguildwidget)
- [fetchInvite](default.md#fetchinvite)
- [fetchPremiumStickerPacks](default.md#fetchpremiumstickerpacks)
- [fetchSticker](default.md#fetchsticker)
- [fetchVoiceRegions](default.md#fetchvoiceregions)
- [fetchWebhook](default.md#fetchwebhook)
- [findCommands](default.md#findcommands)
- [findEvents](default.md#findevents)
- [generateInvite](default.md#generateinvite)
- [getMaxListeners](default.md#getmaxlisteners)
- [init](default.md#init)
- [isJson](default.md#isjson)
- [isReady](default.md#isready)
- [listenerCount](default.md#listenercount)
- [listeners](default.md#listeners)
- [login](default.md#login)
- [off](default.md#off)
- [on](default.md#on)
- [once](default.md#once)
- [prependListener](default.md#prependlistener)
- [prependOnceListener](default.md#prependoncelistener)
- [publishCommands](default.md#publishcommands)
- [rawListeners](default.md#rawlisteners)
- [registerOurHandlers](default.md#registerourhandlers)
- [removeAllListeners](default.md#removealllisteners)
- [removeListener](default.md#removelistener)
- [setMaxListeners](default.md#setmaxlisteners)
- [shouldLog](default.md#shouldlog)
- [toJSON](default.md#tojson)
- [getEventListeners](default.md#geteventlisteners)
- [listenerCount](default.md#listenercount-1)
- [on](default.md#on-1)
- [once](default.md#once-1)
- [setMaxListeners](default.md#setmaxlisteners-1)

## Constructors

### constructor

• **new default**<`Ready`\>(`opts`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Ready` | extends `boolean` = `boolean` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`KyuOptions`](../interfaces/KyuOptions.md) |

#### Overrides

Client&lt;Ready\&gt;.constructor

#### Defined in

[src/structures/client/Kyu.ts:59](https://github.com/AceLikesGhosts/kyusei/blob/9543d54/src/structures/client/Kyu.ts#L59)

## Properties

### application

• **application**: `If`<`Ready`, `ClientApplication`, ``null``\>

#### Inherited from

Client.application

#### Defined in

node_modules/discord.js/typings/index.d.ts:771

___

### channels

• **channels**: `ChannelManager`

#### Inherited from

Client.channels

#### Defined in

node_modules/discord.js/typings/index.d.ts:772

___

### commands

• **commands**: ``null`` \| `Collection`<`string`, [`SharedData`](../interfaces/SharedData.md)\>

#### Defined in

[src/structures/client/Kyu.ts:55](https://github.com/AceLikesGhosts/kyusei/blob/9543d54/src/structures/client/Kyu.ts#L55)

___

### guilds

• **guilds**: `GuildManager`

#### Inherited from

Client.guilds

#### Defined in

node_modules/discord.js/typings/index.d.ts:774

___

### logger

• **logger**: `undefined` \| [`ILogger`](../interfaces/ILogger.md)

#### Defined in

[src/structures/client/Kyu.ts:56](https://github.com/AceLikesGhosts/kyusei/blob/9543d54/src/structures/client/Kyu.ts#L56)

___

### options

• **options**: `Omit`<`ClientOptions`, ``"intents"``\> & { `intents`: `IntentsBitField`  }

#### Inherited from

Client.options

#### Defined in

node_modules/discord.js/typings/index.d.ts:775

___

### opts

• **opts**: [`KyuOptions`](../interfaces/KyuOptions.md)

#### Defined in

[src/structures/client/Kyu.ts:54](https://github.com/AceLikesGhosts/kyusei/blob/9543d54/src/structures/client/Kyu.ts#L54)

___

### readyTimestamp

• **readyTimestamp**: `If`<`Ready`, `number`, ``null``\>

#### Inherited from

Client.readyTimestamp

#### Defined in

node_modules/discord.js/typings/index.d.ts:777

___

### rest

• **rest**: `REST`

#### Inherited from

Client.rest

#### Defined in

node_modules/discord.js/typings/index.d.ts:394

___

### shard

• **shard**: ``null`` \| `ShardClientUtil`

#### Inherited from

Client.shard

#### Defined in

node_modules/discord.js/typings/index.d.ts:779

___

### sweepers

• **sweepers**: `Sweepers`

#### Inherited from

Client.sweepers

#### Defined in

node_modules/discord.js/typings/index.d.ts:778

___

### token

• **token**: `If`<`Ready`, `string`, ``null`` \| `string`\>

#### Inherited from

Client.token

#### Defined in

node_modules/discord.js/typings/index.d.ts:780

___

### useKyuEvents

• `Private` **useKyuEvents**: `boolean` = `true`

#### Defined in

[src/structures/client/Kyu.ts:57](https://github.com/AceLikesGhosts/kyusei/blob/9543d54/src/structures/client/Kyu.ts#L57)

___

### user

• **user**: `If`<`Ready`, `ClientUser`, ``null``\>

#### Inherited from

Client.user

#### Defined in

node_modules/discord.js/typings/index.d.ts:782

___

### users

• **users**: `UserManager`

#### Inherited from

Client.users

#### Defined in

node_modules/discord.js/typings/index.d.ts:783

___

### voice

• **voice**: `ClientVoiceManager`

#### Inherited from

Client.voice

#### Defined in

node_modules/discord.js/typings/index.d.ts:784

___

### ws

• **ws**: `WebSocketManager`

#### Inherited from

Client.ws

#### Defined in

node_modules/discord.js/typings/index.d.ts:785

___

### captureRejectionSymbol

▪ `Static` `Readonly` **captureRejectionSymbol**: typeof [`captureRejectionSymbol`](default.md#capturerejectionsymbol)

#### Inherited from

Client.captureRejectionSymbol

#### Defined in

node_modules/@types/node/ts4.8/events.d.ts:328

___

### captureRejections

▪ `Static` **captureRejections**: `boolean`

Sets or gets the default captureRejection value for all emitters.

#### Inherited from

Client.captureRejections

#### Defined in

node_modules/@types/node/ts4.8/events.d.ts:333

___

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: `number`

#### Inherited from

Client.defaultMaxListeners

#### Defined in

node_modules/@types/node/ts4.8/events.d.ts:334

___

### errorMonitor

▪ `Static` `Readonly` **errorMonitor**: typeof [`errorMonitor`](default.md#errormonitor)

This symbol shall be used to install a listener for only monitoring `'error'`
events. Listeners installed using this symbol are called before the regular
`'error'` listeners are called.

Installing a listener using this symbol does not change the behavior once an
`'error'` event is emitted, therefore the process will still crash if no
regular `'error'` listener is installed.

#### Inherited from

Client.errorMonitor

#### Defined in

node_modules/@types/node/ts4.8/events.d.ts:327

## Accessors

### emojis

• `get` **emojis**(): `BaseGuildEmojiManager`

#### Returns

`BaseGuildEmojiManager`

#### Inherited from

Client.emojis

#### Defined in

node_modules/discord.js/typings/index.d.ts:773

___

### readyAt

• `get` **readyAt**(): `If`<`Ready`, `Date`, ``null``\>

#### Returns

`If`<`Ready`, `Date`, ``null``\>

#### Inherited from

Client.readyAt

#### Defined in

node_modules/discord.js/typings/index.d.ts:776

___

### uptime

• `get` **uptime**(): `If`<`Ready`, `number`, ``null``\>

#### Returns

`If`<`Ready`, `number`, ``null``\>

#### Inherited from

Client.uptime

#### Defined in

node_modules/discord.js/typings/index.d.ts:781

## Methods

### addListener

▸ **addListener**(`eventName`, `listener`): [`default`](default.md)<`Ready`\>

Alias for `emitter.on(eventName, listener)`.

**`Since`**

v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`default`](default.md)<`Ready`\>

#### Inherited from

Client.addListener

#### Defined in

node_modules/@types/node/ts4.8/events.d.ts:354

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

Client.destroy

#### Defined in

node_modules/discord.js/typings/index.d.ts:786

___

### emit

▸ **emit**<`K`\>(`event`, ...`args`): `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `ClientEvents` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `K` |
| `...args` | `ClientEvents`[`K`] |

#### Returns

`boolean`

#### Inherited from

Client.emit

#### Defined in

node_modules/discord.js/typings/index.d.ts:812

▸ **emit**<`S`\>(`event`, ...`args`): `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends `string` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Exclude`<`S`, keyof `ClientEvents`\> |
| `...args` | `unknown`[] |

#### Returns

`boolean`

#### Inherited from

Client.emit

#### Defined in

node_modules/discord.js/typings/index.d.ts:813

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Returns an array listing the events for which the emitter has registered
listeners. The values in the array are strings or `Symbol`s.

```js
const EventEmitter = require('events');
const myEE = new EventEmitter();
myEE.on('foo', () => {});
myEE.on('bar', () => {});

const sym = Symbol('symbol');
myEE.on(sym, () => {});

console.log(myEE.eventNames());
// Prints: [ 'foo', 'bar', Symbol(symbol) ]
```

**`Since`**

v6.0.0

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

Client.eventNames

#### Defined in

node_modules/@types/node/ts4.8/events.d.ts:669

___

### fetchGuildPreview

▸ **fetchGuildPreview**(`guild`): `Promise`<`GuildPreview`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `guild` | `GuildResolvable` |

#### Returns

`Promise`<`GuildPreview`\>

#### Inherited from

Client.fetchGuildPreview

#### Defined in

node_modules/discord.js/typings/index.d.ts:787

___

### fetchGuildTemplate

▸ **fetchGuildTemplate**(`template`): `Promise`<`GuildTemplate`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `template` | `string` |

#### Returns

`Promise`<`GuildTemplate`\>

#### Inherited from

Client.fetchGuildTemplate

#### Defined in

node_modules/discord.js/typings/index.d.ts:789

___

### fetchGuildWidget

▸ **fetchGuildWidget**(`guild`): `Promise`<`Widget`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `guild` | `GuildResolvable` |

#### Returns

`Promise`<`Widget`\>

#### Inherited from

Client.fetchGuildWidget

#### Defined in

node_modules/discord.js/typings/index.d.ts:794

___

### fetchInvite

▸ **fetchInvite**(`invite`, `options?`): `Promise`<`Invite`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `invite` | `string` |
| `options?` | `ClientFetchInviteOptions` |

#### Returns

`Promise`<`Invite`\>

#### Inherited from

Client.fetchInvite

#### Defined in

node_modules/discord.js/typings/index.d.ts:788

___

### fetchPremiumStickerPacks

▸ **fetchPremiumStickerPacks**(): `Promise`<`Collection`<`string`, `StickerPack`\>\>

#### Returns

`Promise`<`Collection`<`string`, `StickerPack`\>\>

#### Inherited from

Client.fetchPremiumStickerPacks

#### Defined in

node_modules/discord.js/typings/index.d.ts:792

___

### fetchSticker

▸ **fetchSticker**(`id`): `Promise`<`Sticker`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`<`Sticker`\>

#### Inherited from

Client.fetchSticker

#### Defined in

node_modules/discord.js/typings/index.d.ts:791

___

### fetchVoiceRegions

▸ **fetchVoiceRegions**(): `Promise`<`Collection`<`string`, `VoiceRegion`\>\>

#### Returns

`Promise`<`Collection`<`string`, `VoiceRegion`\>\>

#### Inherited from

Client.fetchVoiceRegions

#### Defined in

node_modules/discord.js/typings/index.d.ts:790

___

### fetchWebhook

▸ **fetchWebhook**(`id`, `token?`): `Promise`<`Webhook`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `token?` | `string` |

#### Returns

`Promise`<`Webhook`\>

#### Inherited from

Client.fetchWebhook

#### Defined in

node_modules/discord.js/typings/index.d.ts:793

___

### findCommands

▸ `Private` **findCommands**(`dir?`): `Promise`<`void`\>

**`Description`**

Recursively loops over a directory, and finds each `@Command(...)` instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dir?` | `string` | The path to the directory to recursively look through to load every command. |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/structures/client/Kyu.ts:95](https://github.com/AceLikesGhosts/kyusei/blob/9543d54/src/structures/client/Kyu.ts#L95)

___

### findEvents

▸ `Private` **findEvents**(`dir?`): `Promise`<`void`\>

**`Description`**

Recursively loops over a directory, and finds each `@Event(...)` instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dir?` | `string` | The path to the directory to recursively look through to load every command. |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/structures/client/Kyu.ts:140](https://github.com/AceLikesGhosts/kyusei/blob/9543d54/src/structures/client/Kyu.ts#L140)

___

### generateInvite

▸ **generateInvite**(`options?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `InviteGenerationOptions` |

#### Returns

`string`

#### Inherited from

Client.generateInvite

#### Defined in

node_modules/discord.js/typings/index.d.ts:795

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

Returns the current max listener value for the `EventEmitter` which is either
set by `emitter.setMaxListeners(n)` or defaults to [defaultMaxListeners](default.md#defaultmaxlisteners).

**`Since`**

v1.0.0

#### Returns

`number`

#### Inherited from

Client.getMaxListeners

#### Defined in

node_modules/@types/node/ts4.8/events.d.ts:526

___

### init

▸ **init**(`token`): `string`

**`Description`**

Starts the process of finding events, commands, our registering events if applicable, and then logging in to Discord.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `token` | `string` | The Discord bot token to login with. |

#### Returns

`string`

The token

#### Defined in

[src/structures/client/Kyu.ts:222](https://github.com/AceLikesGhosts/kyusei/blob/9543d54/src/structures/client/Kyu.ts#L222)

___

### isJson

▸ `Private` **isJson**(`data`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |

#### Returns

`boolean`

#### Defined in

[src/structures/client/Kyu.ts:269](https://github.com/AceLikesGhosts/kyusei/blob/9543d54/src/structures/client/Kyu.ts#L269)

___

### isReady

▸ **isReady**(): this is Client<true\>

#### Returns

this is Client<true\>

#### Inherited from

Client.isReady

#### Defined in

node_modules/discord.js/typings/index.d.ts:797

___

### listenerCount

▸ **listenerCount**(`eventName`): `number`

Returns the number of listeners listening to the event named `eventName`.

**`Since`**

v3.2.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event being listened for |

#### Returns

`number`

#### Inherited from

Client.listenerCount

#### Defined in

node_modules/@types/node/ts4.8/events.d.ts:616

___

### listeners

▸ **listeners**(`eventName`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
console.log(util.inspect(server.listeners('connection')));
// Prints: [ [Function] ]
```

**`Since`**

v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Inherited from

Client.listeners

#### Defined in

node_modules/@types/node/ts4.8/events.d.ts:539

___

### login

▸ **login**(`token?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `token?` | `string` |

#### Returns

`Promise`<`string`\>

#### Inherited from

Client.login

#### Defined in

node_modules/discord.js/typings/index.d.ts:796

___

### off

▸ **off**<`K`\>(`event`, `listener`): [`default`](default.md)<`Ready`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `ClientEvents` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `K` |
| `listener` | (...`args`: `ClientEvents`[`K`]) => `Awaitable`<`void`\> |

#### Returns

[`default`](default.md)<`Ready`\>

#### Inherited from

Client.off

#### Defined in

node_modules/discord.js/typings/index.d.ts:815

▸ **off**<`S`\>(`event`, `listener`): [`default`](default.md)<`Ready`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends `string` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Exclude`<`S`, keyof `ClientEvents`\> |
| `listener` | (...`args`: `any`[]) => `Awaitable`<`void`\> |

#### Returns

[`default`](default.md)<`Ready`\>

#### Inherited from

Client.off

#### Defined in

node_modules/discord.js/typings/index.d.ts:816

___

### on

▸ **on**<`K`\>(`event`, `listener`): [`default`](default.md)<`Ready`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `ClientEvents` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `K` |
| `listener` | (...`args`: `ClientEvents`[`K`]) => `Awaitable`<`void`\> |

#### Returns

[`default`](default.md)<`Ready`\>

#### Inherited from

Client.on

#### Defined in

node_modules/discord.js/typings/index.d.ts:800

▸ **on**<`S`\>(`event`, `listener`): [`default`](default.md)<`Ready`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends `string` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Exclude`<`S`, keyof `ClientEvents`\> |
| `listener` | (...`args`: `any`[]) => `Awaitable`<`void`\> |

#### Returns

[`default`](default.md)<`Ready`\>

#### Inherited from

Client.on

#### Defined in

node_modules/discord.js/typings/index.d.ts:801

___

### once

▸ **once**<`K`\>(`event`, `listener`): [`default`](default.md)<`Ready`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `ClientEvents` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `K` |
| `listener` | (...`args`: `ClientEvents`[`K`]) => `Awaitable`<`void`\> |

#### Returns

[`default`](default.md)<`Ready`\>

#### Inherited from

Client.once

#### Defined in

node_modules/discord.js/typings/index.d.ts:806

▸ **once**<`S`\>(`event`, `listener`): [`default`](default.md)<`Ready`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends `string` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Exclude`<`S`, keyof `ClientEvents`\> |
| `listener` | (...`args`: `any`[]) => `Awaitable`<`void`\> |

#### Returns

[`default`](default.md)<`Ready`\>

#### Inherited from

Client.once

#### Defined in

node_modules/discord.js/typings/index.d.ts:807

___

### prependListener

▸ **prependListener**(`eventName`, `listener`): [`default`](default.md)<`Ready`\>

Adds the `listener` function to the _beginning_ of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`and `listener` will result in the `listener` being added, and called, multiple
times.

```js
server.prependListener('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`Since`**

v6.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

[`default`](default.md)<`Ready`\>

#### Inherited from

Client.prependListener

#### Defined in

node_modules/@types/node/ts4.8/events.d.ts:634

___

### prependOnceListener

▸ **prependOnceListener**(`eventName`, `listener`): [`default`](default.md)<`Ready`\>

Adds a **one-time**`listener` function for the event named `eventName` to the _beginning_ of the listeners array. The next time `eventName` is triggered, this
listener is removed, and then invoked.

```js
server.prependOnceListener('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`Since`**

v6.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

[`default`](default.md)<`Ready`\>

#### Inherited from

Client.prependOnceListener

#### Defined in

node_modules/@types/node/ts4.8/events.d.ts:650

___

### publishCommands

▸ **publishCommands**(`opts`): `Promise`<`void`\>

**`Description`**

Publishes slash commands, using a long list of options.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `Object` | The options to publish the commands with. |
| `opts.clientId?` | `string` | - |
| `opts.global?` | `boolean` | - |
| `opts.guilds?` | `Object` | - |
| `opts.guilds.selective` | `Object` | - |
| `opts.guilds.selective.id` | `string` | - |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/structures/client/Kyu.ts:237](https://github.com/AceLikesGhosts/kyusei/blob/9543d54/src/structures/client/Kyu.ts#L237)

___

### rawListeners

▸ **rawListeners**(`eventName`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`,
including any wrappers (such as those created by `.once()`).

```js
const emitter = new EventEmitter();
emitter.once('log', () => console.log('log once'));

// Returns a new Array with a function `onceWrapper` which has a property
// `listener` which contains the original listener bound above
const listeners = emitter.rawListeners('log');
const logFnWrapper = listeners[0];

// Logs "log once" to the console and does not unbind the `once` event
logFnWrapper.listener();

// Logs "log once" to the console and removes the listener
logFnWrapper();

emitter.on('log', () => console.log('log persistently'));
// Will return a new Array with a single function bound by `.on()` above
const newListeners = emitter.rawListeners('log');

// Logs "log persistently" twice
newListeners[0]();
emitter.emit('log');
```

**`Since`**

v9.4.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Inherited from

Client.rawListeners

#### Defined in

node_modules/@types/node/ts4.8/events.d.ts:569

___

### registerOurHandlers

▸ `Private` **registerOurHandlers**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[src/structures/client/Kyu.ts:188](https://github.com/AceLikesGhosts/kyusei/blob/9543d54/src/structures/client/Kyu.ts#L188)

___

### removeAllListeners

▸ **removeAllListeners**<`K`\>(`event?`): [`default`](default.md)<`Ready`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `ClientEvents` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `K` |

#### Returns

[`default`](default.md)<`Ready`\>

#### Inherited from

Client.removeAllListeners

#### Defined in

node_modules/discord.js/typings/index.d.ts:821

▸ **removeAllListeners**<`S`\>(`event?`): [`default`](default.md)<`Ready`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends `string` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `Exclude`<`S`, keyof `ClientEvents`\> |

#### Returns

[`default`](default.md)<`Ready`\>

#### Inherited from

Client.removeAllListeners

#### Defined in

node_modules/discord.js/typings/index.d.ts:822

___

### removeListener

▸ **removeListener**(`eventName`, `listener`): [`default`](default.md)<`Ready`\>

Removes the specified `listener` from the listener array for the event named`eventName`.

```js
const callback = (stream) => {
  console.log('someone connected!');
};
server.on('connection', callback);
// ...
server.removeListener('connection', callback);
```

`removeListener()` will remove, at most, one instance of a listener from the
listener array. If any single listener has been added multiple times to the
listener array for the specified `eventName`, then `removeListener()` must be
called multiple times to remove each instance.

Once an event is emitted, all listeners attached to it at the
time of emitting are called in order. This implies that any`removeListener()` or `removeAllListeners()` calls _after_ emitting and _before_ the last listener finishes execution
will not remove them from`emit()` in progress. Subsequent events behave as expected.

```js
const myEmitter = new MyEmitter();

const callbackA = () => {
  console.log('A');
  myEmitter.removeListener('event', callbackB);
};

const callbackB = () => {
  console.log('B');
};

myEmitter.on('event', callbackA);

myEmitter.on('event', callbackB);

// callbackA removes listener callbackB but it will still be called.
// Internal listener array at time of emit [callbackA, callbackB]
myEmitter.emit('event');
// Prints:
//   A
//   B

// callbackB is now removed.
// Internal listener array [callbackA]
myEmitter.emit('event');
// Prints:
//   A
```

Because listeners are managed using an internal array, calling this will
change the position indices of any listener registered _after_ the listener
being removed. This will not impact the order in which listeners are called,
but it means that any copies of the listener array as returned by
the `emitter.listeners()` method will need to be recreated.

When a single function has been added as a handler multiple times for a single
event (as in the example below), `removeListener()` will remove the most
recently added instance. In the example the `once('ping')`listener is removed:

```js
const ee = new EventEmitter();

function pong() {
  console.log('pong');
}

ee.on('ping', pong);
ee.once('ping', pong);
ee.removeListener('ping', pong);

ee.emit('ping');
ee.emit('ping');
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`Since`**

v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`default`](default.md)<`Ready`\>

#### Inherited from

Client.removeListener

#### Defined in

node_modules/@types/node/ts4.8/events.d.ts:494

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`default`](default.md)<`Ready`\>

By default `EventEmitter`s will print a warning if more than `10` listeners are
added for a particular event. This is a useful default that helps finding
memory leaks. The `emitter.setMaxListeners()` method allows the limit to be
modified for this specific `EventEmitter` instance. The value can be set to`Infinity` (or `0`) to indicate an unlimited number of listeners.

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`Since`**

v0.3.5

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`default`](default.md)<`Ready`\>

#### Inherited from

Client.setMaxListeners

#### Defined in

node_modules/@types/node/ts4.8/events.d.ts:520

___

### shouldLog

▸ `Private` **shouldLog**(): `boolean`

**`Description`**

Basic function to see weither or not the client should log, returns a boolean.

#### Returns

`boolean`

Weither or not the client should log information.

#### Defined in

[src/structures/client/Kyu.ts:80](https://github.com/AceLikesGhosts/kyusei/blob/9543d54/src/structures/client/Kyu.ts#L80)

___

### toJSON

▸ **toJSON**(): `unknown`

#### Returns

`unknown`

#### Inherited from

Client.toJSON

#### Defined in

node_modules/discord.js/typings/index.d.ts:798

___

### getEventListeners

▸ `Static` **getEventListeners**(`emitter`, `name`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`.

For `EventEmitter`s this behaves exactly the same as calling `.listeners` on
the emitter.

For `EventTarget`s this is the only way to get the event listeners for the
event target. This is useful for debugging and diagnostic purposes.

```js
const { getEventListeners, EventEmitter } = require('events');

{
  const ee = new EventEmitter();
  const listener = () => console.log('Events are fun');
  ee.on('foo', listener);
  getEventListeners(ee, 'foo'); // [listener]
}
{
  const et = new EventTarget();
  const listener = () => console.log('Events are fun');
  et.addEventListener('foo', listener);
  getEventListeners(et, 'foo'); // [listener]
}
```

**`Since`**

v15.2.0, v14.17.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `EventEmitter` \| `_DOMEventTarget` |
| `name` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Inherited from

Client.getEventListeners

#### Defined in

node_modules/@types/node/ts4.8/events.d.ts:299

___

### listenerCount

▸ `Static` **listenerCount**(`emitter`, `eventName`): `number`

A class method that returns the number of listeners for the given `eventName`registered on the given `emitter`.

```js
const { EventEmitter, listenerCount } = require('events');
const myEmitter = new EventEmitter();
myEmitter.on('event', () => {});
myEmitter.on('event', () => {});
console.log(listenerCount(myEmitter, 'event'));
// Prints: 2
```

**`Since`**

v0.9.12

**`Deprecated`**

Since v3.2.0 - Use `listenerCount` instead.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | `EventEmitter` | The emitter to query |
| `eventName` | `string` \| `symbol` | The event name |

#### Returns

`number`

#### Inherited from

Client.listenerCount

#### Defined in

node_modules/@types/node/ts4.8/events.d.ts:271

___

### on

▸ `Static` **on**(`emitter`, `eventName`, `options?`): `AsyncIterableIterator`<`any`\>

```js
const { on, EventEmitter } = require('events');

(async () => {
  const ee = new EventEmitter();

  // Emit later on
  process.nextTick(() => {
    ee.emit('foo', 'bar');
    ee.emit('foo', 42);
  });

  for await (const event of on(ee, 'foo')) {
    // The execution of this inner block is synchronous and it
    // processes one event at a time (even with await). Do not use
    // if concurrent execution is required.
    console.log(event); // prints ['bar'] [42]
  }
  // Unreachable here
})();
```

Returns an `AsyncIterator` that iterates `eventName` events. It will throw
if the `EventEmitter` emits `'error'`. It removes all listeners when
exiting the loop. The `value` returned by each iteration is an array
composed of the emitted event arguments.

An `AbortSignal` can be used to cancel waiting on events:

```js
const { on, EventEmitter } = require('events');
const ac = new AbortController();

(async () => {
  const ee = new EventEmitter();

  // Emit later on
  process.nextTick(() => {
    ee.emit('foo', 'bar');
    ee.emit('foo', 42);
  });

  for await (const event of on(ee, 'foo', { signal: ac.signal })) {
    // The execution of this inner block is synchronous and it
    // processes one event at a time (even with await). Do not use
    // if concurrent execution is required.
    console.log(event); // prints ['bar'] [42]
  }
  // Unreachable here
})();

process.nextTick(() => ac.abort());
```

**`Since`**

v13.6.0, v12.16.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | `EventEmitter` | - |
| `eventName` | `string` | The name of the event being listened for |
| `options?` | `StaticEventEmitterOptions` | - |

#### Returns

`AsyncIterableIterator`<`any`\>

that iterates `eventName` events emitted by the `emitter`

#### Inherited from

Client.on

#### Defined in

node_modules/@types/node/ts4.8/events.d.ts:254

▸ `Static` **on**<`E`, `K`\>(`eventEmitter`, `eventName`): `AsyncIterableIterator`<`E` extends `Client`<`boolean`\> ? `ClientEvents`[`K`] : `any`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends `__module` |
| `K` | extends keyof `ClientEvents` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventEmitter` | `E` |
| `eventName` | `E` extends `Client`<`boolean`\> ? `K` : `string` |

#### Returns

`AsyncIterableIterator`<`E` extends `Client`<`boolean`\> ? `ClientEvents`[`K`] : `any`\>

#### Inherited from

Client.on

#### Defined in

node_modules/discord.js/typings/index.d.ts:202

___

### once

▸ `Static` **once**(`emitter`, `eventName`, `options?`): `Promise`<`any`[]\>

Creates a `Promise` that is fulfilled when the `EventEmitter` emits the given
event or that is rejected if the `EventEmitter` emits `'error'` while waiting.
The `Promise` will resolve with an array of all the arguments emitted to the
given event.

This method is intentionally generic and works with the web platform [EventTarget](https://dom.spec.whatwg.org/#interface-eventtarget) interface, which has no special`'error'` event
semantics and does not listen to the `'error'` event.

```js
const { once, EventEmitter } = require('events');

async function run() {
  const ee = new EventEmitter();

  process.nextTick(() => {
    ee.emit('myevent', 42);
  });

  const [value] = await once(ee, 'myevent');
  console.log(value);

  const err = new Error('kaboom');
  process.nextTick(() => {
    ee.emit('error', err);
  });

  try {
    await once(ee, 'myevent');
  } catch (err) {
    console.log('error happened', err);
  }
}

run();
```

The special handling of the `'error'` event is only used when `events.once()`is used to wait for another event. If `events.once()` is used to wait for the
'`error'` event itself, then it is treated as any other kind of event without
special handling:

```js
const { EventEmitter, once } = require('events');

const ee = new EventEmitter();

once(ee, 'error')
  .then(([err]) => console.log('ok', err.message))
  .catch((err) => console.log('error', err.message));

ee.emit('error', new Error('boom'));

// Prints: ok boom
```

An `AbortSignal` can be used to cancel waiting for the event:

```js
const { EventEmitter, once } = require('events');

const ee = new EventEmitter();
const ac = new AbortController();

async function foo(emitter, event, signal) {
  try {
    await once(emitter, event, { signal });
    console.log('event emitted!');
  } catch (error) {
    if (error.name === 'AbortError') {
      console.error('Waiting for the event was canceled!');
    } else {
      console.error('There was an error', error.message);
    }
  }
}

foo(ee, 'foo', ac.signal);
ac.abort(); // Abort waiting for the event
ee.emit('foo'); // Prints: Waiting for the event was canceled!
```

**`Since`**

v11.13.0, v10.16.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `_NodeEventTarget` |
| `eventName` | `string` \| `symbol` |
| `options?` | `StaticEventEmitterOptions` |

#### Returns

`Promise`<`any`[]\>

#### Inherited from

Client.once

#### Defined in

node_modules/@types/node/ts4.8/events.d.ts:194

▸ `Static` **once**(`emitter`, `eventName`, `options?`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `_DOMEventTarget` |
| `eventName` | `string` |
| `options?` | `StaticEventEmitterOptions` |

#### Returns

`Promise`<`any`[]\>

#### Inherited from

Client.once

#### Defined in

node_modules/@types/node/ts4.8/events.d.ts:195

▸ `Static` **once**<`E`, `K`\>(`eventEmitter`, `eventName`): `Promise`<`E` extends `Client`<`boolean`\> ? `ClientEvents`[`K`] : `any`[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends `__module` |
| `K` | extends keyof `ClientEvents` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventEmitter` | `E` |
| `eventName` | `E` extends `Client`<`boolean`\> ? `K` : `string` |

#### Returns

`Promise`<`E` extends `Client`<`boolean`\> ? `ClientEvents`[`K`] : `any`[]\>

#### Inherited from

Client.once

#### Defined in

node_modules/discord.js/typings/index.d.ts:198

___

### setMaxListeners

▸ `Static` **setMaxListeners**(`n?`, ...`eventTargets`): `void`

```js
const {
  setMaxListeners,
  EventEmitter
} = require('events');

const target = new EventTarget();
const emitter = new EventEmitter();

setMaxListeners(5, target, emitter);
```

**`Since`**

v15.4.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `n?` | `number` | A non-negative number. The maximum number of listeners per `EventTarget` event. |
| `...eventTargets` | (`EventEmitter` \| `_DOMEventTarget`)[] | - |

#### Returns

`void`

#### Inherited from

Client.setMaxListeners

#### Defined in

node_modules/@types/node/ts4.8/events.d.ts:317
