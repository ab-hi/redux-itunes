import React from "react";
import { Card, Select, Divider } from "antd";
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {onGenreChange, onArtistChange} from '../actions'

const Filters = (props) => {
	return (
		<Card title="Filters">
			<Genre onGenreChange={props.onGenreChange} genres={props.filter.genres}/>
			<Divider />
			<Artist onArtistChange={props.onArtistChange} artists={props.filter.artists}/>
		</Card>
	);
};

const Genre = (props) => {
	return (
		<Select
		    style={{ width: 200 }}
		    showSearch
		    placeholder="Choose Genre"
		    onChange={(val) => props.onGenreChange(val)}
		>
			{props.genres.map(item => <Select.Option key={item} value={item}>{item}</Select.Option>)}
		</Select>
  )
}

const Artist = (props) => {
	return (
		<Select
		    style={{ width: 200 }}
		    showSearch
		    placeholder="Choose Artist"
		    onChange={(val) => props.onArtistChange(val)}
		>
		    {props.artists.map(item => <Select.Option key={item} value={item}>{item}</Select.Option>)}
		    <Select.Option key='showAll' value='showAll'>Show All</Select.Option>
		</Select>
  )
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({onGenreChange, onArtistChange}, dispatch)
}

function mapStateToProps(state){
	return({filter: state.filter})
}

export default connect(mapStateToProps, mapDispatchToProps)(Filters);