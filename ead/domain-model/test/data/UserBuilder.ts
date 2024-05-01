import { Id } from "@/core/shared/Id";
import { User, UserProps } from "@/core/user/User";
import { faker } from "@faker-js/faker"
import { generate as cpf } from 'gerador-validador-cpf'

export class UserBuilder {
    private constructor(private props: UserProps) { }

    static create() {
        return new UserBuilder({
            id: Id.generate().value,
            name: faker.person.fullName(),
            cpf: cpf(),
        })
    }

    static generateList(amount: number = 10) {
        return Array(amount).fill(0).map(() => {
            return UserBuilder.create().build()
        })
    }

    withoutId(): UserBuilder {
        this.props.id = undefined
        return this
    }

    withName(name: string): UserBuilder {
        this.props.name = name
        return this
    }

    withoutName(): UserBuilder {
        this.props.name = undefined
        return this
    }

    withCpf(cpf: string): UserBuilder {
        this.props.cpf = cpf
        return this
    }

    build() {
        return new User(this.props)
    }
}