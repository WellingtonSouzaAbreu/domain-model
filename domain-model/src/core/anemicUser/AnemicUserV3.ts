// 

import { errorMessages } from "@/core/constants/errorMessages"
import { Validator } from "../utils/Validator"

// Primeiro indício de regras (get, set)
export default class AnemicUserV2 {
    constructor(
        private id: number,
        private name: string,
        private email: string,
        private password?: string
    ) {
        this.setId(id)
        this.setName(name)
        this.setEmail(email)
        if (password) this.setPassword(password)
    }

    getId(): number {
        return this.id
    }

    setId(id: number): void {
        this.id = id
    }

    getName(): string {
        return this.name
    }

    setName(name: string): void {
        this.name = name
    }

    getEmail(): string {
        return this.email
    }

    setEmail(email: string): void {
        // Não garante que a insttândia seja construída corretamente
        if (Validator.isEmailValid(email)) {
            this.email = email
        }
    }

    getPassword(): string | undefined {
        return this.password
    }

    setPassword(password: string): void {
        if (password.length < 8) throw new Error(errorMessages.INVALID_PASSWORD)
        this.password = password
    }
}