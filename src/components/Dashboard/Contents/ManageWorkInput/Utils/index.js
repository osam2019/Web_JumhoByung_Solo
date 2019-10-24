import React from "react";
// import namor from "namor";
import namer from "korean-name-generator";
import "./index.css";

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
	const random = getRandomInt(9)
	return [types[random], times[random]]
}

const newPerson = () => {
  const statusChance = Math.random();
  
  const workTypeAndTime = workTypeAndTimeGenerate()
  return {
	date: dateGenerate(),
    class: classGenerate(),
    name: namer.generate(true),
    age: Math.floor(Math.random() * 30),
	militaryNumber: militaryNumberGenerate(),
    visits: Math.floor(Math.random() * 100),
    workTypes: workTypeAndTime[0],
	workTimes: workTypeAndTime[1],
    status: statusChance < 0.85 ? "완료" : "미완료"
  };
};

export function makeData(len = 30) {
  return range(len).map(d => {
    return {
      ...newPerson(),
      children: range(10).map(newPerson)
    };
  });
}

export const Logo = () =>
  <div style={{ margin: '1rem auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center'}}>
    For more examples, visit {''}
  <br />
    <a href="https://github.com/react-tools/react-table" target="_blank">
      <img
        src="https://github.com/react-tools/media/raw/master/logo-react-table.png"
        style={{ width: `150px`, margin: ".5em auto .3em" }}
      />
    </a>
  </div>;

export const Tips = () =>
  <div style={{ textAlign: "center" }}>
    <em>Tip: Hold shift when sorting to multi-sort!</em>
  </div>;
