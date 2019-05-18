import React from "react";
import { Card, Select } from "antd";
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {onGenreChange} from '../actions'

const Filters = (props) => {
	// console.log(props)
	return (
		<Card title="Filters">
			<Genre onGenreChange={props.onGenreChange} tracks={props.tracks} artists={props.artists} genres={props.genres}/>
		</Card>
	);
};

const Genre = (props) => {

	return (
		<Select
		    style={{ width: 200 }}
		    showSearch
		    placeholder="Choose Genre"
		    onChange={(val) => props.onGenreChange(val, props.tracks)}
		>
		    <Select.Option value="jack">hello</Select.Option>
		    <Select.Option value="lucy">Lucy</Select.Option>
		    <Select.Option value="tom">Tom</Select.Option>
		</Select>
  )
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({onGenreChange}, dispatch)
}

function mapStateToProps(state){
	console.log(state)
	return({tracks: state.tracks,})
}

export default connect(mapStateToProps, mapDispatchToProps)(Filters);