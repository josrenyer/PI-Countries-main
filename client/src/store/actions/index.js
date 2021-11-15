import axios from "axios";


export function getCountry(){
	return async (dispatch)=>{
		var json= await axios.get('http://localhost:3001/countries');
		console.log(json.data);
		return dispatch({
			type: 'GET_COUNTRY',
			payload: json.data
		})
	}
}

export function searchCountry(value){
	return async (dispatch)=>{
		var search = await axios.get('http://localhost:3001/countries?name='+value);
		return dispatch({
			type: 'SEARCH_COUNTRY',
			payload: search.data
		})
	}
}

export function getCountriesDetail(id){
	return async (dispatch)=>{
		var detail = await axios.get('http://localhost:3001/countries/'+id);
		return dispatch({
			type:'GET_DETAIL',
			payload:detail.data
		})
	} 
}

export function filterContinent(value){
	return{
		type:'FILTER_CONTINENT',
		payload:value
	}
}

export function filterOrder(value){
	return{
		type:'FILTER_ORDER',
		payload:value
	}
}

export function addActivity(body){
	return async (dispatch)=>{
		var activity = await axios.post('http://localhost:3001/activity', body);
		return activity;
	}
}

export function getActivity(){
	return async (dispatch)=>{
		let get= await axios.get("http://localhost:3001/activity");
		return dispatch({
			type: "GET_ACTIVITY",
			payload:get.data
		})
	}
}

export function filterActitivy(value){
	return{
		type:"FILTER_ACITIVY",
		payload:value
	}
}