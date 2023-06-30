import type { User} from './Types'

export function listStudents(){
    const students: User[] = [
        { nickName: '2020212712', password: '2020212712', role: 'user', name: '小唐', unit: [], maxCount: 1},
    ]
    return students
}

export function listTeachers(){
    const teachers: User[] = [
        { nickName: '1000000001', password: '1000000001', role: 'admin', name: '王波', unit: [], maxCount: 5},
     
    ]
    return teachers
}