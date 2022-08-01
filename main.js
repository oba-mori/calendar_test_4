//確認用
console.log("main.js!!");


//イベント追加
const events = [
	{
		id: "a",
		start: "2022-08-01",
		end: "",
		title: "タイトル：A",
		description: "内容：A",
		backgroundColor: "red",
		borderColor: "red",
		editable: true
	},
	{
		id: "b",
		start: "2022-08-03T06:00:00",
		end: "2022-08-03T22:00:00",
		title: "タイトル：B",
		description: "内容：B",
		backgroundColor: "green",
		borderColor: "green",
		editable: true
	},
	{
		id: "c",
		start: "2022-08-04",
		end: "",
		title: "タイトル：C",
		description: "内容：V",
		backgroundColor: "blue",
		borderColor: "blue",
		editable: true
	},



    {
		id: "id-url",				//ID
		start: "2022-08-02",		//開始
		end: "",			//終了
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