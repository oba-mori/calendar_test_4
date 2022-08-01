//確認用
console.log("main.js!!");


//イベント追加
const events = [
	{
		id: "a",
		start: "2022-08-02",
		end: "",
		title: "節分",
		description: "悪い鬼を追い払い福を招く",
		backgroundColor: "red",
		borderColor: "red",
		editable: true
	},
	{
		id: "b",
		start: "2022-08-03",
		end: "",
		title: "立春",
		description: "二十四節気の一つ",
		backgroundColor: "green",
		borderColor: "green",
		editable: true
	},
	{
		id: "c",
		start: "2022-08-04",
		end: "",
		title: "針供養",
		description: "古くなった針などを神社に納めて供養する",
		backgroundColor: "blue",
		borderColor: "blue",
		editable: true
	},

    {
		title: 'My Event',
		start: '2020-08-01',
		url: 'http://google.com/'
	},


];


//
window.onload = (e)=>{

	// Calendar
	const elem = document.getElementById("my-calendar");
	const calendar = new FullCalendar.Calendar(elem, {
		initialView: "timeGridDay",		//表示形式(1ページに1日、時間割)
		initialDate: "2022-08-01",
		events: events,
		dateClick: (e)=>{
			console.log("dateClick:", e);
		},
		eventClick: (e)=>{
			console.log("eventClick:", e.event.title);
		},
		eventDidMount: (e)=>{
			tippy(e.el, {// Tippy
				content: e.event.extendedProps.description,
			});
		}
	});
	calendar.render();
}