import React from 'react'
// import { List, Avatar, Icon } from 'antd';
import {connect} from 'react-redux'

const TrackList = (props) => {
	console.log(props)
	return(
			<p>loaded</p>
		)
}

function mapStateToProps(state){
	return ({trackList: state.results})
}

export default connect(mapStateToProps)(TrackList)

