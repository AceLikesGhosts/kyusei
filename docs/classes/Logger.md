[kyusei](../README.md) / [Exports](../modules.md) / Logger

# Class: Logger

## Implements

- [`ILogger`](../interfaces/ILogger.md)

## Table of contents

### Constructors

- [constructor](Logger.md#constructor)

### Properties

- [logger](Logger.md#logger)

### Methods

- [error](Logger.md#error)
- [format](Logger.md#format)
- [info](Logger.md#info)
- [throwErrorAndLog](Logger.md#throwerrorandlog)
- [warn](Logger.md#warn)

## Constructors

### constructor

• **new Logger**(`logger`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `logger` | `any` |

#### Defined in

[src/logger/Logger.ts:14](https://github.com/AceLikesGhosts/kyusei/blob/9543d54/src/logger/Logger.ts#L14)

## Properties

### logger

• `Private` **logger**: `any`

#### Defined in

[src/logger/Logger.ts:12](https://github.com/AceLikesGhosts/kyusei/blob/9543d54/src/logger/Logger.ts#L12)

## Methods

### error

▸ **error**(`message`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Returns

`void`

#### Implementation of

[ILogger](../interfaces/ILogger.md).[error](../interfaces/ILogger.md#error)

#### Defined in

[src/logger/Logger.ts:40](https://github.com/AceLikesGhosts/kyusei/blob/9543d54/src/logger/Logger.ts#L40)

___

### format

▸ `Private` **format**(`message`, `logType`): `string`

**`Description`**

Takes a message, and the type of log; and formats it to `[Date] [Type]: message`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `string` | The message to format. |
| `logType` | ``"WARN"`` \| ``"ERROR"`` \| ``"INFO"`` \| ``"ERRNLOG"`` | The type of log. |

#### Returns

`string`

The formatted string.

#### Defined in

[src/logger/Logger.ts:25](https://github.com/AceLikesGhosts/kyusei/blob/9543d54/src/logger/Logger.ts#L25)

___

### info

▸ **info**(`message`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Returns

`void`

#### Implementation of

[ILogger](../interfaces/ILogger.md).[info](../interfaces/ILogger.md#info)

#### Defined in

[src/logger/Logger.ts:30](https://github.com/AceLikesGhosts/kyusei/blob/9543d54/src/logger/Logger.ts#L30)

___

### throwErrorAndLog

▸ **throwErrorAndLog**(`message`, `err`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `err` | `unknown` |

#### Returns

`void`

#### Defined in

[src/logger/Logger.ts:45](https://github.com/AceLikesGhosts/kyusei/blob/9543d54/src/logger/Logger.ts#L45)

___

### warn

▸ **warn**(`message`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Returns

`void`

#### Implementation of

[ILogger](../interfaces/ILogger.md).[warn](../interfaces/ILogger.md#warn)

#### Defined in

[src/logger/Logger.ts:35](https://github.com/AceLikesGhosts/kyusei/blob/9543d54/src/logger/Logger.ts#L35)
