[kyusei](README.md) / Exports

# kyusei

## Table of contents

### Classes

- [BaseLogger](classes/BaseLogger.md)
- [Logger](classes/Logger.md)
- [default](classes/default.md)

### Interfaces

- [CommandBase](interfaces/CommandBase.md)
- [CommandData](interfaces/CommandData.md)
- [EventBase](interfaces/EventBase.md)
- [EventData](interfaces/EventData.md)
- [ILogger](interfaces/ILogger.md)
- [KyuOptions](interfaces/KyuOptions.md)
- [SharedData](interfaces/SharedData.md)

### Functions

- [Command](modules.md#command)
- [Event](modules.md#event)

## Functions

### Command

▸ **Command**(`data`): `any`

**`Example`**

```ts
import { Command, CommandBase } from './Command';

@Command({ name: '', description: '', permission: { type: PermissionsBitField.Flags.BanMembers } })
export default class ExampleCommand implements CommandBase
{
 public static execute(interaction: CommandInteraction) 
 {
   // ...
 }
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | [`CommandData`](interfaces/CommandData.md) | The information about the command! |

#### Returns

`any`

#### Defined in

[src/annotations/Command.ts:42](https://github.com/AceLikesGhosts/kyusei/blob/9543d54/src/annotations/Command.ts#L42)

___

### Event

▸ **Event**(`data`): `any`

**`Example`**

```ts
import { Event, EventBase } from './Event';

@Event({ name = 'messageCreate' })
export default class ExampleEvent implements EventBase
{
 public static execute(interaction: CommandInteraction) 
 {
   // ...
 }
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | [`EventData`](interfaces/EventData.md) | The information about the command! |

#### Returns

`any`

#### Defined in

[src/annotations/Event.ts:28](https://github.com/AceLikesGhosts/kyusei/blob/9543d54/src/annotations/Event.ts#L28)
