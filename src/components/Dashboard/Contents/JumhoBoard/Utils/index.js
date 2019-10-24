import namer from "korean-name-generator";

const range = len => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
}

const dateGenerate = () => {
	const year = "2019"
	const month = ["09", "10"]
	const day = Array(30).fill(1).map((x, y) => x + y)
	const random_2 = getRandomInt(2)
	const random_30 = getRandomInt(30)
	return year+"-"+month[random_2]+"-"+day[random_30]
}

const classGenerate = () => {
	const classes = ["병장", "상병", "일병", "이병"]
	const random = getRandomInt(4)
	return classes[random]
}

const militaryNumberGenerate = () => {
	const first = ["16", "17", "18", "19"]
	const random = getRandomInt(4)
	const second = String(Math.floor(Math.random() * 9999999) + 10000000);
	return first[random]+"-"+second
}

const workTypeAndTimeGenerate = () => {
	const types = ["오전-급양근무", "점심-급양근무", "저녁-급양근무", "주간근무", "야간근무", "오전근무", "오후근무", "24시간근무", "비번"]
	const times = ["0430-0930", "1030-1330", "1530-1930","0830-1730","1730-(명일)0730","0730-1200","1200-1730","0830-(명일)0830","-"]
	const morningAttend = [false, true, true, true, false, true, true, false, true]
	const eveningAttend = [true, true, true, true, false, true, true, false, true]
	const random = getRandomInt(9)
	return [types[random], times[random], morningAttend[random], eveningAttend[random]]
}

const unitGenerate = () => {
	const category = ["항공작전과", "BAT", "RAPCON", "기상대", "운항관제", "213대대", "215대대"]
	const random = getRandomInt(7)
	return "공군 교육사령부 제3훈련비행단 "+category[random]
}

const morningAttend = () => {
	return Math.floor(Math.random() * 100) > 90 ? false : true
}

const newPerson = () => {
  const statusChance = Math.random();
  
  const workTypeAndTime = workTypeAndTimeGenerate()
  return {
    class: classGenerate(),
    name: namer.generate(true),
	militaryNumber: militaryNumberGenerate(),
	unit: unitGenerate(),
	morningAttend: workTypeAndTime[2],
	eveningAttend: workTypeAndTime[3],
    workTypes: workTypeAndTime[0],
	workTimes: workTypeAndTime[1],
    status: statusChance < 0.85 ? "완료" : "미완료"
  };
};

export function makeData(len = 6) {
  return range(len).map(d => {
    return {
      ...newPerson(),
      children: range(10).map(newPerson)
    };
  });
}