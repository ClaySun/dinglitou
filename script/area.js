//地区选择
function area() {
	var UIActionSelector = api.require('UIActionSelector');
	UIActionSelector.open({
		datas : 'widget://script/city.json',
		layout : {
			row : 5,
			col : 3,
			height : 30,
			size : 14,
			sizeActive : 16,
			rowSpacing : 5,
			colSpacing : 10,
			maskBg : 'rgba(0,0,0,0.2)',
			bg : '#fff',
			color : '#888',
			colorActive : '#3896ff',
			colorSelected : '#3896ff'
		},
		animation : true,
		cancel : {
			text : '取消',
			size : 14,
			w : 90,
			h : 35,
			bg : '#3896ff',
			bgActive : '#3896ff',
			color : '#fff',
			colorActive : '#fff'
		},
		ok : {
			text : '确定',
			size : 14,
			w : 90,
			h : 35,
			bg : '#3896ff',
			bgActive : '#3896ff',
			color : '#fff',
			colorActive : '#fff'
		},
		title : {
			text : '请选择',
			size : 14,
			h : 44,
			bg : '#eee',
			color : '#888'
		},
		fixedOn : api.frameName
	});
}