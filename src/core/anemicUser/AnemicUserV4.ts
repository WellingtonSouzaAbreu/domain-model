import { errorMessages } from "@/core/constants/errorMessages"
import { Validator } from "../utils/Validator"

// Primeiro indício de regras (get , set )
export default class AnemicUserV4 {
    constructor(
        private _id: number,
        private _name: string,
        private _email: string,
        private _password?: string
    ) { }

    get id(): number {
        return this._id
    }

    set id(id: number) {
        this._id = id
    }

    get name(): string {
        return this._name
    }

    set name(name: string) {
        this._name = name
    }

    get email(): string {
        return this._email
    }

    set email(email: string) {
        // Não garante que a insttândia seja construída corretamente
        if (Validator.isEmailValid(email)) {
            this._email = email
        }
    }

    get password(): string | undefined {
        return this._password
    }

    set password(password: string) {
        if (password && password.length < 8) throw new Error(errorMessages.INVALID_PASSWORD)
        this._password = password
    }
}