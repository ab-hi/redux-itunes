import React from "react";
import { List, Avatar, Icon } from "antd";
import { connect } from "react-redux";

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);


const TrackList = props => {
	console.log("TrackList", props);
	return (
		<List
			style={{margin: '2em auto', width: '80%'}}
			itemLayout="vertical"
			size="large"
			loading={props.tracks.loading}
			dataSource={props.tracks.tracks}
			renderItem={item => (
				<List.Item
					key={item.trackId}
					actions={[
						<IconText type="dollar" text={item.trackPrice} />,
						<IconText type="file-zip" text={item.collectionPrice} />,
						<IconText type="sound" text={item.primaryGenreName} />
					]}
					extra={
						<img
							width={100}
							alt="logo"
							src={item.artworkUrl100}
						/>
					}
				>
					<List.Item.Meta
						// avatar={<Avatar src={item.artworkUrl30} />}
						title={<a target="_blank" href={item.trackViewUrl}>{item.trackName}</a>}
						description={<a target="_blank" href={item.artistViewUrl}>{item.artistName}</a>}
					/>
					<a target="_blank" href={item.collectionViewUrl}>View Collection</a>
				</List.Item>
			)}
		/>
	);
};

function mapStateToProps(state) {
	console.log('state', state)
	return { tracks: state.tracks };
}

export default connect(mapStateToProps)(TrackList);