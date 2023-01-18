

export interface ICard {
    weight: string;
    yummy: string;
    portions: string;
    extra: string;
    isDisable: boolean;
    isSelect: boolean;
}

export const card: Array<ICard> = [
    {weight: '0,5', yummy: 'с фуа-гра', portions: '10', extra: 'мышь в подарок', isDisable: false, isSelect: false},
    {weight: '2', yummy: 'с рыбой', portions: '40', extra: '2 мыши в подарок', isDisable: false, isSelect: false},
    {weight: '5', yummy: 'с курой', portions: '100', extra: '5 мышей в подарок заказчик доваолен', isDisable: true, isSelect: false}
];