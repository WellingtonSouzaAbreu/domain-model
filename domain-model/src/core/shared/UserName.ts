import { errorMessages } from "../constants/errorMessages";
import { Validator } from "../utils/Validator";

export class UserName {
    private readonly name: string

    constructor(name?: string) {
        this.name = name?.trim() || ''

        const errors = Validator.stackErros(
            Validator.notEmpty(this.name, errorMessages.EMPTY_NAME),
            Validator.sizeSmallerThan(this.name, 3, errorMessages.SMALL_NAME),
            Validator.sizeBigThan(this.name, 30, errorMessages.LARGE_NAME),
            Validator.notEmpty(this.name.split(' ')[1], errorMessages.SINGLE_NAME),
            Validator.regex(this.name, /^[a-zA-ZÁ-ú'-\.\s]+$/, errorMessages.NAME_INVALID_CHARACTERS),
        )

        if (errors) throw new Error(errors.join(', '))
    }

    get value(): string {
        return this.name
    }

    get firstName(): string {
        return this.name.split(' ')[0]
    }

    get lastName(): string {
        return this.name.split(' ').pop() as string
    }
}