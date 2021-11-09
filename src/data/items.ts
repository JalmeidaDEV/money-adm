import { title } from "process"
import { Item}  from '../types/Item';

export const items: Item[] = [
    { date: new Date(2021, 9, 15), category: 'food', title: 'McDonalds', value: 32.12 },
    { date: new Date(2021, 9, 15), category: 'food', title: 'Burguer King', value: 28 },
    { date: new Date(2021, 9, 15), category: 'rent', title: 'Alugel Apto', value: 2300 },
    { date: new Date(2021, 9, 15), category: 'salary', title: 'Salário', value: 4500 },
];