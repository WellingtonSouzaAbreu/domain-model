import { v4 as uuid, validate } from 'uuid';
import { errorMessages } from '../constants/errorMessages';

export class Id {
    readonly value: string
    readonly new: boolean

    constructor(value?: string) {
        this.value = value ?? uuid()
        this.new = !value

        if (!validate(this.value)) {
            throw new Error(errorMessages.INVALID_ID)
        }
    }

    static generate(): Id {
        return new Id()
    }

    isEqual(anotherId?: Id): boolean {
        return this.value === anotherId?.value
    }

    isDifferent(anotherId?: Id): boolean {
        return this.value !== anotherId?.value
    }
}