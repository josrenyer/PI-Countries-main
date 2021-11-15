import React, {useEffect} from "react";
import {getActivity, filterActitivy} from "../../store/actions";
import {useDispatch, useSelector} from "react-redux";


export default function FilterA(){

	const dispatch=useDispatch()
	let allActivities=useSelector((state)=>state.activities)

	useEffect(()=>{
		dispatch(getActivity())
	},[dispatch])


    function handel(e){
		e.preventDefault()
		dispatch(filterActitivy(e.target.value))
	}
	return (
		<select onChange={e=>handel(e)} className="filtroactividad">
		<option value="all">Filter Activity</option>
		{
			allActivities.map((e)=>(
				<option key={e.id} value={e.name}>{e.name}</option>))
			}
		</select>
	)
}