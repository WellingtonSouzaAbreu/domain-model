import { RegionCPF } from "../shared/RegionCPF";
import { User } from "./User";

export class UsersByRegion {
    constructor(private users: User[]) { }

    groupUsers(): Map<RegionCPF, User[]> {
        return this.users.reduce((map, user) => {
            const region = user.cpf.region
            const usersByRegion = map.get(region) || []
            usersByRegion.push(user)
            map.set(region, usersByRegion)
            return map
        }, new Map<RegionCPF, User[]>())
    }
}