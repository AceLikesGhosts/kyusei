/**
 * A representation of a Kyusei instance.
 */
export type KyuInstance = {
    register<T>(type: RegisterType, toRegister: T): void;
};

/**
 * The type of thing to Register
 */
export enum RegisterType {
    Command,
    Event
}