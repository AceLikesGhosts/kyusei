[kyusei](../README.md) / [Exports](../modules.md) / CommandData

# Interface: CommandData

**`Description`**

The data about a command.

## Table of contents

### Properties

- [description](CommandData.md#description)
- [name](CommandData.md#name)
- [options](CommandData.md#options)
- [permission](CommandData.md#permission)
- [type](CommandData.md#type)

## Properties

### description

• `Optional` **description**: `string`

#### Defined in

[src/annotations/Command.ts:10](https://github.com/AceLikesGhosts/kyusei/blob/9543d54/src/annotations/Command.ts#L10)

___

### name

• **name**: `string`

#### Defined in

[src/annotations/Command.ts:8](https://github.com/AceLikesGhosts/kyusei/blob/9543d54/src/annotations/Command.ts#L8)

___

### options

• `Optional` **options**: [{ `choices?`: [{ `name`: `string` ; `value`: `string`  }] ; `description`: `string` ; `name`: `string` ; `required?`: `boolean` ; `type`: `ApplicationCommandOptionType`  }]

#### Defined in

[src/annotations/Command.ts:14](https://github.com/AceLikesGhosts/kyusei/blob/9543d54/src/annotations/Command.ts#L14)

___

### permission

• `Optional` **permission**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `type` | `bigint` |

#### Defined in

[src/annotations/Command.ts:11](https://github.com/AceLikesGhosts/kyusei/blob/9543d54/src/annotations/Command.ts#L11)

___

### type

• `Optional` **type**: `ApplicationCommandOptionType`

#### Defined in

[src/annotations/Command.ts:9](https://github.com/AceLikesGhosts/kyusei/blob/9543d54/src/annotations/Command.ts#L9)
