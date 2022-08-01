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
		start: "2022-08-03T08:30:00",
		end: "2022-08-03T18:30:00",
		title: "立春",
		description: "二十四節気の一つ",
		backgroundColor: "green",
		borderColor: "green",
		editable: true
	},
	{
		id: "c",
		start: "2022-08-04T08:30:00",
		end: "2022-08-04T19:30:00",
		title: "針供養",
		description: "古くなった針などを神社に納めて供養する",
		backgroundColor: "blue",
		borderColor: "blue",
		editable: true
	},
    {
		id: "d",					//ID
		start: "2022-08-01T08:30:00",		//開始
		end: "2022-08-01T17:30:00",			//終了
		title: "タイトル：URL",		//タイトル
		description: "内容：URL",	//内容
		backgroundColor: "blue",	//色
		borderColor: "blue",		//色
		editable: true,				//

		// URL
		url: 'http://google.com/'
	},


];


//
window.onload = (e)=>{

	// Calendar
	const elem = document.getElementById("my-calendar");
	const calendar = new FullCalendar.Calendar(elem, {
		initialView: "timeGridDay",		//表示形式(1ページに1日、時間割)
		// initialView: "dayGridMonth",		//表示形式(1ページに1月、日割)
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