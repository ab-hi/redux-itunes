import React from 'react';
import { Input, Layout } from 'antd';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {handleSearch} from '../actions'

const Search = (props) => {
	return(
		<Layout.Content style={{margin: '2em auto', width: '80%'}}>
			<Input.Search
		      placeholder="input search text"
		      enterButton="Search"
		      size="large"
		      onSearch={value => props.handleSearch(value)}
		    />
	    </Layout.Content>
    )
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({handleSearch}, dispatch)
}

export default connect(() => ({}), mapDispatchToProps)(Search)