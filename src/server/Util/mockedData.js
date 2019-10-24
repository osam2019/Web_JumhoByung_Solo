export const mockedUnits = [
	{
        topCategory: '공군',
        dep0: '교육사령부',
        dep1: '제3훈련비행단',
        dep2: '항공작전전대',
        dep3: '항공작전과',
        dep4: '-',
        dep5: '-',
        dep6: '-'
    },{
        topCategory: '공군',
        dep0: '교육사령부',
        dep1: '제3훈련비행단',
        dep2: '항공작전전대',
        dep3: '213대대',
        dep4: '-',
        dep5: '-',
        dep6: '-'
    },
	{
        topCategory: '공군',
        dep0: '교육사령부',
        dep1: '제3훈련비행단',
        dep2: '항공작전전대',
        dep3: '215대대',
        dep4: '-',
        dep5: '-',
        dep6: '-'
    },
	{
        topCategory: '공군',
        dep0: '교육사령부',
        dep1: '제3훈련비행단',
        dep2: '항공작전전대',
        dep3: '217대대',
        dep4: '-',
        dep5: '-',
        dep6: '-'
    },
	{
        topCategory: '공군',
        dep0: '교육사령부',
        dep1: '제3훈련비행단',
        dep2: '항공작전전대',
        dep3: '236대대',
        dep4: '-',
        dep5: '-',
        dep6: '-'
    },
	{
        topCategory: '공군',
        dep0: '교육사령부',
        dep1: '제3훈련비행단',
        dep2: '항공작전전대',
        dep3: '운관대대',
        dep4: 'RAPCON',
        dep5: '-',
        dep6: '-'
    },
	{
        topCategory: '공군',
        dep0: '교육사령부',
        dep1: '제3훈련비행단',
        dep2: '항공작전전대',
        dep3: '운관대대',
        dep4: 'BAT',
        dep5: '-',
        dep6: '-'
    },
	{
        topCategory: '공군',
        dep0: '교육사령부',
        dep1: '제3훈련비행단',
        dep2: '항공작전전대',
        dep3: '운관대대',
        dep4: 'TOWER',
        dep5: '-',
        dep6: '-'
    }
]

export const mockedWorkTypes = [
	{
        typename: '야간근무',
        worktime: '1730-07300',
        isInTroopMorning: true,
        outTroopExpMorning: '',
        isInTroopEvening: true,
        outTroopExpEvening: '',
        affectMorningAttend: true,
        absenceExpMorning: '야간근무',
        affectEveningAttend: true,
        absenceExpEvening: '야간근무'
    },{
        typename: '주간근무',
        worktime: '0830-1730',
        isInTroopMorning: true,
        outTroopExpMorning: '',
        isInTroopEvening: true,
        outTroopExpEvening: '',
        affectMorningAttend: false,
        absenceExpMorning: '',
        affectEveningAttend: false,
        absenceExpEvening: ''
    },{
        typename: '비번',
        worktime: '-',
        isInTroopMorning: true,
        outTroopExpMorning: '',
        isInTroopEvening: true,
        outTroopExpEvening: '',
        affectMorningAttend: false,
        absenceExpMorning: '',
        affectEveningAttend: false,
        absenceExpEvening: ''
    },{
		typename: '주간-급양근무',
		worktime: '0430-0830',
		isInTroopMorning: true,
		outTroopExpMorning: '',
		isInTroopEvening: true,
		outTroopExpEvening: '',
		affectMorningAttend: false,
		absenceExpMorning: '',
		affectEveningAttend: false,
		absenceExpEvening: ''
	},{
		typename: '점심-급양근무',
		worktime: '1030-1330',
		isInTroopMorning: true,
		outTroopExpMorning: '',
		isInTroopEvening: true,
		outTroopExpEvening: '',
		affectMorningAttend: false,
		absenceExpMorning: '',
		affectEveningAttend: false,
		absenceExpEvening: ''
	},{
		typename: '야간-급양근무',
		worktime: '1430-1930',
		isInTroopMorning: true,
		outTroopExpMorning: '',
		isInTroopEvening: true,
		outTroopExpEvening: '',
		affectMorningAttend: false,
		absenceExpMorning: '',
		affectEveningAttend: false,
		absenceExpEvening: ''
	}]