import { faker } from '@faker-js/faker';

export interface Task {
    id: string
    name: string
    dueDate: string
    task: string
    status: "Urgent" | "Assign" | "Pending"
    avatar: string

}

const tasks: Task[] = Array(50).fill('').map(() => ({
    id: faker.string.uuid(),
    name: faker.string.alphanumeric(),
    dueDate: faker.date.future().toLocaleDateString(),
    task: faker.lorem.sentence(),
    status: faker.helpers.arrayElement(["Urgent", "Assign", "Pending"]),
    avatar: faker.image.avatar()
}))


export interface Meeting {
    id?: string
    name: string
    time: Date
    avatar?: string
}

const meetings : Meeting[] = Array(3).fill(0).map((_,) => ({
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    time: faker.date.future(),
    avatar: faker.image.avatar()
}))


export interface Leave {
    id?: string
    name: string
    role: string
    half: boolean
    date: Date
}

const roles = ["Admin", "Manager", "Employee"]

const leaves : Leave[] = Array(3).fill(0).map((_,) => ({
    id: faker.string.uuid(),
    name: faker.person.firstName(),
    role: faker.helpers.arrayElement(roles),
    half: faker.datatype.boolean(),
    date: faker.date.future()
}))


export interface WorkLoad {
    user: string
    load: number
}

const workloads : WorkLoad[] = Array(3).fill(0).map((_,) => ({
    user: faker.person.firstName(),
    load: faker.number.int({ min: 0, max: 10 })
}))

export { tasks, meetings, leaves, workloads }